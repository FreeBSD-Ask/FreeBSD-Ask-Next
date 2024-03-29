#/bin/sh

rootdir=/compat/deepin


url="https://cdimage.deepin.com/WSL/deepin.zip"

echo "Begin to install latest Deepin Linux ..."
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

if ! /usr/bin/which -s unzip; then
        echo "unzip not found. install it? (N|y)"
        read  answer
        case $answer in
            [Nn][Oo]|[Nn])
                echo "unzip not installed"
                exit 3
                ;;
            *)
                pkg install -y unzip
                ;;
        esac
    fi
    
echo "now we will bootstrap Deepin"

fetch ${url}
mkdir -p ${rootdir}
unzip deepin.zip 
tar zxvf deepin-rootfs.tar -C ${rootdir} --numeric-owner
rm deepin.exe
rm deepin-rootfs.tar

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

echo "for Deepin Linux, we should change 'compat.linux.osrelease' to upgrade Linux kernel version, continue? (Y|n)"
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
		echo "set your deepin by yourself.bye!"
		exit 0
		;;
	[Yy][Ee][Ss]|[Yy]|"")
		echo "nameserver 223.5.5.5" >> ${rootdir}/etc/resolv.conf
    


echo "Now write appstore sources for Deepin"		
echo "deb https://com-store-packages.uniontech.com/appstorev23 beige appstore" >> /${rootdir}/etc/apt/sources.list


echo " I will add i386 for support wine"   
chroot ${rootdir} /bin/bash -c "dpkg --add-architecture i386"

chroot ${rootdir} /bin/bash -c "apt update && apt upgrade"
    
    echo "all done."
    echo "Now you can run '#chroot /compat/deepin/ /bin/bash' Into Deepin"

                ;;
esac
