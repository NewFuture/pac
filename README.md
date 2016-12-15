# PAC （代理配置）

## 使用

### 使用最新的在线pac
在[https://newfuture.github.io/pac/](https://newfuture.github.io/pac/) 根据本机端口选择的pac

* chrome SwitchyOmega 等代理插件选择在线PAC模式填写对应的URL即可
* windows 系统设置->网络->代理->自动代理，代理脚本，填入对应的URL即可
* 使用ss `在线代理`填入url，作用同上

### windwos的ss本机代理

[https://newfuture.github.io/pac/](https://newfuture.github.io/pac/) 选择 `pac.txt` 替换本地pac.txt即可


## 添加

只需要修改配置即可(其中`;`为注释)

* 主机(域名或者IP,支持正则表达式)白名单： [主机列表](nku/host.txt) 按格式添加新的一行即可
* ip网段白名单： [网段列表](nku/net.txt) 按格式添加一行ip和子网掩码即可
* 增加代理地址：[代理列表](nku/proxy.txt) 按格式添加一行代理主机和端口即可

## 编译生成

* 手动编译(需要node)：运行 `./run.js`即可
* 自动编译: 每次提交合并后会自动编译，并把生成结果自动发步到gh-pages分支(网站)

 