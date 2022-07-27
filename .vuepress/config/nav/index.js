
/**
 * @description 顶部nav导航栏
 */

module.exports = [
    { text: '主页', link: '/', icon: 'reco-home' },
    {
        text: '前端',
        // link: '/docs/note/',
        icon: 'reco-coding',
        items: [{
            text: '学习笔记',
            link: '/docs/note/',
            icon: 'reco-suggestion'
        }, {
            text: '阅读书籍',
            link: '/docs/books/',
            icon: 'reco-npm'
        }, {
            text: '质量文章',
            link: '/docs/article/',
            icon: 'reco-api'
        },{
            text: '日常笔记',
            link: '/docs/dailyNotes/',
            icon: 'reco-suggestion'
        }]
    },
    {
        text: '部分项目',
        icon: 'reco-message',
        link: '/docs/protests/',
        items: [
            { text: '面试指南', link: 'https://github.com/zhenzhencai/FontEndInterview', icon: 'reco-github' },
            { text: 'Vue轮子', link: '/docs/protests/VueUI.md', icon: 'reco-github' },
        ]
    },
    { text: '时间线', link: '/timeline/', icon: 'reco-date' },
    { text: '题目汇总', link: '/docs/disorder/m1.md', icon: 'reco-coding' },
    {
        text: '关于我',
        icon: 'reco-message',
        items: [
            { text: 'Gitee', link: 'https://gitee.com/willwong', icon: 'reco-mayun' },
            { text: 'GitHub', link: 'https://github.com/wangliangxin', icon: 'reco-github' },
            { text: 'QQ', link: 'http://wpa.qq.com/msgrd?v=3&uin=1418580404&site=qq&menu=yes', icon: 'reco-qq' }
        ]
    }
]