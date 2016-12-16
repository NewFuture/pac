#!/usr/bin/env node

"use strict";
//自动生成代理配置PAC

var file = require("./file.js");
var pac = require("./pac.js");

var OUTPUT_PATH = '_site/';
var URL = 'https://pac.newfuture.xyz/';
var readme = '# 代理配置\n\n\
PAC代理配置文件(自动跳过内网,局域网和ipv6)\n\n\
根据[github.com/NewFuture/pac](https://github.com/NewFuture/pac)自动生成于 {{site.time}}\n\
\n---------\n';

/*
 * 生成一组PAC
 */
function generate(name) {
    var hosts = file.readLines(name + '/host.txt');
    var nets = file.readLines(name + '/net.txt');
    var proxy = file.readLines(name + '/proxy.txt');
    var f = name + '/pac.txt';
    var link = URL + f;

    //ss pac
    file.save(OUTPUT_PATH + f, pac(hosts, nets));
    readme += "\n## " + name + "代理PAC\n\n";
    readme += "* [SS 本地PAC配置](" + link + "): `" + link + "`\n";

    //each output
    proxy.forEach(function(p) {
        f = file.proxyFile(p, name + '/') + '.pac';
        file.save(OUTPUT_PATH + f, pac.setProxy(p));
        link = URL + f;
        readme += "* [代理地址" + p + "](" + link + "): `" + link + "`\n";
    });
}

//处理当前文件夹下全部目录
file.listDir().forEach(generate);
//更新readme
file.save(OUTPUT_PATH + 'README.md', readme);