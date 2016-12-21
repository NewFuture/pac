# 自动代理配置(Proxy Auto Config)
自动跳过内网,局域网和常用ipv6

说明:

* 【`综合代理`】根据代理是否可用,切换代理方式;如都不可用切换为**直接连接**.
* 【`指定代理`】只使用指定的代理方式(其中PROXY表示http代理).
* 【`pac.txt`】为windows版SS客户端自动生成系统代理的模板.
* 常用浏览器，Windows和Mac等系统均支持PAC代理模式.
* 请根据需要选择合适的配置^_^

---

## nku代理自动配置(PAC for nku)

* SS客户端使用本地PAC: 下载[此pac.txt](nku/pac.txt),然后覆盖(或修改)本地文件夹下pac.txt
* [综合代理localhost:1080](nku/localhost/1080.pac)(自动切换下面3种方式): **`https://pac.newfuture.xyz/nku/localhost/1080.pac`**
	- [指定代理SOCKS5://localhost:1080](nku/SOCKS5/localhost/1080.pac): **`https://pac.newfuture.xyz/nku/SOCKS5/localhost/1080.pac`**
	- [指定代理PROXY://localhost:1080](nku/PROXY/localhost/1080.pac): **`https://pac.newfuture.xyz/nku/PROXY/localhost/1080.pac`**
	- [指定代理SOCKS://localhost:1080](nku/SOCKS/localhost/1080.pac): **`https://pac.newfuture.xyz/nku/SOCKS/localhost/1080.pac`**
* [综合代理localhost:1111](nku/localhost/1111.pac)(自动切换下面3种方式): **`https://pac.newfuture.xyz/nku/localhost/1111.pac`**
	- [指定代理SOCKS5://localhost:1111](nku/SOCKS5/localhost/1111.pac): **`https://pac.newfuture.xyz/nku/SOCKS5/localhost/1111.pac`**
	- [指定代理PROXY://localhost:1111](nku/PROXY/localhost/1111.pac): **`https://pac.newfuture.xyz/nku/PROXY/localhost/1111.pac`**
	- [指定代理SOCKS://localhost:1111](nku/SOCKS/localhost/1111.pac): **`https://pac.newfuture.xyz/nku/SOCKS/localhost/1111.pac`**
* [综合代理127.0.0.1:1080](nku/127.0.0.1/1080.pac)(自动切换下面3种方式): **`https://pac.newfuture.xyz/nku/127.0.0.1/1080.pac`**
	- [指定代理SOCKS5://127.0.0.1:1080](nku/SOCKS5/127.0.0.1/1080.pac): **`https://pac.newfuture.xyz/nku/SOCKS5/127.0.0.1/1080.pac`**
	- [指定代理PROXY://127.0.0.1:1080](nku/PROXY/127.0.0.1/1080.pac): **`https://pac.newfuture.xyz/nku/PROXY/127.0.0.1/1080.pac`**
	- [指定代理SOCKS://127.0.0.1:1080](nku/SOCKS/127.0.0.1/1080.pac): **`https://pac.newfuture.xyz/nku/SOCKS/127.0.0.1/1080.pac`**

---

所有内容根据[github.com/NewFuture/pac](https://github.com/NewFuture/pac)自动更新于 {{site.time}}
