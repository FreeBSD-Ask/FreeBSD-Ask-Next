# 第六节 安装 Cinnamon

>以下教程适用于 shell 为 bash/sh/zsh 的用户。
>
>首先看看现在自己的 shell 是不是 `sh`,`bash`,`zsh`：
>
>`# echo  $0`
>
>如果是 `sh`,`bash`,`zsh` 其中之一，请继续；

## 安装

```
# pkg install xorg lightdm lightdm-gtk-greeter cinnamon wqy-fonts
```

## 配置

```
# ee ~/.xinitrc
```
添加：

```
exec cinnamon-session
```

```
# ee /etc/fstab
```

添加：

```
proc /proc procfs rw 0 0
```

### 添加启动项：
```
# sysrc dbus_enable="YES"
# sysrc lightdm_enable="YES"
```

>目前不知道怎么设置中文。如果您知道请提交 issue 或者 pull。