module.exports = {
  // 页面标题
  title: '个人博客',
  // 网页描述
  description: '程序员笔记*书法练习记录',
  base: '/vuepress-blog/',
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
    repo: 'https://github.com/scott180/vuepress-blog',
    // 仓库链接label
    repoLabel: 'Github',
    // 编辑链接
    editLinks: false,
    // 导航
    nav: [
	  	  
	  { text: '笔记',
	   items: [
          { text: 'note', link: '/笔记/note'}, 
          { text: 'java', link: '/笔记/java'}, 
          { text: 'gitNote', link: '/笔记/gitNote'}, 
          { text: 'linuxNote', link: '/笔记/linuxNote-x'}
        ]
      },
      { text: '数据库', items: [
          { text: 'mysqlNote', link: '/数据库/mysqlNote'}, 
          { text: 'oracleNote', link: '/数据库/oracleNote'}, 
          { text: '数据库隔离级别', link: '/数据库/数据库隔离级别'}, 
          { text: 'mysql开启log-bin日志', link: '/数据库/mysql开启log-bin日志'}
        ]
      },
	  { text: '资料', items: [
          { text: 'eclipse', link: '/资料/eclipse'}, 
          { text: 'docker', link: '/资料/docker'}, 
          { text: 'markdown常用语法', link: '/资料/markdown常用语法'}, 
          { text: 'gitlab、github绑定自定义域名', link: '/资料/gitlab、github绑定自定义域名'}, 
          { text: 'git平台docsify布署markdown文件', link: '/资料/git平台docsify布署markdown文件'}, 
          { text: 'gitlab、github、gitee布署mkdocs主题仓库', link: '/资料/gitlab、github、gitee布署mkdocs主题仓库'}
        ]
      },
	  { text: '文档', items: [
          { text: '古文诗词', link: '/文档/古文诗词'}, 
          { text: '多宝塔碑', link: '/文档/多宝塔碑'}, 
          { text: '《心经》书法', link: '/文档/《心经》书法'}, 
          { text: '书法练习轨迹ReadMe', link: '/文档/书法练习轨迹ReadMe'}, 
          { text: '无为徐生', link: '/文档/无为徐生'}
        ]
      }

  ]
  
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