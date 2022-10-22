// .vuepress/vuepress-pdf.config.ts
import { defineUserConfig } from "@condorhero/vuepress-plugin-export-pdf-v2";

export default defineUserConfig({
  outDir: "docs/.vuepress/dist/",
  sorter: (pageA, pageB) => {
    const aIndex = routeOrder.findIndex(route => route === pageA.path)
    const bIndex = routeOrder.findIndex(route => route === pageB.path)
    return aIndex - bIndex
  },
  pdfOptions: {
    format: 'A4',
    displayHeaderFooter: true,
    headerTemplate,
    footerTemplate,
    margin: {
      bottom: 70,
      left: 25,
      right: 25,
      top: 70,
    },
  },
});

const routeOrder = [
      '/README.html',
      '/di-ling-zhang-freebsd-zhong-wen-she-qu/di-yi-jie-freebsd-faq.html',
      '/di-ling-zhang-freebsd-zhong-wen-she-qu/di-er-jie-freebsd-zhong-wen-she-qu-cfc-fa-zhan-gui-hua.html',
      '/di-ling-zhang-freebsd-zhong-wen-she-qu/di-san-jie-freebsd-de-bu-zu-zhi-chu.html',
      '/di-ling-zhang-freebsd-zhong-wen-she-qu/di-si-jie-freebsd-fa-hang-shuo-ming.html',
      '/di-yi-zhang-zou-jin-freebsd/di-yi-jie-shi-mo-shi-unix.html',
      '/di-yi-zhang-zou-jin-freebsd/di-er-jie-shi-mo-shi-lei-unix.html',
      '/di-yi-zhang-zou-jin-freebsd/di-san-jie-shi-mo-shi-linux.html',
      '/di-yi-zhang-zou-jin-freebsd/di-si-jie-freebsd-yu-qi-ta-cao-zuo-xi-tong.html',
      '/di-yi-zhang-zou-jin-freebsd/di-wu-jie-wei-shi-mo-yao-shi-yong-freebsd.html',
      '/di-yi-zhang-zou-jin-freebsd/di-liu-jie-suo-wei-kai-yuan-zhe-xue.html',
      '/di-yi-zhang-zou-jin-freebsd/di-qi-jie-qi-ta-bsd-jian-jie.html',
      '/di-yi-zhang-zou-jin-freebsd/di-ba-jie-linux-yong-hu-qian-yi-zhi-bei.html',
      '/di-yi-zhang-zou-jin-freebsd/di-jiu-jie-can-kao-zi-liao-yu-gong-xian-zhe-ming-dan.html',
      '/di-yi-zhang-zou-jin-freebsd/di-shi-jie-bian-zhuan-shuo-ming.html',
      '/di-er-zhang-an-zhuang-freebsd/di-ling-jie-tu-jie-an-zhuang.html',
      '/di-er-zhang-an-zhuang-freebsd/di-yi-jie-san-zhong-xu-ni-ji-yu-freebsd-ban-ben-bi-jiao.html',
      '/di-er-zhang-an-zhuang-freebsd/di-er-jie-freebsd-an-zhuang-ji-yu-virtual-box.html',
      '/di-er-zhang-an-zhuang-freebsd/di-san-jie-freebsd-13.0-an-zhuang-ji-yu-vmware-workstation-pro-16.html',
      '/di-er-zhang-an-zhuang-freebsd/di-si-jie-teng-xun-yun-qing-liang-yun-ji-qi-ta-fu-wu-qi-dd-an-zhuang-freebsd.html',
      '/di-er-zhang-an-zhuang-freebsd/di-wu-jie-shou-dong-an-zhuang-freebsd.html',
      '/di-er-zhang-an-zhuang-freebsd/di-liu-jie-ee-yong-fa-ji-wang-luo-pei-zhi.html',
      '/di-er-zhang-an-zhuang-freebsd/di-qi-jie-chang-yong-ruan-jian-yu-ssh-pei-zhi.html',
      '/di-er-zhang-an-zhuang-freebsd/di-ba-jie-wu-li-ji-an-zhuang-yu-ying-jian-xuan-pei.html',
      '/di-er-zhang-an-zhuang-freebsd/di-jiu-jie-wu-li-ji-xia-xian-ka-de-pei-zhi.html',
      '/di-er-zhang-an-zhuang-freebsd/di-shi-jie-wu-li-ji-xia-chu-mo-ban-de-she-zhi.html',
      '/di-er-zhang-an-zhuang-freebsd/di-shi-yi-jie-wu-li-ji-sheng-ka-yu-wang-ka-she-zhi.html',
      '/di-er-zhang-an-zhuang-freebsd/di-shi-er-jie-da-yin-ji-de-an-zhuang.html',
      '/di-er-zhang-an-zhuang-freebsd/di-shi-san-jie-wu-xian-lan-ya-shu-biao-de-she-zhi.html',
      '/di-san-zhang-ruan-jian-yuan-ji-bao-guan-li-qi/di-ling-jie-bao-guan-li-qi-gai-shu.html',
      '/di-san-zhang-ruan-jian-yuan-ji-bao-guan-li-qi/di-yi-jie-freebsd-jing-xiang-zhan-xian-zhuang.html',
      '/di-san-zhang-ruan-jian-yuan-ji-bao-guan-li-qi/di-er-jie-freebsd-huan-yuan-fang-shi.html',
      '/di-san-zhang-ruan-jian-yuan-ji-bao-guan-li-qi/di-san-jie-gitup-de-yong-fa.html',
      '/di-san-zhang-ruan-jian-yuan-ji-bao-guan-li-qi/di-si-jie-ruan-jian-bao-guan-li-qi-pkg-de-yong-fa.html',
      '/di-san-zhang-ruan-jian-yuan-ji-bao-guan-li-qi/di-wu-jie-tong-guo-yuan-dai-ma-port-fang-shi-an-zhuang-ruan-jian.html',
      '/di-san-zhang-ruan-jian-yuan-ji-bao-guan-li-qi/di-liu-jie-tong-guo-dvd-an-zhuang-ruan-jian.html',
      '/di-si-zhang-zhuo-mian-an-zhuang/di-ling-jie-gai-shu.html',
      '/di-si-zhang-zhuo-mian-an-zhuang/di-yi-jie-an-zhuang-xorg.html',
      '/di-si-zhang-zhuo-mian-an-zhuang/di-er-jie-an-zhuang-kde-5.html',
      '/di-si-zhang-zhuo-mian-an-zhuang/di-san-jie-an-zhuang-gnome.html',
      '/di-si-zhang-zhuo-mian-an-zhuang/di-si-jie-an-zhuang-mate.html',
      '/di-si-zhang-zhuo-mian-an-zhuang/di-wu-jie-an-zhuang-xfce.html',
      '/di-si-zhang-zhuo-mian-an-zhuang/di-liu-jie-an-zhuang-cinnamon.html',
      '/di-si-zhang-zhuo-mian-an-zhuang/di-qi-jie-an-zhuang-lumina.html',
      '/di-si-zhang-zhuo-mian-an-zhuang/di-ba-jie-root-deng-lu-zhuo-mian.html',
      '/di-si-zhang-zhuo-mian-an-zhuang/di-jiu-jie-zhu-ti-yu-mei-hua.html',
      '/di-si-zhang-zhuo-mian-an-zhuang/di-shi-jie-yuan-cheng-zhuo-mian-guan-li.html',
      '/di-si-zhang-zhuo-mian-an-zhuang/di-shi-yi-jie-an-zhuang-wayland-ke-xuan.html',
      '/di-wu-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-yi-jie-fcitx-shu-ru-fa-kuang-jia.html',
      '/di-wu-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-er-jie-ibus-shu-ru-fa-kuang-jia.html',
      '/di-wu-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-san-jie-qi-ta-shu-ru-fa-kuang-jia.html',
      '/di-wu-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-si-jie-firefox-yu-chromium-an-zhuang.html',
      '/di-wu-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-wu-jie-linux-jian-rong-ceng.html',
      '/di-wu-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-liu-jie-an-zhuang-jin-shan-wps.html',
      '/di-wu-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-qi-jie-an-zhuang-qq.html',
      '/di-wu-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-ba-jie-geng-huan-zi-ti.html',
      '/di-wu-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-jiu-jie-wine.html',
      '/di-wu-zhang-shu-ru-fa-ji-chang-yong-ruan-jian/di-shi-jie-ya-suo-yu-jie-ya.html',
      '/di-liu-zhang-wen-jian-xi-tong-yu-ci-pan-guan-li/di-yi-jie-ufs.html',
      '/di-liu-zhang-wen-jian-xi-tong-yu-ci-pan-guan-li/di-er-jie-zfs.html',
      '/di-liu-zhang-wen-jian-xi-tong-yu-ci-pan-guan-li/di-san-jie-ci-pan-kuo-rong.html',
      '/di-liu-zhang-wen-jian-xi-tong-yu-ci-pan-guan-li/di-si-jie-ntfs-de-gua-zai.html',
      '/di-liu-zhang-wen-jian-xi-tong-yu-ci-pan-guan-li/di-wu-jie-swap-jiao-huan-fen-qu-de-she-zhi.html',
      '/di-liu-zhang-wen-jian-xi-tong-yu-ci-pan-guan-li/di-liu-jie-ext-234-deng-wen-jian-xi-tong.html',
      '/di-qi-zhang-vpn-yu-dai-li/di-yi-jie-http-dai-li.html',
      '/di-qi-zhang-vpn-yu-dai-li/di-er-jie-v2ray.html',
      '/di-qi-zhang-vpn-yu-dai-li/di-san-jie-clash.html',
      '/di-qi-zhang-vpn-yu-dai-li/di-si-jie-openvpn.html',
      '/di-qi-zhang-vpn-yu-dai-li/di-wu-jie-wireguard.html',
      '/di-ba-zhang-yong-hu-yu-quan-xian/di-yi-jie-sudo-huo-dash-de-an-zhuang.html',
      '/di-ba-zhang-yong-hu-yu-quan-xian/di-er-jie-tian-jia-yong-hu.html',
      '/di-ba-zhang-yong-hu-yu-quan-xian/di-san-jie-yong-hu-zu.html',
      '/di-ba-zhang-yong-hu-yu-quan-xian/di-si-jie-yong-hu-quan-xian.html',
      '/di-jiu-zhang-jail/di-yi-jie-jail-yu-docker-de-bi-jiao.html',
      '/di-jiu-zhang-jail/di-er-jie-jail-xiang-guan-shu-yu.html',
      '/di-jiu-zhang-jail/di-san-jie-jail-pei-zhi.html',
      '/di-jiu-zhang-jail/di-si-jie-jail-geng-xin.html',
      '/di-jiu-zhang-jail/di-wu-jie-shi-yong-ezjail-guan-li-jail.html',
      '/di-shi-zhang-xu-ni-hua/di-yi-jie-xu-ni-hua-jian-jie.html',
      '/di-shi-zhang-xu-ni-hua/di-er-jie-an-zhuang-virtual-box.html',
      '/di-shi-zhang-xu-ni-hua/di-san-jie-an-zhuang-bhyve.html',
      '/di-shi-zhang-xu-ni-hua/di-si-jie-shi-yong-cbsd-guan-li-bhyve.html',
      '/di-shi-zhang-xu-ni-hua/di-wu-jie-shi-yong-bhyve-an-zhuang-windows-11.html',
      '/di-shi-zhang-xu-ni-hua/di-liu-jie-an-zhuang-xen.html',
      '/di-shi-zhang-xu-ni-hua/di-qi-jie-shi-yong-xen-an-zhuang-windows-11.html',
      '/di-shi-yi-zhang-geng-xin-yu-sheng-ji-freebsd/di-yi-jie-tong-guo-freebsdupdate-geng-xin.html',
      '/di-shi-yi-zhang-geng-xin-yu-sheng-ji-freebsd/di-er-jie-tong-guo-yuan-dai-ma-geng-xin.html',
      '/di-shi-yi-zhang-geng-xin-yu-sheng-ji-freebsd/di-san-jie-pi-liang-bu-shu.html',
      '/di-shi-er-zhang-geom-cun-chu-kuang-jia/di-yi-jie-gai-shu.html',
      '/di-shi-er-zhang-geom-cun-chu-kuang-jia/di-er-jie-raid-0.html',
      '/di-shi-er-zhang-geom-cun-chu-kuang-jia/di-san-jie-raid-1.html',
      '/di-shi-er-zhang-geom-cun-chu-kuang-jia/di-si-jie-raid-3.html',
      '/di-shi-er-zhang-geom-cun-chu-kuang-jia/di-wu-jie-ruan-raid-pei-zhi.html',
      '/di-shi-er-zhang-geom-cun-chu-kuang-jia/di-liu-jie-geom-gate-network.html',
      '/di-shi-er-zhang-geom-cun-chu-kuang-jia/di-qi-jie-ci-pan-zhuang-zhi-biao-qian.html',
      '/di-shi-er-zhang-geom-cun-chu-kuang-jia/di-ba-jie-ufs-journaling-yu-geom.html',
      '/di-shi-er-zhang-geom-cun-chu-kuang-jia/di-jiu-jie-zfs-ci-pan-jia-jie-mi.html',
      '/di-shi-san-zhang-dtrace/di-yi-jie-gai-shu.html',
      '/di-shi-san-zhang-dtrace/di-er-jie-kai-qi-dtrace.html',
      '/di-shi-san-zhang-dtrace/di-san-jie-shi-yong-dtrace.html',
      '/di-shi-si-zhang-wang-luo-guan-li/di-yi-jie-ppp-bo-hao.html',
      '/di-shi-si-zhang-wang-luo-guan-li/di-er-jie-wifi.html',
      '/di-shi-si-zhang-wang-luo-guan-li/di-san-jie-usb-rndis-usb-wang-luo-gong-xiang.html',
      '/di-shi-si-zhang-wang-luo-guan-li/di-si-jie-lan-ya.html',
      '/di-shi-si-zhang-wang-luo-guan-li/di-wu-jie-ipv6.html',
      '/di-shi-si-zhang-wang-luo-guan-li/di-liu-jie-carp.html',
      '/di-shi-si-zhang-wang-luo-guan-li/di-qi-jie-vlan.html',
      '/di-shi-si-zhang-wang-luo-guan-li/di-ba-jie-tcp-bbr.html',
      '/di-shi-wu-zhang-freebsd-fang-huo-qiang/di-yi-jie-wang-luo-can-shu-pei-zhi-ming-ling.html',
      '/di-shi-wu-zhang-freebsd-fang-huo-qiang/di-er-jie-pf.html',
      '/di-shi-wu-zhang-freebsd-fang-huo-qiang/di-san-jie-ipfw.html',
      '/di-shi-wu-zhang-freebsd-fang-huo-qiang/di-si-jie-ipfilter-ipf.html',
      '/di-shi-liu-zhang-fu-wu-qi/di-yi-jie-ftp-fu-wu-qi.html',
      '/di-shi-liu-zhang-fu-wu-qi/di-er-jie-dhcp-fu-wu-qi.html',
      '/di-shi-liu-zhang-fu-wu-qi/di-san-jie-nodejs-xiang-guan.html',
      '/di-shi-liu-zhang-fu-wu-qi/di-si-jie-dns-fu-wu-qi.html',
      '/di-shi-liu-zhang-fu-wu-qi/di-wu-jie-nis-fu-wu-qi.html',
      '/di-shi-liu-zhang-fu-wu-qi/di-liu-jie-postfix-fu-wu-qi.html',
      '/di-shi-liu-zhang-fu-wu-qi/di-qi-jie-samba-fu-wu-qi.html',
      '/di-shi-liu-zhang-fu-wu-qi/di-ba-jie-nfs-fu-wu-qi.html',
      '/di-shi-liu-zhang-fu-wu-qi/di-jiu-jie-iscsi.html',
      '/di-shi-liu-zhang-fu-wu-qi/di-shi-jie-webmin.html',
      '/di-shi-liu-zhang-fu-wu-qi/di-shi-yi-jie-rsync-tong-bu-fu-wu.html',
      '/di-shi-liu-zhang-fu-wu-qi/di-shi-er-jie-shi-jian-fu-wu.html',
      '/di-shi-liu-zhang-fu-wu-qi/di-shi-san-jie-wildfly.html',
      '/di-shi-qi-zhang-wang-luo-fu-wu-qi/di-yi-jie-apache.html',
      '/di-shi-qi-zhang-wang-luo-fu-wu-qi/di-er-jie-nginx.html',
      '/di-shi-qi-zhang-wang-luo-fu-wu-qi/di-san-jie-php-8.x.html',
      '/di-shi-qi-zhang-wang-luo-fu-wu-qi/di-si-jie-mysql-5.x.html',
      '/di-shi-qi-zhang-wang-luo-fu-wu-qi/di-wu-jie-mysql-8.x.html',
      '/di-shi-qi-zhang-wang-luo-fu-wu-qi/di-liu-jie-typecho.html',
      '/di-shi-qi-zhang-wang-luo-fu-wu-qi/di-qi-jie-ssl-pei-zhi.html',
      '/di-shi-qi-zhang-wang-luo-fu-wu-qi/di-ba-jie-postgresql-yu-pgadmin4.html',
      '/di-shi-ba-zhang-shu-mei-pai-yu-qian-ru-shi/di-yi-jie-shu-mei-pai-jian-jie.html',
      '/di-shi-ba-zhang-shu-mei-pai-yu-qian-ru-shi/di-er-jie-xi-tong-an-zhuang.html',
      '/di-shi-ba-zhang-shu-mei-pai-yu-qian-ru-shi/di-san-jie-shi-yong-pei-zhi.html',
      '/di-shi-ba-zhang-shu-mei-pai-yu-qian-ru-shi/di-si-jie-usb-wang-ka-yu-wifi.html',
      '/di-shi-ba-zhang-shu-mei-pai-yu-qian-ru-shi/di-wu-jie-riscv.html',
      '/di-shi-jiu-zhang-wen-xue-gu-shi/di-yi-jie-wo-yu-freebsd-de-gu-shi.html',
      '/di-shi-jiu-zhang-wen-xue-gu-shi/di-er-jie-freebsd-yu-mao-xuan-ze-1-de-sheng-huo.html',
      '/di-shi-jiu-zhang-wen-xue-gu-shi/di-san-jie-linux-yu-ku-nan-zhe-xue.html',
      '/di-shi-jiu-zhang-wen-xue-gu-shi/di-si-jie-cong-yi-ge-xiang-fa-kan-freebsd-shi-shang-ye-hua-huan-shi-xue-yuan-pai.html',
      '/di-shi-jiu-zhang-wen-xue-gu-shi/di-wu-jie-linux-she-qu-yi-jing-cheng-wei-le-yi-ge-ang-zang-de-ni-tan.html',
      '/di-shi-jiu-zhang-wen-xue-gu-shi/di-liu-jie-linux-bai-ju-yi-ding.html',
      '/di-shi-jiu-zhang-wen-xue-gu-shi/di-qi-jie-xiao-shuo-freebsd-cong-ru-men-dao-pao-lu.html',
      '/di-er-shi-zhang-yu-le-yu-jiao-yu/di-yi-jie-you-xi.html',
      '/di-er-shi-zhang-yu-le-yu-jiao-yu/di-er-jie-yin-shi-pin-bo-fang-qi.html',
      '/di-er-shi-zhang-yu-le-yu-jiao-yu/di-san-jie-yin-shi-pin-jian-ji.html',
      '/di-er-shi-zhang-yu-le-yu-jiao-yu/di-si-jie-jiao-yu.html',
      '/di-er-shi-zhang-yu-le-yu-jiao-yu/di-wu-jie-ke-yan-yu-zhuan-ye-gong-ju.html',
      '/di-er-shi-yi-zhang-nei-he/di-yi-jie-huo-qu-freebsd-nei-he-yuan-ma.html',
      '/di-er-shi-yi-zhang-nei-he/di-er-jie-xiu-gai-nei-he-yuan-ma.html',
      '/di-er-shi-yi-zhang-nei-he/di-san-jie-bian-yi-nei-he.html',
      '/di-er-shi-yi-zhang-nei-he/di-si-jie-nei-he-fen-xi.html',
	  '/di-er-shi-er-zhang-bian-cheng-yu-kai-fa/di-ling-jie-ru-he-ding-yue-freebsd-you-jian-lie-biao.html',
      '/di-er-shi-er-zhang-bian-cheng-yu-kai-fa/di-yi-jie-ru-he-bao-gao-bug.html',
      '/di-er-shi-er-zhang-bian-cheng-yu-kai-fa/di-er-jie-ru-he-ti-jiao-yi-ge-ruan-jian-bao.html',
      '/di-er-shi-er-zhang-bian-cheng-yu-kai-fa/di-san-jie-ru-he-can-yu-freebsd-xie-zuo.html',
      '/di-er-shi-er-zhang-bian-cheng-yu-kai-fa/di-si-jie-cc++-huan-jing-de-pei-zhi.html',
      '/di-er-shi-er-zhang-bian-cheng-yu-kai-fa/di-wu-jie-java-huan-jing-de-pei-zhi.html',
      '/di-er-shi-er-zhang-bian-cheng-yu-kai-fa/di-liu-jie-qt-huan-jing-de-pei-zhi.html',
      '/di-er-shi-er-zhang-bian-cheng-yu-kai-fa/di-qi-jie-python-yu-vscode.html',
      '/di-er-shi-er-zhang-bian-cheng-yu-kai-fa/di-ba-jie-rust-huan-jing-de-pei-zhi.html',
      '/di-er-shi-er-zhang-bian-cheng-yu-kai-fa/di-jiu-jie-shell-de-xuan-ze.html',
      '/di-er-shi-er-zhang-bian-cheng-yu-kai-fa/di-shi-jie-tong-guo-ida-7-tiao-shi-freebsd.html',
      '/di-er-shi-er-zhang-bian-cheng-yu-kai-fa/di-shi-yi-jie-git.html',
      '/di-er-shi-san-zhang-yin-dao-yu-hui-fu/di-yi-jie-hui-fu-mo-shi-yu-mi-ma-zhong-zhi.html',
      '/di-er-shi-san-zhang-yin-dao-yu-hui-fu/di-er-jie-freebsd-duo-ying-pan-efi-yin-dao-tong-yi.html',
      '/di-er-shi-san-zhang-yin-dao-yu-hui-fu/di-san-jie-freebsd-zhong-wen-tty-kong-zhi-tai.html',
      '/di-er-shi-san-zhang-yin-dao-yu-hui-fu/di-si-jie-yin-dao-jie-mian.html',
      '/di-er-shi-san-zhang-yin-dao-yu-hui-fu/di-wu-jie-grub-ji-qi-ta-yin-dao.html',
      '/di-er-shi-si-zhang-freebsd-te-se/di-yi-jie-bsd-init-guan-li-fu-wu.html',
      '/di-er-shi-si-zhang-freebsd-te-se/di-er-jie-freebsd-mu-lu-jie-gou.html',
      '/di-er-shi-si-zhang-freebsd-te-se/di-san-jie-bsdinstall-yu-bsdconfig.html',
      '/di-er-shi-si-zhang-freebsd-te-se/di-si-jie-jin-yong-sendmail.html',
      '/di-er-shi-si-zhang-freebsd-te-se/di-wu-jie-li-yong-jiao-ben-zi-dong-sheng-cheng-bsdlibc-ku-wen-ben.html',
      '/di-er-shi-si-zhang-freebsd-te-se/di-liu-jie-bsd-feng-ge-de-makegrepsedawk.html',
      '/di-er-shi-wu-zhang-xi-tong-she-ji-yu-fen-xi/di-yi-jie-freebsd-she-ji-gai-yao.html',
      '/di-er-shi-wu-zhang-xi-tong-she-ji-yu-fen-xi/di-er-jie-nei-he.html',
      '/di-er-shi-wu-zhang-xi-tong-she-ji-yu-fen-xi/di-san-jie-jin-cheng.html',
      '/di-er-shi-wu-zhang-xi-tong-she-ji-yu-fen-xi/di-si-jie-nei-cun-guan-li.html',
      '/di-er-shi-wu-zhang-xi-tong-she-ji-yu-fen-xi/di-wu-jie-an-quan.html',
      '/di-er-shi-wu-zhang-xi-tong-she-ji-yu-fen-xi/di-liu-jie-io-xi-tong.html',
      '/di-er-shi-liu-zhang-openbsd/di-ling-jie-gai-shu.html',
      '/di-er-shi-liu-zhang-openbsd/di-yi-jie-an-zhuang.html',
      '/di-er-shi-liu-zhang-openbsd/di-er-jie-pei-zhi.html',
      '/di-er-shi-liu-zhang-openbsd/di-san-jie-huan-yuan.html',
      '/di-er-shi-liu-zhang-openbsd/di-si-jie-bao-guan-li-qi.html',
      '/di-er-shi-liu-zhang-openbsd/di-wu-jie-zhuo-mian-yu-qi-ta-ruan-jian.html',
      '/di-er-shi-qi-zhang-netbsd/di-ling-jie-gai-shu.html',
      '/di-er-shi-qi-zhang-netbsd/di-yi-jie-an-zhuang-yu-pei-zhi.html',
      '/di-er-shi-qi-zhang-netbsd/di-er-jie-huan-yuan-yu-bao-guan-li-qi.html',
      '/di-er-shi-qi-zhang-netbsd/di-san-jie-zhuo-mian-yu-qi-ta-ruan-jian.html',
      '/di-er-shi-ba-zhang-dragonflybsd/di-ling-jie-gai-shu.html',
      '/di-er-shi-ba-zhang-dragonflybsd/di-yi-jie-an-zhuang-yu-pei-zhi.html',
      '/di-er-shi-jiu-zhang-zhuo-mian-gao-ji-jin-jie/di-ling-jie-chuang-kou-guan-li-qi-yu-zhuo-mian-de-qu-bie-yu-lian-xi.html',
      '/di-er-shi-jiu-zhang-zhuo-mian-gao-ji-jin-jie/di-yi-jie-an-zhuang-i3wm.html',
      '/di-er-shi-jiu-zhang-zhuo-mian-gao-ji-jin-jie/di-er-jie-an-zhuang-cde.html',
      '/di-er-shi-jiu-zhang-zhuo-mian-gao-ji-jin-jie/di-san-jie-an-zhuang-awesome.html',
      '/di-er-shi-jiu-zhang-zhuo-mian-gao-ji-jin-jie/di-san-jie-an-zhuang-fvwm.html',
    ]

const headerTemplate = `<div style="width: 100%; display: flex; justify-content: center; align-items: center; color: lightgray; border-bottom: solid lightgray 1px; padding-bottom: 10px; font-size: 10px;">
  <span class="title"></span>
</div>`

const footerTemplate = `<div style="width: 100%; display: flex; justify-content: center; align-items: center; color: lightgray; border-top: solid lightgray 1px; padding-top: 10px; font-size: 10px;">
  <span class="pageNumber"></span> - <span class="totalPages"></span>
</div>`