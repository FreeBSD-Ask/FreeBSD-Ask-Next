# 第三节 Nodejs 相关

## 在FreeBSD 13上的安装

由于`node`依赖`/lib/libcrypto.so.111`的具体版本，就现在而言，官方pkg源里提供的node软件包，只有node14是可用的。这就意味着如果需要安装yarn或者npm之类的包管理器，你必须在对应的node版本上留个心眼。

一般而言，如果想要在FreeBSD 13上安装node+yarn，那么你只能这样做：

```
 # pkg install yarn-node14
```

源里确实提供了16和17的版本，但是实际上在FreeBSD 13上安装，会出现下列错误：

```
 # pkg install node
 % node
ld-elf.so.1: /lib/libcrypto.so.111: version OPENSSL_1_1_1e required by /usr/local/bin/node not found
```

所以还是老老实实用node14吧。。。
