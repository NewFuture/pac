"use strict";
/*
* Generated from https://github.com/NewFuture/pac
* see all pac files https://pac.newfuture.cc
*/
var WhiteListHost = {
    "bt.byr.cn": true,
    "tv.byr.cn": true,
    "pt.tju.edu.cn": true,
    "vagrant.yunyin.org": true,
    "local.yunyin.org": true,
    "ieeexplore.ieee.org": true,
    "f.wanfangdata.com.cn": true,
    "www.cqvip.com": true,
    "download.cqvip.com": true
};
function FindProxyForURL(url, host) {
    if (host.indexOf(".") < 0
        || WhiteListHost[host]
        || /\.nankai\.edu\.cn$/.test(host)
        || /\.nku\.cn$/.test(host)
        || /\.neu6\.edu\.cn$/.test(host)
        || /^ipv6\..*\.edu\.cn$/.test(host)
        || /.*\.mobisys\.cc$/.test(host)
        || /.*\.newfuture\.win$/.test(host)
        || /tuna\.tsinghua\.edu\.cn$/.test(host)
        || /.*zhixing\.bjtu\.edu\.cn$/.test(host)
    ) {/*Plain Host Name or in whitelist*/
        return "DIRECT";
    } else if (/^(\d{1,3}\.){3}\d{1,3}$/.test(host)
    &&(isInNet(host, "127.0.0.0", "255.255.255.0")
        || isInNet(host, "192.168.0.0", "255.255.0.0")
        || isInNet(host, "172.16.0.0", "255.240.0.0")
        || isInNet(host, "10.0.0.0", "255.0.0.0")
        || isInNet(host, "202.113.16.0", "255.255.240.0")
        || isInNet(host, "202.113.224.0", "255.255.240.0")
        || isInNet(host, "222.30.61.0", "255.255.225.0"))
    ) {/*Intranet IP*/
        return "DIRECT";
    }
    return "SOCKS5 localhost:1111";
};