"use strict";
/*
* Generated from https://github.com/NewFuture/pac
* see all pac files https://pac.newfuture.cc
*/
var WhiteListHost = {};
function FindProxyForURL(url, host) {
    if (host.indexOf(".") < 0
        || WhiteListHost[host]
        || /.*localhost$/.test(host)
        || /.*\.local$/.test(host)
        || /.*\.home$/.test(host)
        || /.*\.wifi$/.test(host)
    ) {/*Plain Host Name or in whitelist*/
        return "DIRECT";
    } else if (/^(\d{1,3}\.){3}\d{1,3}$/.test(host)
    &&(isInNet(host, "127.0.0.0", "255.255.255.0")
        || isInNet(host, "192.168.0.0", "255.255.0.0")
        || isInNet(host, "172.16.0.0", "255.240.0.0")
        || isInNet(host, "10.0.0.0", "255.0.0.0"))
    ) {/*Intranet IP*/
        return "DIRECT";
    }
    return "SOCKS5 192.168.1.2:8008; PROXY 192.168.1.2:8008; SOCKS 192.168.1.2:8008; DIRECT";
};