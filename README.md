# vuepress-blog

使用[vuepress]( https://vuepress.vuejs.org/zh/guide/getting-started.html )构建的博客。<br/>
主题为[vuepress-theme-reco]( https://vuepress-theme-reco.recoluan.com/views/1.x/installUse.html )。<br/>
底部添加网站备案号：ICP备案号与公安备案号。

<a href="http://beian.miit.gov.cn/" target="_blank">浙ICP备2022008289号-1</a> <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=00" target="_blank"><img src="https://xyqin.coding.net/p/my/d/document/git/raw/master/imgs/other/ba.png" width="20">浙公网安备 00号</a> 

[xushufa]( https://xushufa.cn ) &ensp; [scott180.github.io]( https://scott180.github.io/vuepress-blog ) &ensp; [vuepress-blog]( https://github.com/scott180/vuepress-blog )


## 安装

参考 [vuepress]( https://vuepress.vuejs.org/zh/ ) &ensp; [vuepress-theme-reco]( https://vuepress-theme-reco.recoluan.com/views/1.x/installUse.html ) &ensp; [blog-vuepress]( https://github.com/codeteenager/blog-vuepress )  

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

## 主题

[vuepress-theme-reco]( https://vuepress-theme-reco.recoluan.com/views/1.x/installUse.html )


安装
```sh
npm install vuepress-theme-reco --save-dev

# or

yarn add vuepress-theme-reco

```


引用
```js
// .vuepress/config.js

module.exports = {
  theme: 'reco'
} 

```

---

修改footer   参考[HandleVueThemeFooter]( http://dropleaves.com/vue_docs/HandleVueThemeFooter.html )

```

Vue-theme-reco构建个人博客时，在首页的footer下显示vuepress-theme-reco@1.6.6样式
1.在项目中的node_modules目录下找到node_modules/vuepress-theme-reco/components/Footer.vue这个页面 
2.直接把3~6行代码注释掉，如下：


<template>
  <div class="footer-wrapper">
<!--    <span>-->
<!--      <reco-icon icon="reco-theme" />-->
<!--      <a target="blank" href="https://vuepress-theme-reco.recoluan.com">{{`vuepress-theme-reco@${version}`}}</a>-->
<!--    </span>-->
    <span v-if="$themeConfig.record">
      <reco-icon icon="reco-beian" />
      <a :href="$themeConfig.recordLink || '#'">{{ $themeConfig.record }}</a>
    </span>
```

可修改 footer-wrapper

```html

  <div class="footer-wrapper">
<!--    <span>  Copyright © 2022 · xushufa.cn · 无为徐生 -->
<!--      <reco-icon icon="reco-theme" />-->
<!--      <a target="blank" href="https://vuepress-theme-reco.recoluan.com">{{`vuepress-theme-reco@${version}`}}</a>-->
<!--    </span>-->

	<span class="cyber-security" v-if="$themeConfig.record">
      <a> Copyright © 2022 · xushufa.cn · 无为徐生  </a>
    </span>
	
    <span class="cyber-security" v-if="$themeConfig.record">
      <a :href="$themeConfig.recordLink || '#'">{{ $themeConfig.record }}</a>
    </span>
	
	<span class="cyber-security" v-if="$themeConfig.cyberSecurityRecord">
      <img src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" alt="">
      <a :href="$themeConfig.cyberSecurityLink || '#'">{{ $themeConfig.cyberSecurityRecord }}</a>
    </span>

    <Comments :isShowComments="false"/>
  </div>
  
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