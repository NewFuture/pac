"use strict";
/*
* Generated from https://github.com/NewFuture/pac
* see all pac files https://pac.newfuture.xyz
*/
var WhiteListHost = __WHITE_LIST__;
function FindProxyForURL(url, host) {
    if (host.indexOf(".") < 0
        || WhiteListHost[host]
        || __IS_HOST__
    ) {/*Plain Host Name or in whitelist*/
        return "DIRECT";
    } else if (/^(\d{1,3}\.){3}\d{1,3}$/.test(host)
    &&(__IS_NET__)
    ) {/*Intranet IP*/
        return "DIRECT";
    }
    return "__PROXY__";
};