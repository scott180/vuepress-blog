module.exports = {
  // 页面标题
  title: '无为徐生',
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
	lastUpdated: '最近更新',
    // 编辑链接
    editLinks: false,
    // 导航
    nav: [  
	  { text: '主页',link: '/'}, 
	  { text: '生活', items: [
	      { text: '日常Note', link: '/生活/随笔/日常Note'}, 
	      { text: '健身与学习', link: '/生活/随笔/健身与学习'}, 
	      { text: '如何练好书法', link: '/生活/文档/如何练好书法'}, 
	      { text: '安徽电信免费流量获取方法', link: '/生活/文档/安徽电信免费流量获取方法'}, 
        ]
      },
	  { text: '编程', items: [
          { text: 'javaNote', link: '/编程/java/javaNote'}, 
          { text: '排序算法', link: '/编程/java/排序算法'}, 
          { text: 'gitNote', link: '/编程/运维/gitNote'}, 
          { text: 'linuxNote', link: '/编程/运维/linuxNote-x'}, 
          { text: 'vuepress构建项目', link: '/编程/运维/vuepress构建项目'}, 
          { text: 'mysqlNote', link: '/编程/数据库/mysqlNote'}, 
          { text: 'oracleNote', link: '/编程/数据库/oracleNote'}, 
          { text: 'javaScript笔记', link: '/编程/资料/javaScript笔记'}, 
          { text: '本地安装zookeeper', link: '/编程/资料/本地安装zookeeper'}, 
        ]
      },
	  { text: '书法', items: [
          { text: '灵飞经', link: '/书法/书法/灵飞经'}, 
          { text: '多宝塔碑', link: '/书法/书法/多宝塔碑'}, 
          { text: '徐书法', link: '/书法/练习/徐书法'}, 
          { text: '无为徐生', link: '/书法/练习/无为徐生'}, 
          { text: '古文诗词', link: '/书法/练习/古文诗词'}, 
          { text: '书法练习轨迹', link: '/书法/练习/书法练习轨迹ReadMe'}, 
          { text: '有感之杂说', link: '/书法/轨迹/有感之杂说'}, 
        ]
      },
	  { text: '关于我', link: '/关于我'},

    ],
    // 侧边栏
    sidebar: {
          '/生活/': [
		   {
              title: '随笔',
			  collapsable: true, // 可选的, 默认值是 true,
              sidebarDepth: 2,   // 可选的, 默认值是 1
              children: [
                {title:'日常Note',path:'随笔/日常Note'},
                {title:'健身与学习',path:'随笔/健身与学习'},
                {title:'二十四式太极拳',path:'随笔/二十四式太极拳'},
                {title:'短期远行必备物品',path:'随笔/短期远行必备物品'},
              ]					
            },
			{
			  title: '文档',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{title:'如何练好书法',path:'文档/如何练好书法'},
				{title:'安徽电信免费流量获取方法',path:'文档/安徽电信免费流量获取方法'},
				{title:'安徽电信-流量来啦-每日必点',path:'文档/安徽电信-流量来啦-每日必点'},
			  ]
		    }
		  ],          
          '/编程/': [
			{
			  title: 'java',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{title:'java介绍',path:'java/java介绍'},
				{title:'java资料集',path:'java/java资料集'},
				{title:'tomcat笔记',path:'java/tomcat笔记'},
				{title:'eclipse笔记',path:'java/eclipse笔记'},
				{title:'mybatis笔记',path:'java/mybatis笔记'},
				{title:'springmvc笔记',path:'java/springmvc笔记'},
				{title:'servlet-jsp学习',path:'java/servlet-jsp学习'},
				{title:'SpringCloud入门',path:'java/SpringCloud入门'},
				{title:'javaNote',path:'java/javaNote'},
				{title:'排序算法',path:'java/排序算法'},
				{title:'布隆过滤器',path:'java/布隆过滤器'},
			  ]					
			},
			{
			  title: '运维',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
			  	{title:'docker',path:'运维/docker'},
				{title:'gitNote',path:'运维/gitNote'},
				{title:'linuxNote',path:'运维/linuxNote-x'},
				{title:'nginx笔记',path:'运维/nginx笔记'},
				{title:'shell语法',path:'运维/shell语法'},
				{title:'定时执行脚本',path:'运维/定时执行脚本'},
				{title:'vuepress构建项目',path:'运维/vuepress构建项目'},
				{title:'gitlab、github绑定自定义域名',path:'运维/gitlab、github绑定自定义域名'},
				{title:'git平台docsify布署markdown文件',path:'运维/git平台docsify布署markdown文件'},
				{title:'gitlab、github、gitee布署mkdocs主题仓库',path:'运维/gitlab、github、gitee布署mkdocs主题仓库'},
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
			},
			{
			  title: '资料',
			  collapsable: true, // 可选的, 默认值是 true,
			  sidebarDepth: 2,   // 可选的, 默认值是 1
			  children: [
				{title:'jquery笔记',path:'资料/jquery笔记'},
				{title:'javaScript笔记',path:'资料/javaScript笔记'},
				{title:'二进制数负数',path:'资料/二进制数负数'},
				{title:'markdown常用语法',path:'资料/markdown常用语法'},
				{title:'window安装consul',path:'资料/window安装consul'},
				{title:'window安装RabbitMQ',path:'资料/window安装RabbitMQ'},
				{title:'本地安装kafka',path:'资料/本地安装kafka'},
				{title:'本地安装zookeeper',path:'资料/本地安装zookeeper'},
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
				{ title: '有感之杂说', path: '轨迹/有感之杂说'},
				{ title: '书法练习轨迹remark', path: '轨迹/书法练习轨迹remark'},
				{ title: '书法练习轨迹--明月几时有-无图版', path: '轨迹/书法练习轨迹--明月几时有-无图版'}
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
      description: '生活随笔-编程笔记-书法练习轨迹',
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