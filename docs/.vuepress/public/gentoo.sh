#/bin/sh

rootdir=/compat/gentoo
fetch https://mirrors.ustc.edu.cn/gentoo/releases/amd64/autobuilds/latest-stage3-amd64-systemd.txt
gentoodownload=$(echo |sed -n '3p'  latest-stage3-amd64-systemd.txt|awk -F ' ' '{print $1}')
rm latest-stage3-amd64-systemd.txt


url="https://mirrors.ustc.edu.cn/gentoo/releases/amd64/autobuilds/"

echo "Begin to install latest Gentoo Linux ..."
echo "check modules ..."

# check linux module
if [ "$(sysrc -n linux_enable)" = "NO" ]; then
        echo "linux module should be loaded. Continue?(Y|n)"
        read answer
        case $answer in
                [Nn][Oo]|[Nn])
                        echo "linux module not loaded"
                        exit 1
                        ;;
                [Yy][Ee][Ss]|[Yy]|"")
                        sysrc linux_enable=YES
                        ;;
        esac
fi
echo "start linux"
service linux start

# check dbus
if ! /usr/bin/which -s dbus-daemon;then
        echo "dbus-daemon not found. install it [Y|n]"
        read  answer
        case $answer in
            [Nn][Oo]|[Nn])
                echo "dbus not installed"
                exit 2
                ;;
            [Yy][Ee][Ss]|[Yy]|"")
                pkg install -y dbus
                ;;
        esac
    fi

if [ "$(sysrc -n dbus_enable)" != "YES" ]; then
        echo "dbus should be enable. Continue?(Y|n)"
        read answer
        case $answer in
            [Nn][Oo]|[Nn])
                        echo "dbus not running"
                        exit 2
                        ;;
            [Yy][Ee][Ss]|[Yy]|"")
                        sysrc dbus_enable=YES
                        ;;
        esac
fi
echo "start dbus"
service dbus start

echo "now we will bootstrap gentoo"

fetch ${url}/$gentoodownload
mkdir -p ${rootdir}
tar zxvf stage3-amd64-systemd*.tar.xz -C ${rootdir} --numeric-owner
rm stage3-amd64-systemd*.tar.xz

if [ ! "$(sysrc -f /boot/loader.conf -qn nullfs_load)" = "YES" ]; then
        echo "nullfs_load should load. continue? (Y|n)"
        read answer
        case $answer in
            [Nn][Oo]|[Nn])
                echo "nullfs not load"
		exit 3
                ;;
            [Yy][Ee][Ss]|[Yy]|"")
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
#echo "/home ${rootdir}/home nullfs rw,late 0 0" >> /etc/fstab
mount -al

echo "for Gentoo Linux, we should change 'compat.linux.osrelease' to upgrade Linux kernel version, continue? (Y|n)"
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
echo "complete!"
echo "to use: chroot ${rootdir} /bin/bash"
echo ""
echo " I will set resolv.conf to ali dns"
echo "continue?[Y|n]"
read answer
case $answer in
	[Nn][Oo]|[Nn])
		echo "set your gentoo by yourself.bye!"
		exit 0
		;;
	[Yy][Ee][Ss]|[Yy]|"")
		echo "nameserver 223.5.5.5" >> ${rootdir}/etc/resolv.conf
    


echo "Now write MAKEOPTS FEATURES in /compat/gentoo/etc/portage/make.conf -- using USTC mirrors for GENTOO_MIRRORS"		
echo "MAKEOPTS=\"-j2\"" >> /${rootdir}/etc/portage/make.conf
echo "GENTOO_MIRRORS=\"https://mirrors.ustc.edu.cn/gentoo\"" >> ${rootdir}/etc/portage/make.conf
echo "FEATURES=\"-ipc-sandbox -mount-sandbox -network-sandbox -pid-sandbox -xattr -sandbox -usersandbox\"" >> ${rootdir}/etc/portage/make.conf

echo "Now setting soft sources --Using TUNA mirror for emerge-webrsync"	
mkdir -p ${rootdir}/etc/portage/repos.conf
cp ${rootdir}/usr/share/portage/config/repos.conf ${rootdir}/etc/portage/repos.conf/gentoo.conf 
sed -i "" 's/rsync.gentoo.org/mirrors.tuna.tsinghua.edu.cn/' ${rootdir}/etc/portage/repos.conf/gentoo.conf

echo " I will run emerge-webrsync"   
chroot ${rootdir} /bin/bash -c "emerge-webrsync"
    
    echo "all done."
    echo "Now you can run '#chroot /compat/gentoo/ /bin/bash' Into Gentoo"

                ;;
esac
