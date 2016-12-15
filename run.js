#!/usr/bin/env node

"use strict";

var file = require("./file.js");
var pac = require("./pac.js");

var OUTPUT_PATH = '_site/';
var URL = 'https://newfuture.github.io/pac/';

var hosts = file.readLines('nku/host.txt');
var nets = file.readLines('nku/net.txt');
var proxy = file.readLines('nku/proxy.txt');
var readme = '# 代理配置\n\n\
PAC代理配置文件(自动跳过内网,局域网和ipv6)\n\n\
根据[github.com/NewFuture/pac](https://github.com/NewFuture/pac)自动生成于 {{site.time}}\n\
\n---------\n\n';

var name = 'nku';
var link;
var f = name + '/pac.txt';

//ss 
file.save(OUTPUT_PATH + f, pac(hosts, nets));
link = URL + f;
readme += "## " + name + "代理PAC\n\n";
readme += "* [SS 本地PAC配置](" + link + "): `" + link + "`\n";

//each output
proxy.forEach(function(p) {
    f = file.proxyFile(p, name + '/') + '.pac';
    file.save(OUTPUT_PATH + f, pac.setProxy(p));
    link = URL + f;
    readme += "* [代理地址" + p + "](" + link + "): `" + link + "`\n";
});

file.save(OUTPUT_PATH + 'README.md', readme);