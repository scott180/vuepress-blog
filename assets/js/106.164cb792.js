(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{562:function(s,a,n){"use strict";n.r(a);var t=n(25),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nginx笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx笔记"}},[s._v("#")]),s._v(" nginx笔记")]),s._v(" "),a("h2",{attrs:{id:"一、安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、安装"}},[s._v("#")]),s._v(" 一、安装")]),s._v(" "),a("h3",{attrs:{id:"_1-1、本地安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、本地安装nginx"}},[s._v("#")]),s._v(" 1.1、本地安装nginx")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("本地安装nginx 参考\nhttps://nginx.org/en/download.html\nhttps://blog.csdn.net/mao0523/article/details/122448599\n\n\nC:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Administrator"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("e:\n\nE:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("cd ProgramFiles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("nginx-1.16.1\n\n// 启动\nE:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ProgramFiles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("nginx-1.16."),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("start nginx\n\n// 刷新\nE:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ProgramFiles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("nginx-1.16."),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" reload\n\n// 停止\nE:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ProgramFiles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("nginx-1.16."),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" stop\n\nE:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ProgramFiles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("nginx-1.16."),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("报错 403 Forbidden\nhttps://www.toutiao.com/article/6613280321607565832/\n\n方法1、缺少index.html页面\n方法2、将第一行的user www-data改为user root\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("hr"),s._v(" "),a("h3",{attrs:{id:"_1-2、常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、常用命令"}},[s._v("#")]),s._v(" 1.2、常用命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n启动\nsudo /usr/local/lighthouse/softwares/nginx/sbin/nginx\n或\n$ sudo systemctl start nginx #systemd\nOR\n$ sudo service nginx start   #sysvinit\n\n\n重载 Nginx 服务\nsudo /usr/local/lighthouse/softwares/nginx/sbin/nginx -s reload\n$ sudo systemctl reload nginx #systemd\n或\n$ sudo service nginx reload   #sysvinit\n\n\n停止\nsudo /usr/local/lighthouse/softwares/nginx/sbin/nginx -s stop\n$ sudo systemctl stop nginx #systemd\nOR\n$ sudo service nginx stop   #sysvinit\n\n\n开机自启动\n$ sudo systemctl enable nginx #systemd\n或\n$ sudo service nginx enable   #sysv init\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n查询状态\nsudo /usr/local/lighthouse/softwares/nginx/sbin/nginx -t\nps -ef | grep nginx\n\n$ sudo systemctl status nginx #systemd\n或\n$ sudo service nginx status   #sysvinit\n\n\n\n端口在使用\nnginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)\nkillall -9 nginx\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docsify 使用nginx布署在私有服务器\n// 安装docsify\nnpm i docsify-cli -g  \n \ndocsify --version\ndocsify serve\n\n注意问题：\n\n将第一行的user www-data;,不管你那里是什么，统一改为user root，否则后面会出现403 forbidden.\n\n\nserver {\n\tlisten 8080;\n\tserver_name localhost;\n\n\tlocation / {\n\t\t\troot /home/lighthouse/shufaguiji/;\n\t\t\tindex index.html;\n\t}\n\n\terror_page   500 502 503 504  /50x.html;\n\tlocation = /50x.html {\n\t\troot   html;\n\t}\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"二、配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、配置"}},[s._v("#")]),s._v(" 二、配置")]),s._v(" "),a("h3",{attrs:{id:"_2-1、基础配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、基础配置"}},[s._v("#")]),s._v(" 2.1、基础配置")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听端口、缓存")]),s._v("\n\tserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tlisten "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tserver_name localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\troot /home/lighthouse/vuepress-calligraphy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t\n\t\tlocation ~* "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("css"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("png"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpeg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("gif"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("gz"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("svg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("mp4"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ogg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ogv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("webm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("htc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("xml"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("woff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\tadd_header Cache-Control no-cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t\tadd_header Pragma no-cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# xushufa.cn   /home/lighthouse/vuepress-calligraphy")]),s._v("\n\tserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server_name xushufa.cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\troot /home/lighthouse/vuepress-calligraphy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t    \n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#把http的域名请求转成https")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("301")]),s._v(" https://"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  \t\t\n\t\tlocation ~* "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("css"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("png"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpeg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("gif"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("gz"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("svg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("mp4"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ogg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ogv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("webm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("htc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("xml"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("woff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\tadd_header Cache-Control no-cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t\tadd_header Pragma no-cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\n\tserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SSL 访问端口号为 443")]),s._v("\n        listen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#填写绑定证书的域名")]),s._v("\n        server_name xushufa.cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#证书文件名称")]),s._v("\n        ssl_certificate /usr/local/lighthouse/softwares/nginx/conf/xushufa.cn_nginx/xushufa.cn_bundle.crt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#私钥文件名称")]),s._v("\n        ssl_certificate_key /usr/local/lighthouse/softwares/nginx/conf/xushufa.cn_nginx/xushufa.cn.key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        ssl_session_timeout 5m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#请按照以下协议配置")]),s._v("\n        ssl_protocols TLSv1.2 TLSv1.3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。")]),s._v("\n        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("aNULL:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("MD5:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("RC4:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("DHE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        ssl_prefer_server_ciphers on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t\n        root /home/lighthouse/vuepress-calligraphy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t      \t\t\n\t\tlocation ~* "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("css"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("png"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpeg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("gif"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("gz"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("svg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("mp4"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ogg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ogv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("webm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("htc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("xml"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("woff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\tadd_header Cache-Control no-cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t\tadd_header Pragma no-cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br")])]),a("hr"),s._v(" "),a("blockquote",[a("p",[s._v("日志格式化")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('日志格式化参考  https://blog.csdn.net/weixin_48981270/article/details/117720037\n\nlog_format json \'{"timestamp":"$time_iso8601",\'\n\t\t\t\'"host": "$server_addr",\'\n\t\t\t\'"client": "$remote_addr",\'\n\t\t\t\'"size": $body_bytes_sent,\'\n\t\t\t\'"responsetime": $request_time,\'\n\t\t\t\'"domain": "$host",\'\n\t\t\t\'"url":"$request_uri",\'\n\t\t\t\'"referer": "$http_referer",\'\n\t\t\t\'"agent": "$http_user_agent",\'\n\t\t\t\'"status": "$status",\'\n\t\t\t\'"x_forwarded_for": "$http_x_forwarded_for"}\';\n\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("hr"),s._v(" "),a("h3",{attrs:{id:"_2-2、日志按天保存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、日志按天保存"}},[s._v("#")]),s._v(" 2.2、日志按天保存")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志按天保存")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试 /bin/sh /usr/local/lighthouse/softwares/nginx/sbin/cut_nginx_logs.sh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#access.log日志存放路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("log_dir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/lighthouse/softwares/nginx/logs/"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("log_name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"access"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name_current_log")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${log_dir}")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${log_name}")]),s._v(".log\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name_yesterday_log")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${log_dir}")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${log_name}")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yesterday"')]),s._v(" +"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(".log\n\t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#复制新日志")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name_current_log")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name_yesterday_log")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#清空原日志")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name_current_log")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#nginx的sbin存放路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("nginx_sbin")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/lighthouse/softwares/nginx/sbin/nginx"')]),s._v("   \n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$name_yesterday_log")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#restart nginx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$nginx_sbin")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" reload\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/bin/sh^M: bad interpreter:没有那个文件或目录解决\n因为操作系统是windows，我在windows下编辑的脚本，所以有可能有不可见字符。\n脚本文件是DOS格式的, 即每一行的行尾以\\n\\r来标识, 其ASCII码分别是0x0D, 0x0A.\n\nvim filename\n然后用命令\n:set ff? #可以看到dos或unix的字样. 如果的确是dos格式的。\n \n然后用\n:set ff=unix #把它强制为unix格式的, 然后存盘退出。\n再次运行脚本。\n\t\nhttps://blog.csdn.net/ywb201314/article/details/51909976\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("hr"),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("#打开定时任务\ncrontab "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e\n\n#添加定时任务\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sh  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lighthouse"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("softwares"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sbin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cut_nginx_logs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh\n#"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":wq"')]),s._v("保存并退出\n\n#查看定时任务"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("就会看到你添加的内容了\ncrontab "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("l\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("hr"),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\ncrontab说明：\n\n分钟   小时   日   月   星期   命令\n*        *      *    *     *       *\n\n第1列表示分钟1～59 每分钟用*或者 */1表示\n第2列表示小时1～23（0表示0点）\n第3列表示日期1～31\n第4列 表示月份1～12\n第5列标识号星期0～6（0表示星期天）\n第6列要运行的命令\n\nhttps://blog.csdn.net/sukangshen/article/details/78900147\nhttps://blog.csdn.net/fangyuying128825/article/details/71600969\nhttp://www.cnblogs.com/peida/archive/2013/01/08/2850483.html\n\n/etc/crontab\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);