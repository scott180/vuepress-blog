(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{457:function(t,i,n){},470:function(t,i,n){"use strict";n(457)},481:function(t,i,n){"use strict";n.r(i);var a={name:"Valine",mounted(){n.e(114).then(n.t.bind(null,475,7)).then(t=>{const i=t.default;if("undefined"!=typeof window){window.location.hostname.includes("localhost");document.getElementsByClassName("leancloud-visitors")[0].id=window.location.pathname,this.window=window,window.AV=n(469),this.valine=new i,this.initValine()}})},methods:{initValine(){let t=window.location.origin+window.location.pathname;document.getElementsByClassName("leancloud-visitors")[0].id=t,this.valine.init({el:"#vcomments",appId:"In1BQCN8XdwnYBgPYnSi4r1W-gzGzoHsz",appKey:"nVqtDyPE9OClqUri8YcHyRaR",notify:!1,verify:!1,path:t,visitor:!0,avatar:"mm",placeholder:"write here"})}},watch:{$route(t,i){i.path!==t.path&&this.initValine()}}},s=(n(470),n(25)),e=Object(s.a)(a,(function(){var t=this._self._c;return t("div",{staticClass:"u-valine"},[t("span",{staticClass:"leancloud-visitors",attrs:{"data-flag-title":"blog.xushufa.cn"}},[t("span",{staticClass:"stat update-time"},[t("img",{staticClass:"icon",attrs:{src:"/update-time.png"}}),this._v(this._s(this.$page.lastUpdated)+"\n    ")]),this._v(" "),this._m(0)])])}),[function(){var t=this._self._c;return t("span",{staticClass:"stat read-count"},[t("img",{staticClass:"icon",attrs:{src:"/read-count.png"}}),this._v(" "),t("span",{staticClass:"leancloud-visitors-count"})])}],!1,null,"23bb508a",null);i.default=e.exports}}]);