(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{543:function(t,_,v){"use strict";v.r(_);var r=v(25),a=Object(r.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"markdown导出pdf方法优劣分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#markdown导出pdf方法优劣分析"}},[t._v("#")]),t._v(" markdown导出pdf方法优劣分析")]),t._v(" "),_("br"),t._v(" "),_("p",[_("code",[t._v("md2pdf")]),t._v(" "),_("code",[t._v("pandoc")]),t._v(" "),_("code",[t._v("Typora")]),t._v(" "),_("code",[t._v("MarkText")]),t._v(" "),_("code",[t._v("PDFPatcher")]),t._v("  --20220903")]),t._v(" "),_("blockquote",[_("p",[_("a",{attrs:{href:"https://xushufa.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("xushufa"),_("OutboundLink")],1),t._v(" "),_("a",{attrs:{href:"https://gitlab.com/xuyq123/mynotes",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitlab"),_("OutboundLink")],1),t._v(" "),_("a",{attrs:{href:"https://gitee.com/xy180/MyNotes",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee"),_("OutboundLink")],1)])]),t._v(" "),_("h2",{attrs:{id:"_1-概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-概述"}},[t._v("#")]),t._v(" 1 概述")]),t._v(" "),_("h3",{attrs:{id:"_1-1-目标"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-目标"}},[t._v("#")]),t._v(" 1.1 目标")]),t._v(" "),_("p",[t._v("markdown导出pdf期望达到的理想效果：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("内容不丢失")]),t._v("，标题、正文、高亮、代码块等内容不会丢失，即使是代码块也能无损导出。")]),t._v(" "),_("li",[_("strong",[t._v("格式不变形")]),t._v("，字体、样式与markdown看到的基本一致。")]),t._v(" "),_("li",[_("strong",[t._v("有图片")]),t._v("，markdown的图片不论是网络链接还是base64都能正常导出。")]),t._v(" "),_("li",[_("strong",[t._v("有书签")]),t._v("，markdown的一二三四级标题就是pdf的书签。")]),t._v(" "),_("li",[_("strong",[t._v("操作简单")]),t._v("，一键导出，高效方便。")])]),t._v(" "),_("hr"),t._v(" "),_("h3",{attrs:{id:"_1-2-说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-说明"}},[t._v("#")]),t._v(" 1.2 说明")]),t._v(" "),_("p",[t._v("使用了"),_("code",[t._v("Typora")]),t._v("，"),_("code",[t._v("作业部落")]),t._v("，"),_("code",[t._v("小书匠")]),t._v("，"),_("code",[t._v("马克飞象")]),t._v("，"),_("code",[t._v("浏览器打印")]),t._v("，"),_("code",[t._v("pandoc")]),t._v("，"),_("code",[t._v("xelatex")]),t._v("，"),_("code",[t._v("wkhtmltopdf")]),t._v("，"),_("code",[t._v("vscode")]),t._v("，"),_("code",[t._v("MarkText")]),t._v("等等许多方法将markdown导出pdf。有的收费，有的加水印，有的丢文字，有的丢图片，最后发现：")]),t._v(" "),_("ul",[_("li",[t._v("操作markdown文件，使用"),_("code",[t._v("Typora")]),t._v("最方便。")]),t._v(" "),_("li",[t._v("导出markdown为pdf，"),_("code",[t._v("MarkText")]),t._v("搭配"),_("code",[t._v("PDFPatcher")]),t._v("最优秀。")])]),t._v(" "),_("hr"),t._v(" "),_("h3",{attrs:{id:"_1-3-相关"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-相关"}},[t._v("#")]),t._v(" 1.3 相关")]),t._v(" "),_("p",[t._v("markdown相关操作，格式转换与项目布署。")]),t._v(" "),_("blockquote",[_("p",[t._v("html转markdown文件")])]),t._v(" "),_("ul",[_("li",[t._v("pandoc 转化  "),_("code",[t._v("pandoc -f html -t markdown -o 202010.md 202110.html")])]),t._v(" "),_("li",[t._v("turndown "),_("code",[t._v("Convert HTML into Markdown with JavaScript.")]),t._v("  https://mixmark-io.github.io/turndown/")])]),t._v(" "),_("blockquote",[_("p",[t._v("markdown文件部署项目")])]),t._v(" "),_("ul",[_("li",[t._v("gitlab、github、gitee布署"),_("code",[t._v("mkdocs")]),t._v("主题仓库")]),t._v(" "),_("li",[t._v("git平台"),_("code",[t._v("docsify")]),t._v("布署markdown文件")]),t._v(" "),_("li",[_("code",[t._v("vuepress")]),t._v("构建项目 https://xushufa.cn")]),t._v(" "),_("li",[_("code",[t._v("gitbook")]),t._v("部署博客  https://scott180.github.io/gitbook-blog")])]),t._v(" "),_("h2",{attrs:{id:"_2-工具"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-工具"}},[t._v("#")]),t._v(" 2 工具")]),t._v(" "),_("h3",{attrs:{id:"_2-1-typora"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-typora"}},[t._v("#")]),t._v(" 2.1 Typora")]),t._v(" "),_("p",[t._v("Typora可以说是markdown的最佳拍档，可是免费beta版之后，1.0版Typora开始收费。"),_("br"),t._v("\n最后一个免费版本是0.11.8，安装或使用这个版本会提示软件过期，不可使用。"),_("br"),t._v("\n但低版本可以正常使用Typora，如0.9.86版。"),_("br")]),t._v(" "),_("p",[_("strong",[t._v("Typora + pandoc 可以将markdown导出pdf，可惜导出文件会丢失图片。")]),_("br"),t._v(" "),_("strong",[t._v("Typora导出html，再通过浏览器导出pdf，不丢失图片，但是文档格式稍有变化，且没有书签。")]),_("br")]),t._v(" "),_("p",[t._v("Typora + pandoc 导出pdf时，可以将图片链接换成base64编码，这样不会丢失图片。"),_("br"),t._v("\n但是这样做文档内容会特别大，一张图片的base64编码可能有几万字。"),_("br"),t._v("\n且文档的base64图片编码多了，使用Typora报错：该文件过大，因此无法在Typora中呈现。"),_("br")]),t._v(" "),_("blockquote",[_("p",[t._v("Typora导出pdf\n"),_("img",{attrs:{src:"https://bitbucket.org/xu12345/document/raw/114a5f5c292cc412cd46304dc1d20cfda7c7a7f8/imgs/md2pdf/1Typora.jpg",alt:"1Typora"}})])]),t._v(" "),_("hr"),t._v(" "),_("h3",{attrs:{id:"_2-2-pandoc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-pandoc"}},[t._v("#")]),t._v(" 2.2 pandoc")]),t._v(" "),_("p",[t._v("Pandoc 是一个由 John MacFarlane 开发的通用文档转换工具，可以支持大量标记语言之间的格式转换，例如 Markdown 、Microsoft Word、PowerPoint、 Jupyter Notebook、HTML、PDF、LaTeX、Wiki、EPUB 格式之间的相互转换。官方称之为该领域中的“瑞士军刀”。"),_("br"),t._v("\n参考："),_("br"),t._v("\nhttps://blog.csdn.net/horses/article/details/108536784 "),_("br"),t._v("\nhttps://github.com/jgm/pandoc/releases/tag/2.19.2 "),_("br")]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("md->docx->PDF")]),t._v(" "),_("p",[t._v("pandoc -s example.md -o target.docx --reference-doc reference.docx "),_("br"),t._v("\nhttps://www.trickyedecay.me/2020/08/04/use-pandoc-to-convert-markdown-to-docx/ "),_("br")]),t._v(" "),_("hr"),t._v(" "),_("p",[_("code",[t._v("pandoc text.md -o text.docx")]),t._v(" "),_("br"),t._v(" "),_("code",[t._v("pandoc 无为徐生.md -o 无为徐生_pandoc.docx")]),t._v(" "),_("br")]),t._v(" "),_("p",[t._v("https://www.jianshu.com/p/52cbee87a45a "),_("br")]),t._v(" "),_("p",[t._v("样式相当失真，导出的pdf文件与md文件差异较大。 "),_("br")]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("Pandoc+TeXLive实现Markdown转PDF "),_("br"),t._v("\nhttps://zhuanlan.zhihu.com/p/35813989 "),_("br"),t._v("\nhttps://www.jianshu.com/p/1d02fc5121c2 "),_("br")]),t._v(" "),_("p",[_("code",[t._v("$ fc-list :lang=zh")])]),t._v(" "),_("p",[_("code",[t._v("pandoc 无为徐生.md -o 无为徐生_xelatex.pdf --pdf-engine=xelatex -V CJKmainfont='KaiTi'")])]),t._v(" "),_("p",[t._v("《无为徐生_xelatex.pdf》丢失图片，没有书签，格式变化。")]),t._v(" "),_("hr"),t._v(" "),_("h3",{attrs:{id:"_2-3-wkhtmltopdf"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-wkhtmltopdf"}},[t._v("#")]),t._v(" 2.3 wkhtmltopdf")]),t._v(" "),_("p",[_("code",[t._v('pandoc --pdf-engine=wkhtmltopdf --metadata pagetitle="无为徐生" 无为徐生.md -o 无为徐生_wkhtmltopdf.pdf')]),t._v(" "),_("br"),t._v("\n《无为徐生_wkhtmltopdf.pdf》样式比较失真。 "),_("br")]),t._v(" "),_("p",[t._v("https://cloud.tencent.com/developer/article/1740818?from=article.detail.1854429 "),_("br"),t._v("\nhttps://cloud.tencent.com/developer/article/1854429 "),_("br")]),t._v(" "),_("hr"),t._v(" "),_("h3",{attrs:{id:"_2-4-vscode"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-vscode"}},[t._v("#")]),t._v(" 2.4 vscode")]),t._v(" "),_("p",[t._v("在"),_("code",[t._v("Visual Studio Code")]),t._v("安装"),_("code",[t._v("Markdown Preview Enhanced")]),t._v(" 插件 "),_("br")]),t._v(" "),_("p",[t._v("vscode中markdown导出pdf "),_("br"),t._v("\nhttps://blog.csdn.net/weixin_43352942/article/details/89950779 "),_("br"),t._v("\nhttps://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/toc "),_("br")]),t._v(" "),_("p",[t._v("C:\\Users\\Administrator\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe "),_("br")]),t._v(" "),_("p",[t._v("《无为徐生_vscode.pdf》丢失图片，没有书签，格式变化。 "),_("br")]),t._v(" "),_("blockquote",[_("p",[t._v("vscode导出pdf\n"),_("img",{attrs:{src:"https://bitbucket.org/xu12345/document/raw/114a5f5c292cc412cd46304dc1d20cfda7c7a7f8/imgs/md2pdf/2vscode.jpg",alt:"2vscode"}})])]),t._v(" "),_("hr"),t._v(" "),_("h3",{attrs:{id:"_2-5-marktext"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-marktext"}},[t._v("#")]),t._v(" 2.5 MarkText")]),t._v(" "),_("p",[t._v("MarkText是一个简单开源的 Markdown 编辑器。 https://github.com/marktext/marktext "),_("br"),t._v("\n导出的pdf文件相当不错。 "),_("br")]),t._v(" "),_("p",[t._v("《无为徐生_MarkText.pdf》文件样式内容图片基本没有变化，很好。 "),_("br"),t._v("\n就是没有书签，但可以使用"),_("code",[t._v("PDFPatcher PDF补丁丁")]),t._v(" 为pdf文件加上书签。 "),_("br")]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("工具箱--处理PDF文件--自动生成书签 "),_("br"),t._v("\n《无为徐生_MarkText.xml》即为pdf书签 "),_("br")]),t._v(" "),_("p",[t._v("打开文件--导入书签--保存PDF文件 "),_("br"),t._v("\n《无为徐生_MarkText_PDFPatcher.pdf》  内容不丢失 | 格式不变形 | 有图片 | 有书签 | 操作简单   good "),_("br")]),t._v(" "),_("hr"),t._v(" "),_("blockquote",[_("p",[t._v("MarkText导出pdf\n"),_("img",{attrs:{src:"https://bitbucket.org/xu12345/document/raw/114a5f5c292cc412cd46304dc1d20cfda7c7a7f8/imgs/md2pdf/3MarkText.jpg",alt:"3MarkText"}})])]),t._v(" "),_("hr"),t._v(" "),_("blockquote",[_("p",[t._v("PDFPatcher生成书签\n"),_("img",{attrs:{src:"https://bitbucket.org/xu12345/document/raw/114a5f5c292cc412cd46304dc1d20cfda7c7a7f8/imgs/md2pdf/4PDFPatcher.jpg",alt:"4PDFPatcher"}})])]),t._v(" "),_("blockquote",[_("p",[t._v("PDFPatcher导入书签\n"),_("img",{attrs:{src:"https://bitbucket.org/xu12345/document/raw/114a5f5c292cc412cd46304dc1d20cfda7c7a7f8/imgs/md2pdf/5PDFPatcher.jpg",alt:"5PDFPatcher"}})])]),t._v(" "),_("blockquote",[_("p",[t._v("PDF书签打开\n"),_("img",{attrs:{src:"https://bitbucket.org/xu12345/document/raw/114a5f5c292cc412cd46304dc1d20cfda7c7a7f8/imgs/md2pdf/6PDFPatcher.jpg",alt:"6PDFPatcher"}})])]),t._v(" "),_("hr"),t._v(" "),_("h2",{attrs:{id:"_3-评分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-评分"}},[t._v("#")]),t._v(" 3 评分")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("评分")]),t._v(" "),_("th",[t._v("内容不丢失")]),t._v(" "),_("th",[t._v("格式不变形")]),t._v(" "),_("th",[t._v("有图片")]),t._v(" "),_("th",[t._v("有书签")]),t._v(" "),_("th",[t._v("操作简单")]),t._v(" "),_("th",[t._v("得分")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Typora")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("×")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("★★★★")])]),t._v(" "),_("tr",[_("td",[t._v("pandoc")]),t._v(" "),_("td",[t._v("○")]),t._v(" "),_("td",[t._v("○")]),t._v(" "),_("td",[t._v("○")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("○")]),t._v(" "),_("td",[t._v("★★★")])]),t._v(" "),_("tr",[_("td",[t._v("wkhtmltopdf")]),t._v(" "),_("td",[t._v("○")]),t._v(" "),_("td",[t._v("○")]),t._v(" "),_("td",[t._v("○")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("○")]),t._v(" "),_("td",[t._v("★★★")])]),t._v(" "),_("tr",[_("td",[t._v("vscode")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("○")]),t._v(" "),_("td",[t._v("×")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("×")]),t._v(" "),_("td",[t._v("★★☆")])]),t._v(" "),_("tr",[_("td",[t._v("MarkText")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("○")]),t._v(" "),_("td",[t._v("√")]),t._v(" "),_("td",[t._v("★★★★☆")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("网址")]),t._v(" "),_("th",[t._v("官网")]),t._v(" "),_("th",[t._v("下载")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Typora")]),t._v(" "),_("td",[t._v("https://typora.io/")]),t._v(" "),_("td",[t._v("https://typoraio.cn/")])]),t._v(" "),_("tr",[_("td",[t._v("marktext")]),t._v(" "),_("td",[t._v("https://marktext.app/")]),t._v(" "),_("td",[t._v("https://github.com/marktext/marktext")])]),t._v(" "),_("tr",[_("td",[t._v("PDFPatcher")]),t._v(" "),_("td",[t._v("https://www.cnblogs.com/pdfpatcher/")]),t._v(" "),_("td",[t._v("https://github.com/wmjordan/PDFPatcher")])])])]),t._v(" "),_("p",[t._v("综上，"),_("code",[t._v("MarkText")]),t._v("四星半夺得魁首，"),_("code",[t._v("Typora")]),t._v("屈居亚席。总之： "),_("br"),t._v("\n操作markdown文件，使用"),_("code",[t._v("Typora")]),t._v("最方便。 "),_("br"),t._v("\n导出markdown为pdf，"),_("code",[t._v("MarkText")]),t._v("搭配"),_("code",[t._v("PDFPatcher")]),t._v("最优秀。 "),_("br")])])}),[],!1,null,null,null);_.default=a.exports}}]);