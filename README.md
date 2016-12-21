# PAC （自动代理配置）

Proxy Auto-Config generator
自动生成PAC代理配置文件(自动跳过内网,局域网和ipv6)

## Usage

### 使用最新的在线pac

在[https://pac.newfuture.xyz](https://pac.newfuture.xyz) 根据本机端口选择的pac

使用场景:

* chrome SwitchyOmega 等代理插件选择在线PAC模式填写对应的URL即可
* windows 系统设置->网络->代理->自动代理，代理脚本，填入对应的URL即可
* 使用ss `在线代理`填入url，作用同上

### Windwos的下ss本机代理

[https://pac.newfuture.xyz](https://pac.newfuture.xyz) 选择 `pac.txt` 替换本地pac.txt即可


## Contribution

只需要修改配置即可(其中`;`为注释):

* 主机白名单： [主机列表](nku/host.txt) 按格式添加新的一行即可(域名或者IP,支持正则表达式)
* ip网段白名单： [网段列表](nku/net.txt) 按格式添加一行ip和子网掩码即可
* 增加代理地址：[代理列表](nku/proxy.txt) 按格式添加一行代理主机和端口即可
* 添加新的目录： 复制`nku`目录到新的目录(需以字母或者数字开头否则被忽略)修改对应配置即可,(生成是会自动扫描目录)

## Build [![Build Status](https://travis-ci.org/NewFuture/pac.svg?branch=master)](https://travis-ci.org/NewFuture/pac)

可以本机手动编译或者Travis自动编译生成:

* 手动编译(需要node)：运行 `./run.js`即可
* 自动编译: 每次提交合并后会自动编译，并把生成结果自动发步到[gh-pages分支](https://github.com/NewFuture/pac/tree/gh-pages)([网站](https://pac.newfuture.xyz/))
 