/**
 * @file configs/sidebar.ts
 * @brief Contains the SidebarConfig object.
 * @copyright Copyright (c) 2022 FreeBSD Chinese Community. All rights reserved.
 */

import type {SidebarConfig} from '@vuepress/theme-default';

export const sideBarConfig: SidebarConfig = [
  {
    text: 'FreeBSD 从入门到跑路',
    children: ['/README.md'],
  },
  {
    text: '目录',
    children: ['/SUMMARY.md'],
  },
  {
    text: '第0章 FreeBSD 中文社区',
    children: [
		'/di-0-zhang-freebsd-zhong-wen-she-qu/di-0.1-jie-freebsd-faq.md',
		'/di-0-zhang-freebsd-zhong-wen-she-qu/di-0.2-jie-freebsd-zhong-wen-she-qu-cfc-fa-zhan-gui-hua.md',
		'/di-0-zhang-freebsd-zhong-wen-she-qu/di-0.3-jie-freebsd-de-bu-zu-zhi-chu.md',
		'/di-0-zhang-freebsd-zhong-wen-she-qu/di-0.4-jie-freebsd-fa-hang-shuo-ming.md',
    ],
  },
  {
    text: '第1章 走近 FreeBSD',
    children: [
		'/di-1-zhang-zou-jin-freebsd/di-1.1-jie-shi-mo-shi-unix.md',
		'/di-1-zhang-zou-jin-freebsd/di-1.2-jie-shi-mo-shi-unixlike.md',
		'/di-1-zhang-zou-jin-freebsd/di-1.3-jie-shi-mo-shi-linux.md',
		'/di-1-zhang-zou-jin-freebsd/di-1.4-jie-freebsd-yu-qi-ta-cao-zuo-xi-tong.md',
		'/di-1-zhang-zou-jin-freebsd/di-1.5-jie-wei-shi-mo-yao-shi-yong-freebsd.md',
		'/di-1-zhang-zou-jin-freebsd/di-1.6-jie-suo-wei-kai-yuan-zhe-xue.md',
		'/di-1-zhang-zou-jin-freebsd/di-1.7-jie-qi-ta-bsd-jian-jie.md',
		'/di-1-zhang-zou-jin-freebsd/di-1.8-jie-linux-yong-hu-qian-yi-zhi-bei.md',
		'/di-1-zhang-zou-jin-freebsd/di-1.9-jie-can-kao-zi-liao-yu-gong-xian-zhe-ming-dan.md',
		'/di-1-zhang-zou-jin-freebsd/di-1.10-jie-bian-zhuan-shuo-ming.md',
    ],
  },
  {
    text: '第2章 安装 FreeBSD',
    children: [
		'/di-2-zhang-an-zhuang-freebsd/di-2.0-jie-tu-jie-an-zhuang.md',
		'/di-2-zhang-an-zhuang-freebsd/di-2.1-jie-san-zhong-xu-ni-ji-yu-freebsd-ban-ben-bi-jiao.md',
		'/di-2-zhang-an-zhuang-freebsd/di-2.2-jie-freebsd-13.0-an-zhuang-ji-yu-virtual-box.md',
		'/di-2-zhang-an-zhuang-freebsd/di-2.3-jie-freebsd-13.0-an-zhuang-ji-yu-vmware-workstation-pro.md',
		'/di-2-zhang-an-zhuang-freebsd/di-2.4-jie-teng-xun-yun-qing-liang-yun-ji-qi-ta-fu-wu-qi-dd-an-zhuang-freebsd.md',
		'/di-2-zhang-an-zhuang-freebsd/di-2.5-jie-shou-dong-an-zhuang-freebsd.md',
		'/di-2-zhang-an-zhuang-freebsd/di-2.6-jie-ee-yong-fa-ji-wang-luo-pei-zhi.md',
		'/di-2-zhang-an-zhuang-freebsd/di-2.7-jie-chang-yong-ruan-jian-yu-ssh-pei-zhi.md',
		'/di-2-zhang-an-zhuang-freebsd/di-2.8-jie-wu-li-ji-an-zhuang-yu-ying-jian-xuan-pei.md',
		'/di-2-zhang-an-zhuang-freebsd/di-2.9-jie-wu-li-ji-xia-xian-ka-de-pei-zhi.md',
		'/di-2-zhang-an-zhuang-freebsd/di-2.10-jie-wu-li-ji-xia-chu-mo-ban-de-she-zhi.md',
		'/di-2-zhang-an-zhuang-freebsd/di-2.11-jie-wu-li-ji-sheng-ka-yu-wang-ka-she-zhi.md',
		'/di-2-zhang-an-zhuang-freebsd/di-2.12-jie-da-yin-ji-de-an-zhuang.md',
		'/di-2-zhang-an-zhuang-freebsd/di-2.13-jie-wu-xian-lan-ya-shu-biao-de-she-zhi.md',
    ],
  },
  {
    text: '第3章 软件源及包管理器',
    children: [
		'/di-3-zhang-ruan-jian-yuan-ji-bao-guan-li-qi/di-3.0-jie-bao-guan-li-qi-gai-shu.md',
		'/di-3-zhang-ruan-jian-yuan-ji-bao-guan-li-qi/di-3.1-jie-freebsd-jing-xiang-zhan-xian-zhuang.md',
		'/di-3-zhang-ruan-jian-yuan-ji-bao-guan-li-qi/di-3.2-jie-freebsd-huan-yuan-fang-shi.md',
		'/di-3-zhang-ruan-jian-yuan-ji-bao-guan-li-qi/di-3.3-jie-gitup-de-yong-fa.md',
		'/di-3-zhang-ruan-jian-yuan-ji-bao-guan-li-qi/di-3.4-jie-ruan-jian-bao-guan-li-qi-pkg-de-yong-fa.md',
		'/di-3-zhang-ruan-jian-yuan-ji-bao-guan-li-qi/di-3.5-jie-tong-guo-yuan-dai-ma-ports-fang-shi-an-zhuang-ruan-jian.md',
		'/di-3-zhang-ruan-jian-yuan-ji-bao-guan-li-qi/di-3.6-jie-tong-guo-dvd-an-zhuang-ruan-jian.md',
    ],
  },
  {
    text: '第4章 桌面安装',
    children: [
		'/di-4-zhang-zhuo-mian-an-zhuang/di-4.0-jie-gai-shu.md',
		'/di-4-zhang-zhuo-mian-an-zhuang/di-4.1-jie-an-zhuang-xorg.md',
		'/di-4-zhang-zhuo-mian-an-zhuang/di-4.2-jie-an-zhuang-kde-5.md',
		'/di-4-zhang-zhuo-mian-an-zhuang/di-4.3-jie-an-zhuang-gnome.md',
		'/di-4-zhang-zhuo-mian-an-zhuang/di-4.4-jie-an-zhuang-mate.md',
		'/di-4-zhang-zhuo-mian-an-zhuang/di-4.5-jie-an-zhuang-xfce.md',
		'/di-4-zhang-zhuo-mian-an-zhuang/di-4.6-jie-an-zhuang-cinnamon.md',
		'/di-4-zhang-zhuo-mian-an-zhuang/di-4.7-jie-an-zhuang-lumina.md',
		'/di-4-zhang-zhuo-mian-an-zhuang/di-4.8-jie-root-deng-lu-zhuo-mian.md',
		'/di-4-zhang-zhuo-mian-an-zhuang/di-4.9-jie-zhu-ti-yu-mei-hua.md',
		'/di-4-zhang-zhuo-mian-an-zhuang/di-4.10-jie-yuan-cheng-zhuo-mian-guan-li.md',
		'/di-4-zhang-zhuo-mian-an-zhuang/di-4.11-jie-an-zhuang-wayland-ke-xuan.md',
    ],
  },
  {
    text: '第5章 输入法及常用软件',
    children: [
		'/di-5-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-5.1-jie-fcitx-shu-ru-fa-kuang-jia.md',
		'/di-5-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-5.2-jie-ibus-shu-ru-fa-kuang-jia.md',
		'/di-5-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-5.3-jie-wu-bi-shu-ru-fa.md',
		'/di-5-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-5.4-jie-firefox-yu-chromium-an-zhuang.md',
		'/di-5-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-5.5-jie-linux-jian-rong-ceng.md',
		'/di-5-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-5.6-jie-an-zhuang-jin-shan-wps.md',
		'/di-5-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-5.7-jie-an-zhuang-qq.md',
		'/di-5-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-5.8-jie-geng-huan-zi-ti.md',
		'/di-5-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-5.9-jie-wine.md',
		'/di-5-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-5.10-jie-ya-suo-yu-jie-ya.md',
    ],
  },
  {
    text: '第6章 文件系统与磁盘管理',
    children: [
		'/di-6-zhang-wen-jian-xi-tong-yu-ci-pan-guan-li/di-6.1-jie-ufs.md',
		'/di-6-zhang-wen-jian-xi-tong-yu-ci-pan-guan-li/di-6.2-jie-zfs.md',
		'/di-6-zhang-wen-jian-xi-tong-yu-ci-pan-guan-li/di-6.3-jie-ci-pan-kuo-rong.md',
		'/di-6-zhang-wen-jian-xi-tong-yu-ci-pan-guan-li/di-6.4-jie-ntfs-de-gua-zai.md',
		'/di-6-zhang-wen-jian-xi-tong-yu-ci-pan-guan-li/di-6.5-jie-swap-jiao-huan-fen-qu-de-she-zhi.md',
		'/di-6-zhang-wen-jian-xi-tong-yu-ci-pan-guan-li/di-6.6-jie-ext-234-deng-wen-jian-xi-tong.md',
    ],
  },
  {
    text: '第7章 VPN 与代理',
    children: [
		'/di-7-zhang-vpn-yu-dai-li/di-7.1-jie-http-dai-li.md',
		'/di-7-zhang-vpn-yu-dai-li/di-7.2-jie-v2ray.md',
		'/di-7-zhang-vpn-yu-dai-li/di-7.3-jie-clash.md',
		'/di-7-zhang-vpn-yu-dai-li/di-7.4-jie-openvpn.md',
		'/di-7-zhang-vpn-yu-dai-li/di-7.5-jie-wireguard.md',
    ],
  },
  {
    text: '第8章 用户与权限',
    children: [
		'/di-8-zhang-yong-hu-yu-quan-xian/di-8.1-jie-sudo.md',
		'/di-8-zhang-yong-hu-yu-quan-xian/di-8.2-jie-tian-jia-yong-hu.md',
		'/di-8-zhang-yong-hu-yu-quan-xian/di-8.3-jie-zu.md',
		'/di-8-zhang-yong-hu-yu-quan-xian/di-8.4-jie-yong-hu-quan-xian.md',
    ],
  },
  {
    text: '第9章 Jail',
    children: [
		'/di-9-zhang-jail/di-9.1-jie-jail-yu-docker-de-bi-jiao.md',
		'/di-9-zhang-jail/di-er-jie-jail-xiang-guan-shu-yu.md',
		'/di-9-zhang-jail/di-9.3-jie-jail-pei-zhi.md',
		'/di-9-zhang-jail/di-9.4-jie-jail-geng-xin.md',
		'/di-9-zhang-jail/di-9.5-jie-shi-yong-ezjail-guan-li-jail.md',
    ],
  },
  {
    text: '第10章 虚拟化',
    children: [
		'/di-10-zhang-xu-ni-hua/di-10.1-jie-xu-ni-hua-jian-jie.md',
		'/di-10-zhang-xu-ni-hua/di-10.2-jie-an-zhuang-virtual-box.md',
		'/di-10-zhang-xu-ni-hua/di-san-jie-an-zhuang-bhyve.md',
		'/di-10-zhang-xu-ni-hua/di-10.4-jie-shi-yong-cbsd-guan-li-bhyve.md',
		'/di-10-zhang-xu-ni-hua/di-10.5-jie-shi-yong-bhyve-an-zhuang-windows-10.md',
		'/di-10-zhang-xu-ni-hua/di-10.6-jie-an-zhuang-xen.md',
		'/di-10-zhang-xu-ni-hua/di-10.7-jie-shi-yong-xen-an-zhuang-windows.md',
    ],
  },
  {
    text: '第11章 更新与升级 FreeBSD',
    children: [
		'/di-11-zhang-geng-xin-yu-sheng-ji-freebsd/di-11.1-jie-tong-guo-freebsdupdate-geng-xin.md',
		'/di-11-zhang-geng-xin-yu-sheng-ji-freebsd/di-11.2-jie-tong-guo-yuan-dai-ma-geng-xin.md',
		'/di-11-zhang-geng-xin-yu-sheng-ji-freebsd/di-11.3-jie-pi-liang-bu-shu.md',
    ],
  },
  {
    text: '第12章 GEOM 存储框架',
    children: [
		'/di-12-zhang-geom-cun-chu-kuang-jia/di-12.1-jie-gai-shu.md',
		'/di-12-zhang-geom-cun-chu-kuang-jia/di-12.2-jie-raid-0.md',
		'/di-12-zhang-geom-cun-chu-kuang-jia/di-12.3-jie-raid-1.md',
		'/di-12-zhang-geom-cun-chu-kuang-jia/di-si-jie-raid-3.md',
		'/di-12-zhang-geom-cun-chu-kuang-jia/di-12.5-jie-ruan-raid-pei-zhi.md',
		'/di-12-zhang-geom-cun-chu-kuang-jia/di-12.6-jie-geom-gate-wang-luo.md',
		'/di-12-zhang-geom-cun-chu-kuang-jia/di-12.7-jie-ci-pan-zhuang-zhi-biao-qian.md',
		'/di-12-zhang-geom-cun-chu-kuang-jia/di-12.8-jie-ufs-journaling-yu-geom.md',
		'/di-12-zhang-geom-cun-chu-kuang-jia/di-12.9-jie-zfs-ci-pan-jia-jie-mi.md',
    ],
  },
  {
    text: '第13章 DTrace',
    children: [
		'/di-13-zhang-dtrace/di-13.1-jie-gai-shu.md',
		'/di-13-zhang-dtrace/di-13.2-jie-kai-qi-dtrace.md',
		'/di-13-zhang-dtrace/di-13.3-jie-shi-yong-dtrace.md',
    ],
  },
  {
    text: '第14章 网络管理',
    children: [
		'/di-14-zhang-wang-luo-guan-li/di-14.1-jie-ppp-bo-hao.md',
		'/di-14-zhang-wang-luo-guan-li/di-14.2-jie-wifi.md',
		'/di-14-zhang-wang-luo-guan-li/di-14.3-jie-usb-rndis-usb-wang-luo-gong-xiang.md',
		'/di-14-zhang-wang-luo-guan-li/di-14.4-jie-lan-ya.md',
		'/di-14-zhang-wang-luo-guan-li/di-14.5-jie-ipv6.md',
		'/di-14-zhang-wang-luo-guan-li/di-14.6-jie-carp.md',
		'/di-14-zhang-wang-luo-guan-li/di-14.7-jie-vlan.md',
		'/di-14-zhang-wang-luo-guan-li/di-14.8-jie-tcp-bbr.md',
    ],
  },
  {
    text: '第15章 FreeBSD 防火墙',
    children: [
		'/di-15-zhang-freebsd-fang-huo-qiang/di-15.1-jie-wang-luo-can-shu-pei-zhi-ming-ling.md',
		'/di-15-zhang-freebsd-fang-huo-qiang/di-15.2-jie-pf.md',
		'/di-15-zhang-freebsd-fang-huo-qiang/di-15.3-jie-ipfw.md',
		'/di-15-zhang-freebsd-fang-huo-qiang/di-15.4-jie-ipfilter-ipf.md',
    ],
  },
  {
    text: '第16章 服务器',
    children: [
		'/di-16-zhang-fu-wu-qi/di-16.1-jie-ftp-fu-wu-qi.md',
		'/di-16-zhang-fu-wu-qi/di-16.2-jie-dhcp-fu-wu-qi.md',
		'/di-16-zhang-fu-wu-qi/di-16.3-jie-nodejs-xiang-guan.md',
		'/di-16-zhang-fu-wu-qi/di-16.4-jie-dns-fu-wu-qi.md',
		'/di-16-zhang-fu-wu-qi/di-16.5-jie-nis-fu-wu-qi.md',
		'/di-16-zhang-fu-wu-qi/di-16.6-jie-postfix-fu-wu-qi.md',
		'/di-16-zhang-fu-wu-qi/di-16.7-jie-samba-fu-wu-qi.md',
		'/di-16-zhang-fu-wu-qi/di-16.8-jie-nfs-fu-wu-qi.md',
		'/di-16-zhang-fu-wu-qi/di-16.9-jie-iscsi.md',
		'/di-16-zhang-fu-wu-qi/di-16.10-jie-webmin.md',
		'/di-16-zhang-fu-wu-qi/di-16.11-jie-rsync-tong-bu-fu-wu.md',
		'/di-16-zhang-fu-wu-qi/di-16.12-jie-shi-jian-fu-wu.md',
		'/di-16-zhang-fu-wu-qi/di-16.13-jie-wildfly.md',
    ],
  },
  {
    text: '第17章 网络服务器',
    children: [
		'/di-17-zhang-wang-luo-fu-wu-qi/di-17.1-jie-apache.md',
		'/di-17-zhang-wang-luo-fu-wu-qi/di-17.2-jie-nginx.md',
		'/di-17-zhang-wang-luo-fu-wu-qi/di-17.3-jie-php-8.x.md',
		'/di-17-zhang-wang-luo-fu-wu-qi/di-17.4-jie-mysql-5.x.md',
		'/di-17-zhang-wang-luo-fu-wu-qi/di-17.5-jie-mysql-8.x.md',
		'/di-17-zhang-wang-luo-fu-wu-qi/di-17.6-jie-typecho.md',
		'/di-17-zhang-wang-luo-fu-wu-qi/di-17.7-jie-ssl-pei-zhi.md',
		'/di-17-zhang-wang-luo-fu-wu-qi/di-17.8-jie-postgresql-yu-pgadmin4.md',
    ],
  },
  {
    text: '第18章 树莓派与嵌入式',
    children: [
		'/di-18-zhang-shu-mei-pai-yu-qian-ru-shi/di-yi-jie-shu-mei-pai-jian-jie.md',
		'/di-18-zhang-shu-mei-pai-yu-qian-ru-shi/di-18.2-jie-xi-tong-an-zhuang.md',
		'/di-18-zhang-shu-mei-pai-yu-qian-ru-shi/di-18.3-jie-shi-yong-pei-zhi.md',
		'/di-18-zhang-shu-mei-pai-yu-qian-ru-shi/di-18.4-jie-usb-wang-ka-yu-wifi.md',
		'/di-18-zhang-shu-mei-pai-yu-qian-ru-shi/di-18.5-jie-riscv.md',
    ],
  },
  {
    text: '第19章 文学故事',
    children: [
		'/di-19-zhang-wen-xue-gu-shi/di-19.1-jie-wo-yu-freebsd-de-gu-shi.md',
		'/di-19-zhang-wen-xue-gu-shi/di-19.2-jie-freebsd-yu-mao-xuan-ze-1-de-sheng-huo.md',
		'/di-19-zhang-wen-xue-gu-shi/di-19.3-jie-linux-yu-ku-nan-zhe-xue.md',
		'/di-19-zhang-wen-xue-gu-shi/di-19.4-jie-cong-yi-ge-xiang-fa-kan-freebsd-shi-shang-ye-hua-huan-shi-xue-yuan-pai.md',
		'/di-19-zhang-wen-xue-gu-shi/di-19.5-jie-linux-she-qu-yi-jing-cheng-wei-le-yi-ge-ang-zang-de-ni-tan.md',
		'/di-19-zhang-wen-xue-gu-shi/di-19.6-jie-linux-bai-ju-yi-ding-bo-freebsd-da-bai-ju.md',
		'/di-19-zhang-wen-xue-gu-shi/di-19.7-jie-xiao-shuo-freebsd-cong-ru-men-dao-pao-lu.md',
    ],
  },
  {
    text: '第20章 娱乐与教育',
    children: [
		'/di-20-zhang-yu-le-yu-jiao-yu/di-20.1-jie-you-xi.md',
		'/di-20-zhang-yu-le-yu-jiao-yu/di-20.2-jie-yin-shi-pin-bo-fang-qi.md',
		'/di-20-zhang-yu-le-yu-jiao-yu/di-20.3-jie-yin-shi-pin-jian-ji.md',
		'/di-20-zhang-yu-le-yu-jiao-yu/di-20.4-jie-jiao-yu.md',
		'/di-20-zhang-yu-le-yu-jiao-yu/di-20.5-jie-ke-yan-yu-zhuan-ye-gong-ju.md',
    ],
  },
  {
    text: '第21章 内核',
    children: [
		'/di-21-zhang-nei-he/di-21.1-jie-huo-qu-freebsd-nei-he-yuan-ma.md',
		'/di-21-zhang-nei-he/di-21.2-jie-xiu-gai-nei-he-yuan-ma.md',
		'/di-21-zhang-nei-he/di-21.3-jie-bian-yi-nei-he.md',
		'/di-21-zhang-nei-he/di-21.4-jie-nei-he-fen-xi.md',
    ],
  },
  {
    text: '第22章 编程与开发',
    children: [
		'/di-22-zhang-bian-cheng-yu-kai-fa/di-ling-jie-ru-he-ding-yue-freebsd-you-jian-lie-biao.md',
		'/di-22-zhang-bian-cheng-yu-kai-fa/di-22.1-jie-ru-he-bao-gao-bug.md',
		'/di-22-zhang-bian-cheng-yu-kai-fa/di-22.2-jie-ru-he-ti-jiao-yi-ge-ruan-jian-bao.md',
		'/di-22-zhang-bian-cheng-yu-kai-fa/di-22.3-jie-ru-he-can-yu-freebsd-xie-zuo.md',
		'/di-22-zhang-bian-cheng-yu-kai-fa/di-22.4-jie-cc++-huan-jing-de-pei-zhi.md',
		'/di-22-zhang-bian-cheng-yu-kai-fa/di-22.5-jie-java-huan-jing-de-pei-zhi.md',
		'/di-22-zhang-bian-cheng-yu-kai-fa/di-22.6-jie-qt-huan-jing-de-pei-zhi.md',
		'/di-22-zhang-bian-cheng-yu-kai-fa/di-22.7-jie-python-yu-vscode.md',
		'/di-22-zhang-bian-cheng-yu-kai-fa/di-22.8-jie-rustgo-huan-jing-de-pei-zhi.md',
		'/di-22-zhang-bian-cheng-yu-kai-fa/di-22.9-jie-csh-yu-qi-ta-shell.md',
		'/di-22-zhang-bian-cheng-yu-kai-fa/di-22.10-jie-tong-guo-ida-7-tiao-shi-freebsd.md',
		'/di-22-zhang-bian-cheng-yu-kai-fa/di-22.11-jie-git.md',
    ],
  },
  {
    text: '第23章 引导与恢复',
    children: [
		'/di-23-zhang-yin-dao-yu-hui-fu/di-23.1-jie-hui-fu-mo-shi-yu-mi-ma-zhong-zhi.md',
		'/di-23-zhang-yin-dao-yu-hui-fu/di-23.2-jie-freebsd-duo-ying-pan-efi-yin-dao-tong-yi.md',
		'/di-23-zhang-yin-dao-yu-hui-fu/di-23.3-jie-freebsd-zhong-wen-tty-kong-zhi-tai.md',
		'/di-23-zhang-yin-dao-yu-hui-fu/di-23.4-jie-yin-dao-jie-mian.md',
		'/di-23-zhang-yin-dao-yu-hui-fu/di-23.5-jie-grub-ji-qi-ta-yin-dao.md',
    ],
  },
  {
    text: '第24章 FreeBSD 特色',
    children: [
		'/di-24-zhang-freebsd-te-se/di-24.1-jie-bsd-init-guan-li-fu-wu.md',
		'/di-24-zhang-freebsd-te-se/di-24.2-jie-freebsd-mu-lu-jie-gou.md',
		'/di-24-zhang-freebsd-te-se/di-24.3-jie-bsdinstall-yu-bsdconfig.md',
		'/di-24-zhang-freebsd-te-se/di-24.4-jie-jin-yong-sendmail.md',
		'/di-24-zhang-freebsd-te-se/di-24.5-jie-li-yong-jiao-ben-zi-dong-sheng-cheng-bsdlibc-ku-wen-ben.md',
		'/di-24-zhang-freebsd-te-se/di-24.6-jie-bsd-feng-ge-de-makegrepsedawk.md',
    ],
  },
  {
    text: '第25章 系统设计与分析',
    children: [
		'/di-25-zhang-xi-tong-she-ji-yu-fen-xi/di-yi-jie-freebsd-she-ji-gai-yao.md',
		'/di-25-zhang-xi-tong-she-ji-yu-fen-xi/di-25.2-jie-nei-he.md',
		'/di-25-zhang-xi-tong-she-ji-yu-fen-xi/di-25.3-jie-jin-cheng.md',
		'/di-25-zhang-xi-tong-she-ji-yu-fen-xi/di-25.4-jie-nei-cun-guan-li.md',
		'/di-25-zhang-xi-tong-she-ji-yu-fen-xi/di-25.5-jie-an-quan.md',
		'/di-25-zhang-xi-tong-she-ji-yu-fen-xi/di-25.6-jie-io-xi-tong.md',
    ],
  },
  {
    text: '第26章 OpenBSD',
    children: [
		'/di-26-zhang-openbsd/di-26.0-jie-gai-shu.md',
		'/di-26-zhang-openbsd/di-26.1-jie-an-zhuang.md',
		'/di-26-zhang-openbsd/di-26.2-jie-pei-zhi.md',
		'/di-26-zhang-openbsd/di-26.3-jie-huan-yuan.md',
		'/di-26-zhang-openbsd/di-26.4-jie-bao-guan-li-qi.md',
		'/di-26-zhang-openbsd/di-26.5-jie-zhuo-mian-yu-qi-ta-ruan-jian.md',
    ],
  },
  {
    text: '第27章 NetBSD',
    children: [
		'/di-27-zhang-netbsd/di-27.0-jie-gai-shu.md',
		'/di-27-zhang-netbsd/di-27.1-jie-an-zhuang-yu-pei-zhi.md',
		'/di-27-zhang-netbsd/di-27.2-jie-huan-yuan-yu-bao-guan-li-qi.md',
		'/di-27-zhang-netbsd/di-27.3-jie-zhuo-mian-yu-qi-ta-ruan-jian.md',
    ],
  },
  {
    text: '第28章 DragonFlyBSD',
    children: [
		'/di-28-zhang-dragonflybsd/di-28.0-jie-gai-shu.md',
		'/di-28-zhang-dragonflybsd/di-28.1-jie-an-zhuang-yu-pei-zhi.md',
    ],
  },
  {
    text: '第29章 桌面高级进阶',
    children: [
		'/di-29-zhang-zhuo-mian-gao-ji-jin-jie/di-29.0-jie-chuang-kou-guan-li-qi-yu-zhuo-mian-de-qu-bie-yu-lian-xi.md',
		'/di-29-zhang-zhuo-mian-gao-ji-jin-jie/di-29.1-jie-an-zhuang-i3wm.md',
		'/di-29-zhang-zhuo-mian-gao-ji-jin-jie/di-29.2-jie-an-zhuang-cde.md',
		'/di-29-zhang-zhuo-mian-gao-ji-jin-jie/di-29.3-jie-an-zhuang-awesome.md',
		'/di-29-zhang-zhuo-mian-gao-ji-jin-jie/di-29.4-jie-an-zhuang-fvwm.md',
    ],
  },
];
