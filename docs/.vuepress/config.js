module.exports = {
  // 页面标题
  title: '个人博客',
  // 网页描述
  description: '程序员笔记*书法练习记录',
  // base: '/vuepress-blog/',
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
    // repo: 'https://github.com/scott180/vuepress-blog',
    // 仓库链接label
    // repoLabel: 'Github',
    // 编辑链接
    editLinks: false,
    // 导航
    nav: [  
	  { text: 'home',link: '/'}, 
	  { text: '笔记',link: '/笔记/note'}, 
      { text: '数据库', link: '/数据库/mysqlNote'}, 
	  { text: 'java', link: '/java/资料/javaNote'}, 
	  { text: '书法', link: '/书法/古文诗词'}, 
	  { text: '关于我', link: '/关于我'},

    ],
    // 侧边栏
    sidebar: {
          '/笔记/': [
		  {
              title: '笔记',
			  collapsable: true, // 可选的, 默认值是 true,
              sidebarDepth: 2,   // 可选的, 默认值是 1
              children: [
                {title:'note',path:'note'},
                {title:'gitNote',path:'gitNote'},
                {title:'linuxNote',path:'linuxNote-x'},
				
              ]					
            },
			{
			  title: '资料',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{title:'eclipse',path:'资料/eclipse'},
				{title:'docker',path:'资料/docker'},
				{title:'nginx笔记',path:'资料/nginx笔记'},
				{title:'markdown常用语法',path:'资料/markdown常用语法'},
				{title:'vuepress构建项目',path:'资料/vuepress构建项目'},
				{title:'gitlab、github绑定自定义域名',path:'资料/gitlab、github绑定自定义域名'},
				{title:'git平台docsify布署markdown文件',path:'资料/git平台docsify布署markdown文件'},
				{title:'gitlab、github、gitee布署mkdocs主题仓库',path:'资料/gitlab、github、gitee布署mkdocs主题仓库'},
				
			  ]
		   }
		  ],
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
          '/java/': [
			  {
				  title: '教程',
				  collapsable: true, // 可选的, 默认值是 true,
				  sidebarDepth: 2,   // 可选的, 默认值是 1
				  children: [
					{title:'java介绍',path:'教程/java介绍'},
					{title:'jquery笔记',path:'教程/jquery笔记'},
					{title:'mybatis笔记',path:'教程/mybatis笔记'},
					{title:'springmvc笔记',path:'教程/springmvc笔记'},
					{title:'servlet-jsp课程学习',path:'教程/servlet-jsp课程学习'},
				  ]					
				},
				{
				  title: '资料',
				  collapsable: true, // 可选的, 默认值是 true,
				  sidebarDepth: 2,   // 可选的, 默认值是 1
				  children: [
					{title:'javaNote',path:'资料/javaNote'},
					{title:'java资料集',path:'资料/java资料集'},
					{title:'布隆过滤器',path:'资料/布隆过滤器'},
				  ]					
				}
			
		   ],
		   '/书法/': [{
              title: '书法',
			  collapsable: true, // 可选的, 默认值是 true,
              sidebarDepth: 2,   // 可选的, 默认值是 1
              children: [
                {title:'古文诗词',path:'古文诗词'},
                {title:'多宝塔碑',path:'多宝塔碑'},
                {title:'《心经》书法',path:'《心经》书法'},
                {title:'书法练习轨迹ReadMe',path:'书法练习轨迹ReadMe'},
                {title:'无为徐生',path:'无为徐生'},
                {title:'徐书法',path:'徐书法'},
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