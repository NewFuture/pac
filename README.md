# 自动代理配置(Proxy Auto Config)
自动跳过内网,局域网和常用ipv6

说明:

* 【`综合代理`】根据代理是否可用,切换代理方式;如都不可用切换为**直接连接**.
* 【`指定代理`】只使用指定的代理方式(请确认系统和代理端同时支持).
* 【`pac.txt`】为windows版SS客户端自动生成系统代理的模板.
* 常用浏览器，Windows和Mac等系统均支持PAC代理模式.
* 请根据需要选择合适的配置^_^

---

## nku代理自动配置(PAC for nku)

* SS客户端使用本地PAC: 下载[此pac.txt](nku/pac.txt),然后覆盖(或修改)本地文件夹下pac.txt
* [综合代理localhost:1080](nku/localhost/1080.pac)(自动切换下面3种方式): **`http://pac.newfuture.cc/nku/localhost/1080.pac`**
	- [指定代理SOCKS5://localhost:1080](nku/socks5/localhost/1080.pac): **`http://pac.newfuture.cc/nku/socks5/localhost/1080.pac`**
	- [指定代理HTTP://localhost:1080](nku/http/localhost/1080.pac): **`http://pac.newfuture.cc/nku/http/localhost/1080.pac`**
	- [指定代理SOCKS://localhost:1080](nku/socks/localhost/1080.pac): **`http://pac.newfuture.cc/nku/socks/localhost/1080.pac`**
* [综合代理localhost:1111](nku/localhost/1111.pac)(自动切换下面3种方式): **`http://pac.newfuture.cc/nku/localhost/1111.pac`**
	- [指定代理SOCKS5://localhost:1111](nku/socks5/localhost/1111.pac): **`http://pac.newfuture.cc/nku/socks5/localhost/1111.pac`**
	- [指定代理HTTP://localhost:1111](nku/http/localhost/1111.pac): **`http://pac.newfuture.cc/nku/http/localhost/1111.pac`**
	- [指定代理SOCKS://localhost:1111](nku/socks/localhost/1111.pac): **`http://pac.newfuture.cc/nku/socks/localhost/1111.pac`**
* [综合代理127.0.0.1:1080](nku/127.0.0.1/1080.pac)(自动切换下面3种方式): **`http://pac.newfuture.cc/nku/127.0.0.1/1080.pac`**
	- [指定代理SOCKS5://127.0.0.1:1080](nku/socks5/127.0.0.1/1080.pac): **`http://pac.newfuture.cc/nku/socks5/127.0.0.1/1080.pac`**
	- [指定代理HTTP://127.0.0.1:1080](nku/http/127.0.0.1/1080.pac): **`http://pac.newfuture.cc/nku/http/127.0.0.1/1080.pac`**
	- [指定代理SOCKS://127.0.0.1:1080](nku/socks/127.0.0.1/1080.pac): **`http://pac.newfuture.cc/nku/socks/127.0.0.1/1080.pac`**

---

所有内容根据[github.com/NewFuture/pac](https://github.com/NewFuture/pac)自动更新于 {{site.time}}

[需要帮助，反馈意见或者发现BUG欢迎在此提出](https://github.com/NewFuture/pac/issues)
