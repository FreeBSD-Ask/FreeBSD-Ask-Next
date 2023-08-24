#/bin/sh

rootdir=/compat/debian
baseurl="https://mirrors.ustc.edu.cn/debian/"
codename=bookworm

echo "begin to install Debian 12 bookworm ..."
echo "check modules ..."

# check linux module
if [ "$(sysrc -n linux_enable)" = "NO" ]; then
        echo "linux module should be loaded. Continue?(N|y)"
        read answer
        case $answer in
                [Nn][Oo]|[Nn])
                        echo "linux module not loaded"
                        exit 1
                        ;;
                *)
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
            [Nn][Oo]|[Nn])
                echo "dbus not installed"
                exit 2
                ;;
            *)
                pkg install -y dbus
                ;;
        esac
    fi

if [ "$(sysrc -n dbus_enable)" = "NO" ]; then
        echo "dbus should be enable. Continue?(N|y)"
        read answer
        case $answer in
            [Nn][Oo]|[Nn])
                        echo "dbus not running"
                        exit 2
                        ;;
            *)
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
            [Nn][Oo]|[Nn])
                echo "debootstap not installed"
                exit 3
                ;;
            *)
                pkg install -y debootstrap
                ;;
        esac
    fi
echo "now we will bootstrap ${codename}.press any key."
read  answer

debootstrap ${codename} ${rootdir} ${baseurl}

if [ ! "$(sysrc -f /boot/loader.conf -qn nullfs_load)" = "YES" ]; then
        echo "nullfs_load should load. continue? (N|y)"
        read answer
        case $answer in
            [Nn][Oo]|[Nn])
                echo "nullfs not load"
				exit 4
                ;;
            *)
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

echo "NOW I will should change 'compat.linux.osrelease'. continue? (Y|n)"
read answer
case $answer in
	[Nn][Oo]|[Nn])
		echo "close to success"
		exit 4
		;;
	[Yy][Ee][Ss]|[Yy]|"")
		echo "compat.linux.osrelease=6.2.10" >> /etc/sysctl.conf
		sysctl compat.linux.osrelease=6.2.10
                ;;
esac

echo "add ustc apt sources"
echo "deb http://mirrors.ustc.edu.cn/debian stable main contrib non-free non-free-firmware" > /compat/ubuntu/etc/apt/sources.list
echo "# deb-src http://mirrors.ustc.edu.cn/debian stable main contrib non-free non-free-firmware" >> /compat/ubuntu/etc/apt/sources.list
echo "deb http://mirrors.ustc.edu.cn/debian stable-updates main contrib non-free non-free-firmware" >> /compat/ubuntu/etc/apt/sources.list
echo "# deb-src http://mirrors.ustc.edu.cn/debian stable-updates main contrib non-free non-free-firmware" >> /compat/ubuntu/etc/apt/sources.list
echo "# deb http://mirrors.ustc.edu.cn/debian stable-proposed-updates main contrib non-free non-free-firmware" >> /compat/ubuntu/etc/apt/sources.list
echo "# deb-src http://mirrors.ustc.edu.cn/debian stable-proposed-updates main contrib non-free non-free-firmware" >> /compat/ubuntu/etc/apt/sources.list


echo "remove rsyslog and install nano fonts-wqy-microhei  fonts-wqy-zenhei language-pack-zh-hans and wget"
chroot ${rootdir} /bin/bash -c "apt remove rsyslog && apt update && apt upgrade && apt install nano wget fonts-wqy-microhei  fonts-wqy-zenhei language-pack-zh-hans"
echo "Now you can run '#chroot /compat/debian/ /bin/bash' Into debian"
