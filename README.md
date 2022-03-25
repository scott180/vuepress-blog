# vuepress-blog

使用vuepress构建的博客。

[xushufa]( https://xushufa.cn ) &ensp; [scott180.github.io]( https://scott180.github.io/vuepress-blog ) &ensp; [vuepress-blog]( https://github.com/scott180/vuepress-blog )

## 首页

```
---
home: true
lang: zh-CN
heroText: 个人博客
heroImage: /logo.jpg
actionText: 开始 →
actionLink: /文档/古文诗词
features:
- title: 笔记
  details: 程序员笔记 git linux java 
- title: 资料
  details: 数据库及开发工具资料 mysql oracle idea github 
- title: 文档
  details: 古文诗词 无为徐生 书法练习轨迹
---

::: slot footer
Copyright © 2022 · xushufa.cn · 无为徐生 <br/>  [浙ICP备2022008289号-1]( http://beian.miit.gov.cn/ ) <img src="/ba.png" width="20"> [浙公网安备 33011002016354号]( http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002016354 ) 
:::

```



## 安装

参考 [vuepress]( https://vuepress.vuejs.org/zh/ ) &ensp; [blog-vuepress]( https://github.com/codeteenager/blog-vuepress )  

在使用前请先安装VuePress

```sh
$ npm install -g vuepress
```


```sh
mkdir vuepress-starter && cd vuepress-starter
```

```sh
yarn init # npm init
```

```sh
yarn add -D vuepress # npm install -D vuepress
```


```sh
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

> 在 `package.json` 中添加一些 `scripts` 

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

使用`npm run docs:dev`启动项目，启动后在浏览器中使用`localhost:8080`进行访问
```sh
$ npm run docs:dev
```

使用`npm run docs:build`打包项目
```sh
$ npm run docs:build
```



## 部署

根目录创建 `deploy.sh` 文件

```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:scott180/scott180.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  注意配置 `docs\.vuepress\config.js` 的 `base`
# git push -f git@github.com:scott180/vuepress-calligraphy.git master:gh-pages

cd -

```

---

设置 `package.json`
```
{
    "scripts": {
        "deploy": "bash deploy.sh"
      }
}

```

运行 `npm run deploy` 即可部署到github静态页面


---

> 如出现样式丢失，css文件不能加载问题，需要在 `docs\.vuepress\config.js` 配置 `base` 字段

```
module.exports = {
  // 页面标题
  title: '个人博客',
  // 网页描述
  description: '程序员笔记*书法练习记录',
  base: '/vuepress-blog/',
```

---

> vuepress 底部添加网站备案号：ICP备案号与公安备案号

[富文本 footer]( https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%8C%E6%96%87%E6%9C%AC-footer )

```
---
home: true
---

::: slot footer
MIT Licensed | Copyright © 2018-present [Evan You](https://github.com/yyx990803)
:::

```

---
