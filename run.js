#!/usr/bin/env node

"use strict";
//配置读取和自动生成代理配置PAC

var file = require("./file.js");
var pac = require("./pac.js");

var OUTPUT_PATH = '_site/';
var URL = 'https://pac.newfuture.xyz/';
var readme = '# 代理配置\n\
PAC代理配置文件(自动跳过内网,局域网和ipv6)\n\n\
根据[github.com/NewFuture/pac](https://github.com/NewFuture/pac)自动更新于 {{site.time}}\n\
\n---\n';

/*
 * 生成一组PAC
 */
function generate(name) {
    var hosts = file.readLines(name + '/host.txt');
    var nets = file.readLines(name + '/net.txt');
    var proxy = file.readLines(name + '/proxy.txt');
    var f = name + '/pac.txt';
    //ss pac
    file.save(OUTPUT_PATH + f, pac(hosts, nets));
    readme += "\n## " + name + "代理PAC\n请根据需要选择合适的配置^_^\n\n";
    readme += "* SS客户端使用本地PAC: 下载[此pac.txt](" + f + "),然后覆盖本地文件夹下pac.txt\n";
    //each output
    proxy.forEach(function(p) {
        f = file.proxyFile(p, name + '/') + '.pac';
        file.save(OUTPUT_PATH + f, pac.setProxy(p));
        readme += "* [使用代理" + p + "](" + f + "): **`" + URL + f + "`**\n";
    });
}

//处理当前文件夹下全部目录
file.listDir().forEach(generate);
//更新readme
file.save(OUTPUT_PATH + 'README.md', readme);