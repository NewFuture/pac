var proxy = "PROXY localhost:1080";
//http://findproxyforurl.com/pac-functions/
"use strict";

// the white lisf of host ip or domain
var WhiteListHOST = {
    "bt.byr.cn": true, //北邮BT
    "tv.byr.cn": true, //北邮TV
    "pt.zhixing.bjtu.edu.cn": true, //北交知行PT
    "pt.tju.edu.cn": true, //北洋PT
    "vagrant.yunyin.org": true,
    "local.yunyin.org": true,
    "localhost": true //localhost the last one
};

var FindProxyForURL = function(url, host) {
    if (
        host.indexOf(".") < 0 // 非IPv4 或 非域名
        || true === WhiteListHOST[host] // 白名单
        || /\.nankai\.edu\.cn$/.test(host) // 南开域名
        || /\.nku\.cn$/.test(host) // 南开别名
        || /\.neu6\.edu\.cn$/.test(host) //东北 大学ipv6
        || /tuna.tsinghua.edu.cn$/.test(host) // 清华TUNA
        || /^ipv6\..*\.edu\.cn$/.test(host) // 各高校IPv6
        || /.*\.mobisys\.cc$/.test(host) // 内网实验室
        ||/.*\.newfuture\.win$/.test(host) // 局域网域名
    ){
        return "DIRECT";
    } else if (/^(\d{1,3}\.){3}\d{1,3}$/.test(host)&&
        ( isInNet(host, "10.0.0.0", "255.0.0.0") // 局域网A
            || isInNet(host, "172.16.0.0", "255.240.0.0") // 局域网B        
            || isInNet(host, "192.168.0.0", "255.255.0.0") // 局域网C
            || isInNet(host, "127.0.0.0", "255.255.255.0") // local host        
            || isInNet(host, "202.113.16.0", "255.255.240.0") // 202.113.16.0->202.113.31.255
            || isInNet(host, "202.113.224.0", "255.255.240.0") // 202.113.224.0->202.113.239.255
            || isInNet(host, "222.30.61.0", "255.255.225.0") // NKU
        )) {
        return "DIRECT";
    }
    return proxy;
};