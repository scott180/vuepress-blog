(window.webpackJsonp=window.webpackJsonp||[]).push([[3,17],{277:function(t,e,a){},279:function(t,e,a){},281:function(t,e,a){"use strict";var s=a(9),i=a(42),n=a(6),r=a(1),l=a(21);s({target:"Iterator",proto:!0,real:!0},{find:function(t){r(this),n(t);var e=l(this),a=0;return i(e,(function(e,s){if(t(e,a++))return s(e)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},282:function(t,e,a){"use strict";a(277)},283:function(t,e,a){"use strict";a.r(e);a(14),a(61);var s=a(298),i=a(286),n=a(271);function r(t,e){if("group"===e.type){const a=e.path&&Object(n.e)(t,e.path),s=e.children.some(e=>"group"===e.type?r(t,e):"page"===e.type&&Object(n.e)(t,e.path));return a||s}return!1}var l={name:"SidebarLinks",components:{SidebarGroup:s.default,SidebarLink:i.default},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let a=0;a<e.length;a++){const s=e[a];if(r(t,s))return a}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(n.e)(this.$route,t.regularPath)}}},o=a(25),p=Object(o.a)(l,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(a,s){return e("li",{key:s},["group"===a.type?e("SidebarGroup",{attrs:{item:a,open:s===t.openGroupIndex,collapsable:a.collapsable||a.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(s)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:a}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},286:function(t,e,a){"use strict";a.r(e);a(14),a(281),a(40),a(61);var s=a(271);function i(t,e,a,s,i){const n={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}};return i>2&&(n.style={"padding-left":i+"rem"}),t("RouterLink",n,a)}function n(t,e,a,r,l,o=1){return!e||o>l?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const p=Object(s.e)(r,a+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[i(t,a+"#"+e.slug,e.title,p,e.level-1),n(t,e.children,a,r,l,o+1)])}))}var r={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:a,$route:r,$themeConfig:l,$themeLocaleConfig:o},props:{item:p,sidebarDepth:h}}){const c=Object(s.e)(r,p.path),u="auto"===p.type?c||p.children.some(t=>Object(s.e)(r,p.basePath+"#"+t.slug)):c,d="external"===p.type?function(t,e,a){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[a,t("OutboundLink")])}(t,p.path,p.title||p.path):i(t,p.path,p.title||p.path,u),b=[e.frontmatter.sidebarDepth,h,o.sidebarDepth,l.sidebarDepth,1].find(t=>void 0!==t),m=o.displayAllHeaders||l.displayAllHeaders;if("auto"===p.type)return[d,n(t,p.children,p.basePath,r,b)];if((u||m)&&p.headers&&!s.d.test(p.path)){return[d,n(t,Object(s.c)(p.headers),p.path,r,b)]}return d}},l=(a(282),a(25)),o=Object(l.a)(r,void 0,void 0,!1,null,null,null);e.default=o.exports},289:function(t,e,a){},294:function(t,e,a){},295:function(t,e,a){"use strict";a(279)},296:function(t,e,a){},298:function(t,e,a){"use strict";a.r(e);var s=a(271),i={name:"SidebarGroup",components:{DropdownTransition:a(274).default},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=a(283).default},methods:{isActive:s.e}},n=(a(295),a(25)),r=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=r.exports},440:function(t,e,a){"use strict";a(289)},445:function(t,e,a){t.exports={title:"无为徐生",base:"/vuepress-blog/",head:[["link",{rel:"icon",href:"/icon.png"}]],port:3e3,markdown:{lineNumbers:!0,extractHeaders:["h2","h3","h4"]},themeConfig:{sidebar:"auto",lastUpdated:"最近更新",editLinks:!1,algolia:{apiKey:"e9a0a602fe9acf6235cc3423f80fc44c",indexName:"xushufa",appId:"ODP1ID8WCB"},nav:[{text:"主页",link:"/"},{text:"目录",link:"/目录"},{text:"生活",items:[{text:"日常Note",link:"/生活/随笔/日常Note"},{text:"驾考记事",link:"/生活/随笔/驾考记事"},{text:"健身与学习",link:"/生活/随笔/健身与学习"},{text:"吉他练习笔记",link:"/生活/随笔/吉他练习笔记"},{text:"如何练好书法",link:"/生活/文档/如何练好书法"},{text:"我的原神旅行观测记录",link:"/生活/随笔/我的原神旅行观测记录"}]},{text:"编程",items:[{text:"javaNote",link:"/编程/java/javaNote"},{text:"排序算法",link:"/编程/java/排序算法"},{text:"gitNote",link:"/编程/运维/gitNote"},{text:"linuxNote",link:"/编程/运维/linuxNote-x"},{text:"vuepress构建项目",link:"/编程/运维/vuepress构建项目"},{text:"mysqlNote",link:"/编程/数据库/mysqlNote"},{text:"oracleNote",link:"/编程/数据库/oracleNote"},{text:"javaScript笔记",link:"/编程/资料/javaScript笔记"},{text:"工具网站readMe",link:"/编程/资料/工具网站readMe"}]},{text:"书法",items:[{text:"赤壁赋",link:"/书法/书法/赤壁赋"},{text:"多宝塔碑",link:"/书法/书法/多宝塔碑"},{text:"徐书法",link:"/书法/练习/徐书法"},{text:"无为徐生",link:"/书法/练习/无为徐生"},{text:"古文诗词",link:"/书法/练习/古文诗词"},{text:"书法练习轨迹",link:"/书法/练习/书法练习轨迹ReadMe"},{text:"有感之杂说",link:"/书法/轨迹/有感之杂说"}]},{text:"关于我",link:"/关于我"}],sidebar:{"/生活/":[{title:"随笔",collapsable:!0,sidebarDepth:2,children:[{title:"日常Note",path:"随笔/日常Note"},{title:"驾考记事",path:"随笔/驾考记事"},{title:"健身与学习",path:"随笔/健身与学习"},{title:"吉他练习笔记",path:"随笔/吉他练习笔记"},{title:"二十四式太极拳",path:"随笔/二十四式太极拳"},{title:"短期远行必备物品",path:"随笔/短期远行必备物品"},{title:"我的原神旅行观测记录",path:"随笔/我的原神旅行观测记录"},{title:"纪念一下，三百天打满深渊",path:"随笔/纪念一下，三百天打满深渊"},{title:"原神历史版本祈愿up活动速递",path:"随笔/原神历史版本祈愿up活动速递"}]},{title:"文档",collapsable:!0,sidebarDepth:2,children:[{title:"如何练好书法",path:"文档/如何练好书法"},{title:"三千个脑筋急转弯",path:"文档/三千个脑筋急转弯"},{title:"文言文翻译网络流行语",path:"文档/文言文翻译网络流行语"},{title:"安徽电信免费流量获取方法",path:"文档/安徽电信免费流量获取方法"},{title:"安徽电信-流量来啦-每日必点",path:"文档/安徽电信-流量来啦-每日必点"},{title:"治疗失眠无限循环的有趣动图",path:"文档/治疗失眠无限循环的有趣动图"}]}],"/编程/":[{title:"java",collapsable:!0,sidebarDepth:2,children:[{title:"java介绍",path:"java/java介绍"},{title:"javaNote",path:"java/javaNote"},{title:"排序算法",path:"java/排序算法"},{title:"java资料集",path:"java/java资料集"},{title:"布隆过滤器",path:"java/布隆过滤器"},{title:"eclipse笔记",path:"java/eclipse笔记"},{title:"tomcat笔记",path:"java/tomcat笔记"},{title:"cpu过高分析",path:"java/cpu过高分析"},{title:"mybatis笔记",path:"java/mybatis笔记"},{title:"springmvc笔记",path:"java/springmvc笔记"},{title:"servlet-jsp学习",path:"java/servlet-jsp学习"},{title:"SpringCloud入门",path:"java/SpringCloud入门"},{title:"springboot启动banner图案",path:"java/springboot启动banner图案"}]},{title:"运维",collapsable:!0,sidebarDepth:2,children:[{title:"docker",path:"运维/docker"},{title:"gitNote",path:"运维/gitNote"},{title:"shell语法",path:"运维/shell语法"},{title:"linuxNote",path:"运维/linuxNote-x"},{title:"nginx笔记",path:"运维/nginx笔记"},{title:"定时执行脚本",path:"运维/定时执行脚本"},{title:"gitbook部署博客",path:"运维/gitbook部署博客"},{title:"vuepress构建项目",path:"运维/vuepress构建项目"},{title:"批量推送布署徐书法项目",path:"运维/批量推送布署徐书法项目"},{title:"markdown静态博客搭建综述",path:"运维/markdown静态博客搭建综述"},{title:"gitlab、github绑定自定义域名",path:"运维/gitlab、github绑定自定义域名"},{title:"git平台docsify布署markdown文件",path:"运维/git平台docsify布署markdown文件"},{title:"gitlab、github、gitee布署mkdocs主题仓库",path:"运维/gitlab、github、gitee布署mkdocs主题仓库"}]},{title:"数据库",collapsable:!0,sidebarDepth:2,children:[{title:"mysqlNote",path:"数据库/mysqlNote"},{title:"oracleNote",path:"数据库/oracleNote"},{title:"ldapNote",path:"数据库/ldapNote"},{title:"redis",path:"数据库/redis"},{title:"mongo",path:"数据库/mongo"},{title:"数据库隔离级别",path:"数据库/数据库隔离级别"},{title:"mysql开启log-bin日志",path:"数据库/mysql开启log-bin日志"}]},{title:"资料",collapsable:!0,sidebarDepth:2,children:[{title:"工具网站readMe",path:"资料/工具网站readMe"},{title:"nodejs与npm笔记",path:"资料/nodejs与npm笔记"},{title:"jquery笔记",path:"资料/jquery笔记"},{title:"二进制数负数",path:"资料/二进制数负数"},{title:"javaScript笔记",path:"资料/javaScript笔记"},{title:"本地安装kafka",path:"资料/本地安装kafka"},{title:"本地安装consul",path:"资料/本地安装consul"},{title:"本地安装zookeeper",path:"资料/本地安装zookeeper"},{title:"markdown常用语法",path:"资料/markdown常用语法"},{title:"window安装RabbitMQ",path:"资料/window安装RabbitMQ"},{title:"markdown导出pdf方法优劣分析",path:"资料/markdown导出pdf方法优劣分析"},{title:"十大git仓库平台保存文件与图片",path:"资料/十大git仓库平台保存文件与图片"},{title:"系统磁盘c盘清理垃圾文件方法一览",path:"资料/系统磁盘c盘清理垃圾文件方法一览"},{title:"pagefile.sys有几十个G，太大怎么办",path:"资料/pagefile.sys有几十个G，太大怎么办"}]}],"/书法/":[{title:"书法",collapsable:!0,sidebarDepth:2,children:[{title:"书法名帖",path:"书法/书法名帖"},{title:"赤壁赋",path:"书法/赤壁赋"},{title:"灵飞经",path:"书法/灵飞经"},{title:"多宝塔碑",path:"书法/多宝塔碑"},{title:"《心经》书法",path:"书法/《心经》书法"},{title:"《兜沙经》书法",path:"书法/《兜沙经》书法"},{title:"《多宝塔碑》单字版",path:"书法/《多宝塔碑》单字版"},{title:"文徵明小楷《千字文》",path:"书法/文徵明小楷《千字文》"},{title:"文徵明小楷《草堂十志》",path:"书法/文徵明小楷《草堂十志》"}]},{title:"练习",collapsable:!0,sidebarDepth:2,children:[{title:"徐书法",path:"练习/徐书法"},{title:"无为徐生",path:"练习/无为徐生"},{title:"古文诗词",path:"练习/古文诗词"},{title:"笔名汉字频率分析",path:"练习/笔名汉字频率分析"},{title:"书法练习轨迹ReadMe",path:"练习/书法练习轨迹ReadMe"},{title:"书法练习轨迹--明月几时有",path:"练习/书法练习轨迹--明月几时有"}]},{title:"轨迹",collapsable:!0,sidebarDepth:2,children:[{title:"自序",path:"轨迹/自序"},{title:"诗词杂句",path:"轨迹/诗词杂句"},{title:"有感之杂说",path:"轨迹/有感之杂说"},{title:"书法练习轨迹remark",path:"轨迹/书法练习轨迹remark"},{title:"书法练习轨迹--明月几时有-无图版",path:"轨迹/书法练习轨迹--明月几时有-无图版"}]}]}},configureWebpack:{resolve:{alias:{"@vuepress":"../images/vuepress","@vue":"../images/vue"}}},locales:{"/":{lang:"zh-CN",title:"无为徐生",description:"生活随笔-编程笔记-书法练习轨迹"}},plugins:[["@vuepress/last-updated",{transformer:(t,e)=>{const s=a(270);return s.locale(e),s(t).format("YYYY-MM-DD HH:mm:ss")}}],["vuepress-plugin-mermaidjs"]]}},446:function(t,e,a){"use strict";a(294)},447:function(t,e,a){"use strict";a(296)},452:function(t,e,a){var s={"./af":299,"./af.js":299,"./ar":300,"./ar-dz":301,"./ar-dz.js":301,"./ar-kw":302,"./ar-kw.js":302,"./ar-ly":303,"./ar-ly.js":303,"./ar-ma":304,"./ar-ma.js":304,"./ar-ps":305,"./ar-ps.js":305,"./ar-sa":306,"./ar-sa.js":306,"./ar-tn":307,"./ar-tn.js":307,"./ar.js":300,"./az":308,"./az.js":308,"./be":309,"./be.js":309,"./bg":310,"./bg.js":310,"./bm":311,"./bm.js":311,"./bn":312,"./bn-bd":313,"./bn-bd.js":313,"./bn.js":312,"./bo":314,"./bo.js":314,"./br":315,"./br.js":315,"./bs":316,"./bs.js":316,"./ca":317,"./ca.js":317,"./cs":318,"./cs.js":318,"./cv":319,"./cv.js":319,"./cy":320,"./cy.js":320,"./da":321,"./da.js":321,"./de":322,"./de-at":323,"./de-at.js":323,"./de-ch":324,"./de-ch.js":324,"./de.js":322,"./dv":325,"./dv.js":325,"./el":326,"./el.js":326,"./en-au":327,"./en-au.js":327,"./en-ca":328,"./en-ca.js":328,"./en-gb":329,"./en-gb.js":329,"./en-ie":330,"./en-ie.js":330,"./en-il":331,"./en-il.js":331,"./en-in":332,"./en-in.js":332,"./en-nz":333,"./en-nz.js":333,"./en-sg":334,"./en-sg.js":334,"./eo":335,"./eo.js":335,"./es":336,"./es-do":337,"./es-do.js":337,"./es-mx":338,"./es-mx.js":338,"./es-us":339,"./es-us.js":339,"./es.js":336,"./et":340,"./et.js":340,"./eu":341,"./eu.js":341,"./fa":342,"./fa.js":342,"./fi":343,"./fi.js":343,"./fil":344,"./fil.js":344,"./fo":345,"./fo.js":345,"./fr":346,"./fr-ca":347,"./fr-ca.js":347,"./fr-ch":348,"./fr-ch.js":348,"./fr.js":346,"./fy":349,"./fy.js":349,"./ga":350,"./ga.js":350,"./gd":351,"./gd.js":351,"./gl":352,"./gl.js":352,"./gom-deva":353,"./gom-deva.js":353,"./gom-latn":354,"./gom-latn.js":354,"./gu":355,"./gu.js":355,"./he":356,"./he.js":356,"./hi":357,"./hi.js":357,"./hr":358,"./hr.js":358,"./hu":359,"./hu.js":359,"./hy-am":360,"./hy-am.js":360,"./id":361,"./id.js":361,"./is":362,"./is.js":362,"./it":363,"./it-ch":364,"./it-ch.js":364,"./it.js":363,"./ja":365,"./ja.js":365,"./jv":366,"./jv.js":366,"./ka":367,"./ka.js":367,"./kk":368,"./kk.js":368,"./km":369,"./km.js":369,"./kn":370,"./kn.js":370,"./ko":371,"./ko.js":371,"./ku":372,"./ku-kmr":373,"./ku-kmr.js":373,"./ku.js":372,"./ky":374,"./ky.js":374,"./lb":375,"./lb.js":375,"./lo":376,"./lo.js":376,"./lt":377,"./lt.js":377,"./lv":378,"./lv.js":378,"./me":379,"./me.js":379,"./mi":380,"./mi.js":380,"./mk":381,"./mk.js":381,"./ml":382,"./ml.js":382,"./mn":383,"./mn.js":383,"./mr":384,"./mr.js":384,"./ms":385,"./ms-my":386,"./ms-my.js":386,"./ms.js":385,"./mt":387,"./mt.js":387,"./my":388,"./my.js":388,"./nb":389,"./nb.js":389,"./ne":390,"./ne.js":390,"./nl":391,"./nl-be":392,"./nl-be.js":392,"./nl.js":391,"./nn":393,"./nn.js":393,"./oc-lnc":394,"./oc-lnc.js":394,"./pa-in":395,"./pa-in.js":395,"./pl":396,"./pl.js":396,"./pt":397,"./pt-br":398,"./pt-br.js":398,"./pt.js":397,"./ro":399,"./ro.js":399,"./ru":400,"./ru.js":400,"./sd":401,"./sd.js":401,"./se":402,"./se.js":402,"./si":403,"./si.js":403,"./sk":404,"./sk.js":404,"./sl":405,"./sl.js":405,"./sq":406,"./sq.js":406,"./sr":407,"./sr-cyrl":408,"./sr-cyrl.js":408,"./sr.js":407,"./ss":409,"./ss.js":409,"./sv":410,"./sv.js":410,"./sw":411,"./sw.js":411,"./ta":412,"./ta.js":412,"./te":413,"./te.js":413,"./tet":414,"./tet.js":414,"./tg":415,"./tg.js":415,"./th":416,"./th.js":416,"./tk":417,"./tk.js":417,"./tl-ph":418,"./tl-ph.js":418,"./tlh":419,"./tlh.js":419,"./tr":420,"./tr.js":420,"./tzl":421,"./tzl.js":421,"./tzm":422,"./tzm-latn":423,"./tzm-latn.js":423,"./tzm.js":422,"./ug-cn":424,"./ug-cn.js":424,"./uk":425,"./uk.js":425,"./ur":426,"./ur.js":426,"./uz":427,"./uz-latn":428,"./uz-latn.js":428,"./uz.js":427,"./vi":429,"./vi.js":429,"./x-pseudo":430,"./x-pseudo.js":430,"./yo":431,"./yo.js":431,"./zh-cn":432,"./zh-cn.js":432,"./zh-hk":433,"./zh-hk.js":433,"./zh-mo":434,"./zh-mo.js":434,"./zh-tw":435,"./zh-tw.js":435};function i(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id=452},459:function(t,e,a){"use strict";a.r(e);var s={name:"Home",components:{NavLink:a(273).default},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(a(440),a(25)),n=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,s){return e("div",{key:s,staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):e("Content",{staticClass:"footer",attrs:{"slot-key":"footer"}})],1)}),[],!1,null,null,null);e.default=n.exports},460:function(t,e,a){"use strict";a.r(e);var s=a(448),i=a(449),n=a(445),r={components:{PageEdit:s.default,PageNav:i.default},props:["sidebarItems"],data:()=>({visibleValine:!0}),watch:{$route:{handler(t,e){let a=n.HIDE_VALINE_PATHS&&n.HIDE_VALINE_PATHS.includes(t.path);this.visibleValine=!a},immediate:!0}}},l=(a(446),a(25)),o=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"page"},[t._t("top"),t._v(" "),e("Valine",{directives:[{name:"show",rawName:"v-show",value:t.visibleValine,expression:"visibleValine"}],staticClass:"u-valine-wrap"}),t._v(" "),e("Content",{staticClass:"theme-default-content"}),t._v(" "),e("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports},461:function(t,e,a){"use strict";a.r(e);var s=a(283),i=a(297),n={name:"Sidebar",components:{SidebarLinks:s.default,NavLinks:i.default},props:["items"]},r=(a(447),a(25)),l=Object(r.a)(n,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.default=l.exports},476:function(t,e,a){"use strict";a.r(e);var s=a(459),i=a(471),n=a(460),r=a(461);a(116),a(14),a(20),a(62),a(40);const l=/#.*$/,o=/\.(md|html)$/,p=/\/$/,h=/^[a-z]+:/i;function c(t){return decodeURI(t).replace(l,"").replace(o,"")}function u(t){return h.test(t)}function d(t){if(u(t))return t;const e=t.match(l),a=e?e[0]:"",s=c(t);return p.test(s)?t:s+".html"+a}function b(t,e,a){if(u(e))return{type:"external",path:e};a&&(e=function(t,e,a){const s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return e+t;const i=e.split("/");a&&i[i.length-1]||i.pop();const n=t.replace(/^\//,"").split("/");for(let t=0;t<n.length;t++){const e=n[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,a));const s=c(e);for(let e=0;e<t.length;e++)if(c(t[e].regularPath)===s)return Object.assign({},t[e],{type:"page",path:d(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function m(t,e,a,s){const{pages:i,themeConfig:n}=a,r=s&&n.locales&&n.locales[s]||n;if("auto"===(t.frontmatter.sidebar||r.sidebar||n.sidebar))return j(t);const l=r.sidebar||n.sidebar;if(l){const{base:a,config:s}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const s in e)if(0===(a=t,/(\.html|\/)$/.test(a)?a:a+"/").indexOf(encodeURI(s)))return{base:s,config:e[s]};var a;return{}}(e,l);return"auto"===s?j(t):s?s.map(t=>function t(e,a,s,i=1){if("string"==typeof e)return b(a,e,s);if(Array.isArray(e))return Object.assign(b(a,e[0],s),{title:e[1]});{const n=e.children||[];return 0===n.length&&e.path?Object.assign(b(a,e.path,s),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:n.map(e=>t(e,a,s,i+1)),collapsable:!1!==e.collapsable}}}(t,i,a)):[]}return[]}function j(t){const e=function(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}var f={name:"Layout",components:{Home:s.default,Page:n.default,Sidebar:r.default,Navbar:i.default},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return m(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},g=a(25),v=Object(g.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=v.exports}}]);