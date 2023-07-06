#/bin/sh

rootdir=/compat/arch
url="http://mirrors.cqu.edu.cn/archlinux/iso/latest/archlinux-bootstrap-x86_64.tar.gz"

echo "begin to install archlinux ..."
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

if [ "$(sysrc -n dbus_enable)" = "YES" ]; then
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

echo "now we will bootstrap archlinux"

fetch ${url}
tar xpvf archlinux-bootstrap-x86_64.tar.gz -C /compat --numeric-owner
mv /compat/root.x86_64 ${rootdir}

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
echo "/home ${rootdir}/home nullfs rw,late 0 0" >> /etc/fstab
mount -al

echo "for archlinux,we should change 'compat.linux.osrelease'. continue? (Y|n)"
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
echo "but for easy use ,i can do some init config"
echo "if agree:"
echo "   i set resolv.conf to ali dns"
echo "   init pacman keyring"
echo "   use tsinghua mirror"
echo "continue?[Y|n]"
read answer
case $answer in
	[Nn][Oo]|[Nn])
		echo "set your archlinux by yourself.bye!"
		exit 0
		;;
	[Yy][Ee][Ss]|[Yy]|"")
		echo "nameserver 223.5.5.5" >> ${rootdir}/etc/resolv.conf
		chroot ${rootdir} /bin/bash -c "pacman-key --init"
		chroot ${rootdir} /bin/bash -c "pacman-key --populate archlinux"
		cat ${rootdir}/etc/pacman.d/mirrorlist > mlst.tmp
		echo 'Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch' > ${rootdir}/etc/pacman.d/mirrorlist
		cat mlst.tmp >> ${rootdir}/etc/pacman.d/mirrorlist
		rm mlst.tmp
		echo '[archlinuxcn]' >> ${rootdir}/etc/pacman.conf
		echo 'Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch' >> ${rootdir}/etc/pacman.conf
		echo "Refresh sources and systems"
		chroot ${rootdir} /bin/bash -c "pacman -Sy --noconfirm"
		echo "Refresh key"
  		chroot ${rootdir} /bin/bash -c "pacman -S --noconfirm archlinuxcn-keyring"
    		echo "Install yay"
		chroot ${rootdir} /bin/bash -c "pacman -S --noconfirm yay base base-devel nano yay wqy-zenhei"
		echo "Create user"
		chroot ${rootdir} /bin/bash -c "useradd -G wheel -m test"
		echo "Now modify the sudo configuration"
		echo '%wheel ALL=(ALL) ALL' >> ${rootdir}/etc/sudoers
		echo '%sudo ALL=(ALL:ALL) ALL' >> ${rootdir}/etc/sudoers
		echo "change fakeroot"	
		chroot ${rootdir} /bin/bash -c "pacman -S --noconfirm fakeroot-tcp"
		echo "Make localised settings"
		echo 'zh_CN.UTF-8 UTF-8' >> ${rootdir}/etc/locale.gen
		chroot ${rootdir} /bin/bash -c "locale-gen"
		echo "all done."
                ;;
esac
echo "Now you can run '#chroot /compat/arch/ /bin/bash' Into ArchLinux"
