module.exports = {
  // 页面标题
  title: '无为徐生',
  lang: 'zh-CN',
  // 网页描述
  description: '程序员笔记*书法练习轨迹',
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
    sidebar: 'auto',
    // 仓库地址
    // repo: 'https://github.com/scott180/vuepress-blog',
    // 仓库链接label
    // repoLabel: 'Github',
	lastUpdated: '更新时间',
    // 编辑链接
    editLinks: false,
    // 导航
    nav: [  
	  { text: 'home',link: '/'}, 
	  { text: '资料',link: '/资料/笔记/note'}, 
	  { text: 'java', link: '/java/资料/javaNote'}, 
	  { text: '书法', link: '/书法/练习/书法练习轨迹ReadMe'}, 
	  { text: '关于我', link: '/关于我'},

    ],
    // 侧边栏
    sidebar: {
          '/资料/': [
		   {
              title: '笔记',
			  collapsable: true, // 可选的, 默认值是 true,
              sidebarDepth: 2,   // 可选的, 默认值是 1
              children: [
                {title:'linuxNote',path:'笔记/linuxNote-x'},
				{title:'nginx笔记',path:'笔记/nginx笔记'},
				{title:'gitNote',path:'笔记/gitNote'},
				{title:'docker',path:'笔记/docker'},
				{title:'note',path:'笔记/note'},
              ]					
            },
			{
			  title: '文档',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{title:'本地安装kafka',path:'文档/本地安装kafka'},
				{title:'本地安装zookeeper',path:'文档/本地安装zookeeper'},
				{title:'markdown常用语法',path:'文档/markdown常用语法'},
				{title:'vuepress构建项目',path:'文档/vuepress构建项目'},
				{title:'gitlab、github绑定自定义域名',path:'文档/gitlab、github绑定自定义域名'},
				{title:'git平台docsify布署markdown文件',path:'文档/git平台docsify布署markdown文件'},
				{title:'gitlab、github、gitee布署mkdocs主题仓库',path:'文档/gitlab、github、gitee布署mkdocs主题仓库'},
				
			  ]
		    }
		  ],
          '/java/': [
			{
			  title: '教程',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{title:'java介绍',path:'教程/java介绍'},
				{title:'jquery笔记',path:'教程/jquery笔记'},
				{title:'eclipse笔记',path:'教程/eclipse笔记'},
				{title:'mybatis笔记',path:'教程/mybatis笔记'},
				{title:'springmvc笔记',path:'教程/springmvc笔记'},
				{title:'servlet-jsp学习',path:'教程/servlet-jsp学习'},
				{title:'SpringCloud入门',path:'教程/SpringCloud入门'},
			  ]					
			},
			{
			  title: '资料',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{title:'javaNote',path:'资料/javaNote'},
				{title:'排序算法',path:'资料/排序算法'},
				{title:'java资料集',path:'资料/java资料集'},
				{title:'布隆过滤器',path:'资料/布隆过滤器'},
			  ]					
			},
			{
			  title: '数据库',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{title:'mysqlNote',path:'数据库/mysqlNote'},
				{title:'oracleNote',path:'数据库/oracleNote'},
				{title:'redis',path:'数据库/redis'},
				{title:'mongo',path:'数据库/mongo'},
				{title:'数据库隔离级别',path:'数据库/数据库隔离级别'},
				{title:'mysql开启log-bin日志',path:'数据库/mysql开启log-bin日志'},
			  ]
			}
			
		   ],
		   '/书法/': [
			{
			  title: '书法',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{ title: '书法名帖', path: '书法/书法名帖'}, 
				{ title: '灵飞经', path: '书法/灵飞经'},
				{ title: '多宝塔碑', path: '书法/多宝塔碑'},
				{ title: '《心经》书法', path: '书法/《心经》书法'},
				{ title: '《兜沙经》书法', path: '书法/《兜沙经》书法'}, 
				{ title: '文徵明小楷《千字文》', path: '书法/文徵明小楷《千字文》'},
				{ title: '文徵明小楷《草堂十志》', path: '书法/文徵明小楷《草堂十志》'}
	
			  ]					
			},
			{
			  title: '练习',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{ title: '徐书法', path: '练习/徐书法'}, 
				{ title: '无为徐生', path: '练习/无为徐生'},
				{ title: '古文诗词', path: '练习/古文诗词'}, 
				{ title: '笔名汉字频率分析', path: '练习/笔名汉字频率分析'},
				{ title: '书法练习轨迹ReadMe', path: '练习/书法练习轨迹ReadMe'},
				{ title: '书法练习轨迹--明月几时有', path: '练习/书法练习轨迹--明月几时有'}
			  ]					
			},
			{
			  title: '轨迹',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{ title: '自序', path: '轨迹/自序'}, 
				{ title: '诗词杂句', path: '轨迹/诗词杂句'}, 
				{ title: '有感之杂说', path: '轨迹/有感之杂说'}
			  ]
			}
		    ]
		
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
  },
  locales: {
    '/': {
      lang: 'zh-CN',
	  title: '无为徐生',
      description: '程序员笔记*书法练习轨迹',
    }
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
        }
      }
    ]
  ]
}