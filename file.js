"use strict";

var fs = require("fs");
var path = require('path');

var SEPARATOR = ';'; // comment
var INGORE = ['node_modules']; //忽略目录
/*
读取文件
数组形式返回有效行
*/
function readLines(file, filter) {
    var lines = fs.readFileSync(file).toString().split("\n");
    lines = lines.map(function(s) {
        return s.split(SEPARATOR, 1)[0].trim();
    });
    filter = filter || function(s) { return s; };
    return lines.filter(filter);
}

/*
写入文件,自动循环创建目录
*/
function save(file, data) {
    var folder = path.dirname(file);
    folder.split('/').forEach(function(dir, i, dirs) {
        dir = path.resolve(dirs.slice(0, i + 1).join('/'));
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    });
    console.log('[save] ' + file)
    fs.writeFileSync(file, data);
}

/*
地址转路径
*/
function proxyFile(proxy, pre) {
    var s = proxy.split(':');
    var port = s.pop();
    var file = s.join('-').replace(' ', '/').replace(/\[|\]/g, '_') + '/' + port;
    if (pre) {
        file = pre + file;
    }
    return file.toLowerCase();
}

/*
 * 读取目录 
 */
function listDir(base, filter) {
    base = base || __dirname;
    filter = filter || function(s) {
        return '._-'.indexOf(s[0]) < 0 && INGORE.indexOf(s) < 0 &&
            fs.lstatSync(base + '/' + s).isDirectory();
    };

    var dirs = fs.readdirSync(base);
    return dirs.filter(filter);
}

exports = module.exports = {
    readLines: readLines,
    save: save,
    proxyFile: proxyFile,
    listDir: listDir
}