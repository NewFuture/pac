#!/usr/bin/env node

"use strict";
//配置读取和自动生成代理配置PAC

var file = require("./file.js");
var pac = require("./pac.js");

var OUTPUT_PATH = '_site/'; //输出路径
var PROXY_TYPE = ["SOCKS5", "HTTP", "SOCKS"]; //代理方式列表
var URL = 'https://pac.newfuture.cc/'; //发布站点目录
var readme = '# 自动代理配置(Proxy Auto Config)\n\
自动跳过内网,局域网和常用ipv6\n\n\
说明:\n\n\
* 【`全部代理`】根据代理是否可用,切换代理协议;如都不可用切换为**直接连接**.\n\
* 【`指定协议`】只使用指定的代理协议方式(chrome插件可选用socks5代理效率高).\n\
* 【`pac.txt`】为windows版SS客户端自动生成系统代理的模板.\n\
* 常用浏览器，Windows和Mac等系统均支持PAC代理模式.\n\
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
    readme += "* SS客户端使用本地PAC: 下载[此pac.txt](" + f + "),然后覆盖(或修改)本地文件夹下pac.txt\n";

    //each output
    proxylist.forEach(function(proxy) {
        //综合多代理切换
        f = file.proxyFile(proxy, name + '/') + '.pac';
        var p = Array.prototype.concat(PROXY_TYPE, "DIRECT").join(" " + proxy + "; ");
        file.save(OUTPUT_PATH + f, pac.setProxy(p));
        readme += "* [全部代理" + proxy + "](" + f + ")(自动切换下面" + PROXY_TYPE.length + "种代理协议): **`" + URL + f + "`**\n";

        //多代理
        PROXY_TYPE.forEach(function(type) { //每种代理方式生成一个目录
            var p = type + " " + proxy;
            var f = file.proxyFile(p, name + '/') + '.pac';
            file.save(OUTPUT_PATH + f, pac.setProxy(p));
            readme += "\t- [仅" + type + "://" + proxy + "](" + f + "): **`" + URL + f + "`**\n";
        });
    });
    readme += "\n---\n";
}

//处理当前文件夹下全部目录
file.listDir().forEach(generate);
//更新readme

readme += "\n所有内容根据[github.com/NewFuture/pac](https://github.com/NewFuture/pac)自动更新于 {{site.time}}\n";
readme += "\n[需要帮助，反馈意见或者发现BUG欢迎在此提出](https://github.com/NewFuture/pac/issues)\n";

file.save(OUTPUT_PATH + 'README.md', readme);
