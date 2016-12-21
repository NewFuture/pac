#!/usr/bin/env node

"use strict";
//配置读取和自动生成代理配置PAC

var file = require("./file.js");
var pac = require("./pac.js");

var OUTPUT_PATH = '_site/'; //输出路径
var PROXY_TYPE = ["SOCKS5", "PROXY", "SOCKS"]; //代理方式列表
var URL = 'https://pac.newfuture.xyz/'; //发布站点目录
var readme = '# 代理配置\n\
PAC代理配置文件(自动跳过内网,局域网和ipv6)\n\n\
根据[github.com/NewFuture/pac](https://github.com/NewFuture/pac)自动更新于 {{site.time}}\n\n\
说明:\n\n\
* `pac.txt`为windows版SS客户端自动生成系统代理的模板\n\
* `综合代理`根据代理是否可用,切换代理方式;如都不可用切换为**直接连接**\n\
* 请根据需要选择合适的配置^_^\n\
\n---\n';

/*
 * 生成一组PAC
 */
function generate(name) {
    var hosts = file.readLines(name + '/host.txt');
    var nets = file.readLines(name + '/net.txt');
    pac(hosts, nets);

    var proxylist = file.readLines(name + '/proxy.txt');
    var f = name + '/pac.txt';

    //ss pac
    file.save(OUTPUT_PATH + f, pac.setProxy());
    readme += "\n## " + name + "代理自动配置(PAC for " + name + ")\n\n";
    readme += "* SS客户端使用本地PAC: 下载[此pac.txt](" + f + "),然后覆盖(或修改)本地文件夹下pac.txt\n\n";

    //each output
    proxylist.forEach(function(proxy) {
        //综合多代理切换
        f = file.proxyFile(proxy, name + '/') + '.pac';
        var p = Array.prototype.concat(PROXY_TYPE, "DIRECT").join(" " + proxy + "; ");
        file.save(OUTPUT_PATH + f, pac.setProxy(p));
        readme += "* [综合代理" + proxy + "](" + f + ")(自动切换下面" + PROXY_TYPE.length + "种方式): **`" + URL + f + "`**\n";

        //多代理
        PROXY_TYPE.forEach(function(type) { //每种代理方式生成一个目录
            var p = type + " " + proxy;
            var f = file.proxyFile(p, name + '/') + '.pac';
            file.save(OUTPUT_PATH + f, pac.setProxy(p));
            readme += "\t- [指定代理" + type + "://" + proxy + "](" + f + "): **`" + URL + f + "`**\n";
        });
    });
    readme += "\n---\n";
}

//处理当前文件夹下全部目录
file.listDir().forEach(generate);
//更新readme
file.save(OUTPUT_PATH + 'README.md', readme);