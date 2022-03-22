module.exports = {
  // 页面标题
  title: '个人博客',
  // 网页描述
  description: '程序员笔记*书法练习记录',
  // base: '/vuepress-blog/',
  base: '/',
  head: [
    // 页面icon
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  // 端口号
  port: 3000,
  markdown: {
    // 代码块行号
    lineNumbers: true,
	extractHeaders: [ 'h2', 'h3', 'h4' ]
  },
  themeConfig: {
    // 所有页面自动生成侧边栏
    // sidebar: 'auto',
    // 仓库地址
    repo: 'https://github.com/scott180/vuepress-blog',
    // 仓库链接label
    repoLabel: 'Github',
    // 编辑链接
    editLinks: false,
    // 导航
    nav: [  
	  { text: '笔记',link: '/笔记/note'}, 
      { text: '数据库', link: '/数据库/mysqlNote'}, 
	  { text: '资料', link: '/资料/eclipse'}, 
	  { text: '文档', link: '/文档/古文诗词'}, 

    ],
    // 侧边栏
    sidebar: {
          '/笔记/': [{
              title: '笔记',
			  collapsable: true, // 可选的, 默认值是 true,
              sidebarDepth: 2,   // 可选的, 默认值是 1
              children: [
                {title:'note',path:'note'},
                {title:'java',path:'java'},
                {title:'gitNote',path:'gitNote'},
                {title:'linuxNote',path:'linuxNote-x'},
              ]
            }],
		  '/数据库/': [{
              title: '数据库',
			  collapsable: true, // 可选的, 默认值是 true,
              sidebarDepth: 2,   // 可选的, 默认值是 1
              children: [
                {title:'mysqlNote',path:'mysqlNote'},
                {title:'oracleNote',path:'oracleNote'},
                {title:'redis',path:'redis'},
                {title:'mongo',path:'mongo'},
                {title:'数据库隔离级别',path:'数据库隔离级别'},
                {title:'mysql开启log-bin日志',path:'mysql开启log-bin日志'},
              ]
            }],
		   '/资料/': [{
              title: '资料',
			  collapsable: true, // 可选的, 默认值是 true,
              sidebarDepth: 2,   // 可选的, 默认值是 1
              children: [
                {title:'eclipse',path:'eclipse'},
                {title:'markdown常用语法',path:'markdown常用语法'},
                {title:'gitlab、github绑定自定义域名',path:'gitlab、github绑定自定义域名'},
                {title:'git平台docsify布署markdown文件',path:'git平台docsify布署markdown文件'},
                {title:'gitlab、github、gitee布署mkdocs主题仓库',path:'gitlab、github、gitee布署mkdocs主题仓库'},
              ]
            }],
		   '/文档/': [{
              title: '文档',
			  collapsable: true, // 可选的, 默认值是 true,
              sidebarDepth: 2,   // 可选的, 默认值是 1
              children: [
                {title:'古文诗词',path:'古文诗词'},
                {title:'多宝塔碑',path:'多宝塔碑'},
                {title:'《心经》书法',path:'《心经》书法'},
                {title:'书法练习轨迹ReadMe',path:'书法练习轨迹ReadMe'},
                {title:'无为徐生',path:'无为徐生'},
              ]
            }]
        }
		 
  
  },
  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        '@vuepress': '../images/vuepress',
        '@vue': '../images/vue'
      }
    }
  }
}