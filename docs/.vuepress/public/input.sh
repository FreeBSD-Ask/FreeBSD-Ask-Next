#/bin/sh

echo -e "\e[1;32m begin to init ... \e[0m"

bf=$(cat <<EOF
export LANG=zh_CN.UTF-8
export LC_ALL=zh_CN.UTF-8
export LANGUAGE=zh_CN.UTF-8
export XMODIFIERS='@im=fcitx'
export GTK_IM_MODULE=fcitx/xim
export QT_IM_MODULE=fcitx
EOF
)

bi=$(cat <<EOF
export LANG=zh_CN.UTF-8
export LC_ALL=zh_CN.UTF-8
export LANGUAGE=zh_CN.UTF-8
export XIM=ibus
export GTK_IM_MODULE=ibus
export QT_IM_MODULE=ibus
export XMODIFIERS=@im=ibus
export XIM_PROGRAM="ibus-daemon"
export XIM_ARGS="--daemonize --xim"
EOF
)

cf=$(cat <<EOF
setenv LANG zh_CN.UTF-8
setenv LC_ALL zh_CN.UTF-8
setenv LANGUAGE zh_CN.UTF-8
setenv XMODIFIERS @im=fcitx
setenv GTK_IM_MODULE fcitx/xim
setenv QT_IM_MODULE fcitx
EOF
)

ci=$(cat <<EOF
setenv LANG zh_CN.UTF-8
setenv LC_ALL zh_CN.UTF-8
setenv LANGUAGE zh_CN.UTF-8
setenv XIM ibus
setenv GTK_IM_MODULE ibus
setenv QT_IM_MODULE ibus
setenv XMODIFIERS @im=ibus
setenv XIM_PROGRAM ibus-daemon
setenv XIM_ARGS "--daemonize --xim"
EOF
)

echo -e "\e[1;32m add a normal user and invite into wheel \e[0m"
read -p "user name ? " username
pw useradd ${username} -m -c ${username} -w yes
pw groupmod wheel -m ${username}

echo -e "\e[1;32m select your shell:sh csh bash zsh \e[0m"
read -p "use shell:[sh] ? " myshell
echo -e "\e[1;32m select desktop evironment:kde xfce mate cinnamon gnome \e[0m"
read -p "desktop evironment ?[xfce] " myde
echo -e "\e[1;32m select desktop manager(if use gnome always set to gdm):sddm lightdm gdm \e[0m"
read -p "desktop evironment ?[sddm] " mydm
echo -e "\e[1;32m select your input method: ibus fcitx \e[0m"
read -p "input method ?[ibus] " myim
echo -e "\e[1;32m do you use rime?y|n \e[0m"
read -p "use rime ?[n] " myrime
echo -e "\e[1;32m sddm lightdm gdm source .xprofile ,use .xprofile ?y|n \e[0m"
read -p "use .xprofile[n] ? " myxprofile
case $myshell in
    sh)
        
        ;;
    csh)
        
        ;;
    bash)
        pkg install -y bash
        ;;
    zsh)
        pkg install -y zsh
        ;;
    *)
        myshell="sh"
esac
chsh -s $myshell $username
case $myim in
    fcitx)
        pkg install -y fcitx5 fcitx5-qt5 fcitx5-qt6 fcitx5-configtool fcitx5-gtk2 fcitx5-gtk3 fcitx5-gtk4 
        ;;
    *)
        myim="ibus"
        pkg install -y ibus
        ;;
esac
case $myrime in
    y)
        pkg install -y zh-rime-data-full
        if [ $myim = "fcitx" ];then
            pkg install -y zh-fcitx5-rime
            su -m $username -c "mkdir -p /home/${username}/.local/share/fcitx5/rime;cd /home/${username}/.local/share/fcitx5/rime;rime_deployer --add-schema wubi86;rime_deployer --add-schema pinyin_simp"
        else
            pkg install -y zh-ibus-rime
            su -m $username -c "mkdir -p /home/${username}/.config/ibus/rime;cd /home/${username}/.config/ibus/rime;rime_deployer --add-schema wubi86;rime_deployer --add-schema pinyin_simp"
        fi
        ;;
    *)
        if [ $myim = "fcitx" ];then
            pkg install -y zh-fcitx5-chinese-addons
        fi
        if [ $myim = "ibus" ];then
            if [ $(pkg search zh-ibus-libpinyin) ];then
                pkg install -y zh-ibus-libpinyin
            else
                pkg install -y zh-ibus-pinyin
            fi
        fi
        ;;   
esac

case $myde in
    kde)
        echo -e "\e[1;32m install kde \e[0m"
        pkg install -y kde5
        ;;
    mate)
        echo -e "\e[1;32m install mate \e[0m"
        pkg install -y mate
        ;;
    cinnamon)
        echo -e "\e[1;32m install cinnamon \e[0m"
        pkg install -y cinnamon
        echo "proc /proc procfs rw 0 0" >> /etc/fstab
        ;;
    gnome)
        echo "install gnome"
        pkg install -y gnome
        mydm="gdm"
        echo "proc /proc procfs rw 0 0" >> /etc/fstab
        ;;
    *)
        myde="xfce"
        echo -e "\e[1;32m install xfce \e[0m"
        pkg install -y xfce
        ;;
esac
case $mydm in
    lightdm)
        pkg install -y lightdm lightdm-gtk-greeter
        sysrc lightdm_enable=YES
        ;;
    gdm)
        sysrc gdm_enable=YES
        ;;
    *)
        mydm="sddm"
        pkg install -y sddm
        sysrc sddm_enable=YES
        ;;
esac

if [ $myxprofile ] && [ $myxprofile = "y" ] && [ $myim = "ibus" ];then
    echo "$bi" >> /home/$username/.xprofile
    chown $username:$username /home/$username/.xprofile
    echo -e "\e[1;32m all done.please reboot \e[0m"
    exit
fi
if [ $myxprofile ] && [ $myxprofile = "y" ] && [ $myim = "fcitx" ];then
    echo "$bf" >> /home/$username/.xprofile
    chown $username:$username /home/$username/.xprofile
    echo -e "\e[1;32m all done.please reboot \e[0m"
    exit
fi

if [ $myde = "gnome" ];then
    echo "ibus is the better in gnome, set ibus"
    echo "$bi" >> /home/$username/.profile
    chown $username:$username /home/$username/.profile
fi
if [ $mydm = "sddm" ] && [ $myim = "ibus" ];then
    case $myshell in
        sh)
            echo "$bi" >> /home/$username/.profile
            chown $username:$username /home/$username/.profile
            ;;
        bash)
            echo "$bi" >> /home/$username/.bash_profile
            chown $username:$username /home/$username/.bash_profile
            ;;
        zsh)
            echo "$bi" >> /home/$username/.zprofile
            chown $username:$username /home/$username/.zprofile
            ;;                
        csh)
            echo "$ci" >> /home/$username/.cshrc
            chown $username:$username /home/$username/.cshrc
        esac
fi
if [ $mydm = "sddm" ] && [ $myim = "fcitx" ];then
    case $myshell in
        sh)
            echo "$bf" >> /home/$username/.profile
            chown $username:$username /home/$username/.profile

            ;;
        bash)
            echo "$bf" >> /home/$username/.bash_profile
            chown $username:$username /home/$username/.bash_profile
            ;;
        zsh)
            echo "$bf" >> /home/$username/.zprofile
            chown $username:$username /home/$username/.zprofile
            ;;                
        csh)
            echo "$cf" >> /home/$username/.cshrc
            chown $username:$username /home/$username/.cshrc
    esac
fi
if [ $mydm = "lightdm" ] && [ $myim = "fcitx" ];then
    echo "$bf" >> /home/$username/.profile
    chown $username:$username /home/$username/.profile
fi
echo -e "\e[1;32m all done.please reboot \e[0m"
exit
