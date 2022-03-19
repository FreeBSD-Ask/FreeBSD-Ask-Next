# 第三节 Nodejs 相关

## 在FreeBSD 13上的安装

`node`依赖`/lib/libcrypto.so.111`的某个特定版本，而这意味着如果你需要在FreeBSD上使用NodeJS，你必须留意FreeBSD本身的版本，尤其是当你的pkg配置使用了latest源时。

一般而言，如果想要在FreeBSD 13上安装node+yarn，请这么做：

```
 # freebsd-update fetch install
 # pkg install yarn
```

如果你跳过了FreeBSD的升级而直接做第二步，在FreeBSD 13上，你可能会碰到这样子错误：

```
 # pkg install yarn
 % node
ld-elf.so.1: /lib/libcrypto.so.111: version OPENSSL_1_1_1e required by /usr/local/bin/node not found
```

所以还是老老实实地照着教程走吧。。
