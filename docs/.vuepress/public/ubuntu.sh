#/bin/sh

rootdir=/compat/ubuntu
baseurl="https://mirrors.ustc.edu.cn/ubuntu/"
codename=jammy

echo "begin to install ubuntu ..."
echo "check modules ..."

# check linux module
if [ "$(sysrc -n linux_enable)" = "NO" ]; then
        echo "linux module should be loaded. Continue?(N|y)"
        read answer
        case $answer in
                [Nn][Oo]|[Nn]|"")
                        echo "linux module not loaded"
                        exit 1
                        ;;
                [Yy][Ee][Ss]|[Yy])
                        sysrc linux_enable=YES
                        ;;
        esac
fi
echo "start linux"
service linux start

# check dbus
if ! /usr/bin/which -s dbus-daemon;then
        echo "dbus-daemon not found. install it [N|y]"
        read  answer
        case $answer in
            [Nn][Oo]|[Nn]|"")
                echo "dbus not installed"
                exit 2
                ;;
            [Yy][Ee][Ss]|[Yy])
                pkg install -y dbus
                ;;
        esac
    fi

if [ "$(sysrc -n dbus_enable)" = "NO" ]; then
        echo "dbus should be enable. Continue?(N|y)"
        read answer
        case $answer in
            [Nn][Oo]|[Nn]|"")
                        echo "dbus not running"
                        exit 2
                        ;;
            [Yy][Ee][Ss]|[Yy])
                        sysrc dbus_enable=YES
                        ;;
        esac
fi
echo "start dbus"
service dbus start

if ! /usr/bin/which -s debootstrap; then
        echo "debootstrap not found. install it? (N|y)"
        read  answer
        case $answer in
            [Nn][Oo]|[Nn]|"")
                echo "debootstap not installed"
                exit 3
                ;;
            [Yy][Ee][Ss]|[Yy])
                pkg install -y debootstrap
                ;;
        esac
    fi
echo "now we will bootstrap ${codename}.press any key."
read  answer

sh `which debootstrap` ${codename} ${rootdir} ${baseurl}

if [ ! "$(sysrc -f /boot/loader.conf -qn nullfs_load)" = "YES" ]; then
        echo "nullfs_load should load. continue? (N|y)"
        read answer
        case $answer in
            [Nn][Oo]|[Nn]|"")
                echo "nullfs not load"
				exit 4
                ;;
            [Yy][Ee][Ss]|[Yy])
                sysrc -f /boot/loader.conf nullfs_load=yes
                ;;
        esac
    fi

if ! kldstat -n nullfs >/dev/null 2>&1;then
        echo "load nullfs module"
        kldload -v nullfs
fi

echo "mount some fs for linux"
echo "devfs ${rootdir}/dev devfs rw,late 0 0" >> /etc/fstab
echo "tmpfs ${rootdir}/dev/shm tmpfs rw,late,size=1g,mode=1777 0 0" >> /etc/fstab
echo "fdescfs ${rootdir}/dev/fd fdescfs rw,late,linrdlnk 0 0" >> /etc/fstab
echo "linprocfs ${rootdir}/proc linprocfs rw,late 0 0" >> /etc/fstab
echo "linsysfs ${rootdir}/sys linsysfs rw,late 0 0" >> /etc/fstab
echo "/tmp ${rootdir}/tmp nullfs rw,late 0 0" >> /etc/fstab
echo "/home ${rootdir}/home nullfs rw,late 0 0" >> /etc/fstab
mount -al

chroot ${rootdir} /bin/bash -c "rm /var/cache/apt/archives/rsyslog*.deb"
chroot ${rootdir} /bin/bash -c "DEBIAN_FRONTEND=noninteractive dpkg --force-depends --force-confdef --force-confold -i /var/cache/apt/archives/*.deb"
chroot ${rootdir} /bin/bash -c "chmod 755 /tmp"

echo "add ustc apt sources"
echo "deb http://mirrors.ustc.edu.cn/ubuntu/ jammy main restricted universe multiverse" > /compat/ubuntu/etc/apt/sources.list
echo "deb-src http://mirrors.ustc.edu.cn/ubuntu/ jammy main restricted universe multiverse" >> /compat/ubuntu/etc/apt/sources.list
echo "deb http://mirrors.ustc.edu.cn/ubuntu/ jammy-security main restricted universe multiverse" >> /compat/ubuntu/etc/apt/sources.list
echo "deb-src http://mirrors.ustc.edu.cn/ubuntu/ jammy-security main restricted universe multiverse" >> /compat/ubuntu/etc/apt/sources.list
echo "deb http://mirrors.ustc.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse" >> /compat/ubuntu/etc/apt/sources.list
echo "-src http://mirrors.ustc.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse" >> /compat/ubuntu/etc/apt/sources.list
echo "deb http://mirrors.ustc.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse" >> /compat/ubuntu/etc/apt/sources.list
echo "deb-src http://mirrors.ustc.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse" >> /compat/ubuntu/etc/apt/sources.list

chroot ${rootdir} /bin/bash -c "apt update"

