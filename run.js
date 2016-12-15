#!/usr/bin/env node

"use strict";

var file = require("./file.js");
var pac = require("./pac.js");

var OUTPUT_PATH = '_site/';


var hosts = file.readLines('nku/host.txt');
var nets = file.readLines('nku/net.txt');
var proxy = file.readLines('nku/proxy.txt');
var txt = pac(hosts, nets);

file.save(OUTPUT_PATH + 'nku/pac.txt', txt);

proxy.forEach(function(p) {
    var f = OUTPUT_PATH + file.proxyFile(p, 'nku/') + '.pac';
    file.save(f, pac.setProxy(p));
});