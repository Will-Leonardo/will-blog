 // 将导航分离到单文件 nav.js
 const nav = require('./config/nav/')
     // 将侧边栏分离到单文件 sidebar.js
 const sidebar = require('./config/sidebar/')
     // 将插件分离到单文件 
 const plugins = require('./config/plugins/')
     // 将友情链接分离到单文件
 const friendLink = require('./config/friendLink')

 const headConf = require('./config/headConf')



 module.exports = {

    title: "Will's blog",
    description: '斯人若彩虹，遇上方知有',
    //  dest: 'public',
    base: '/will-blog/',
    head: headConf,
    theme: 'reco',
    plugins,
    themeConfig: {
        nav,
        sidebar,
        type: 'blog',
        // 博客设置
        blogConfig: {
            category: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '分类' // 默认 “分类”
            },
            tag: {
                location: 4, // 在导航栏菜单中所占的位置，默认4
                text: '标签' // 默认 “标签”
            }
        },
        friendLink,
        //  导航栏图标
        logo: '/xin.png',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 自动形成侧边导航
        subSidebar: 'auto',
        // 最后更新时间
        lastUpdated: 'Last Updated',
        // 作者
        author: 'Will',
        // 作者头像
        authorAvatar: '/xin.png',
        // 备案号
        record: 'xxxx',
        // 项目开始时间
        startYear: '2020',
        cyberSecurityLink: "",

        /**
         * 密钥 (if your blog is private)
         */

        // keyPage: {
        //   keys: ['your password'],
        //   color: '#42b983',
        //   lineColor: '#42b983'
        // },

        /**
         * valine 设置 (if you need valine comment )
         */

        // valineConfig: {
        //   appId: '...',// your appId
        //   appKey: '...', // your appKey
        // }


    },
    markdown: {
       lineNumbers: true
    }
 }