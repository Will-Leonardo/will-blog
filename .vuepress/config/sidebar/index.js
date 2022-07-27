/**
 * @description 侧边导航栏，依据路由配置子条目
 */
module.exports = {
    "/docs/note/": [{
            title: '前言',
            children: [
                '/docs/note/', // 不写具体文件名，表示 README.md
                '/docs/note/r1'
            ]
        },
        {
            title: '基础',
            collapsable: true,
            children: [{
                title: '1. 小程序01',
                path: '/docs/note/m1',
            }, {
                title: '2. 小程序02',
                path: '/docs/note/m2',
            }, {
                title: '3. git操作',
                path: '/docs/note/m3',
            }, {
                title: '4. element-ui',
                path: '/docs/note/m4',
            }, {
                title: '5. HTML',
                path: '/docs/note/m5',
            }, {
                title: '6. CSS ',
                path: '/docs/note/m6',
            }]
        },
        {
            title: '进阶',
            collapsable: true,
            children: [{
                    title: '1. 前端项目部署',
                    path: '/docs/note/n2-1',
                    // collapsable: false, // 可选的, 默认值是 true,
                    // sidebarDepth: 1, // 可选的, 默认值是 1
                    // children: [
                    //     '/'
                    // ]
                }, {
                    title: '2. driver.js库的使用',
                    path: '/docs/note/n2-2'
                },
                {
                    title: '3. 前端性能优化',
                    path: '/docs/note/n2-3'
                }, {
                    title: '4. React.js 入门',
                    path: '/docs/note/n2-4'
                },
                {
                    title: '4. js-cookie ',
                    path: '/docs/note/n2-5'
                }
            ]
        },
        {
            title: '高阶',
            collapsable: true,
            children: [
                '/docs/note/n3',
            ]
        },
        {
            title: '其他',
            collapsable: true,
            children: [{
                    title: '1. 毕业设计',
                    path: '/docs/note/o1'
                }, {
                    title: '2. vuepress博客',
                    path: '/docs/note/o2'
                }

            ]
        }
    ],

    // '/docs/protests/': [{
    //         title: '1, 数据中台',
    //         path: '/docs/protests/'
    //     }

    // ],

    '/docs/books/': [{
            title: '1, 《css揭秘》',
            path: '/docs/books/'
        }, {
            title: '2,《网络是怎么连接的》',
            path: '/docs/books/b2'
        }, {
            title: '3,《React 进阶之路》 ',
            path: '/docs/books/b3'
        }, {
            title: '4,《JavaScript 高级程序设计》 ',
            path: '/docs/books/b4'
        }

    ],
    '/docs/article/': [
    {
        title: '1, 质量文章汇总',
        path: '/docs/article/质量文章.md'
    },
    {
        title: '2, Web 用户体验设计提升指南',
        path: '/docs/article/'
    }, {
        title: '3, 手把手教你写一个脚手架',
        path: '/docs/article/a1'
    }],
    '/docs/dailyNotes/': [{
        title: '1, README.md',
        path: '/docs/dailyNotes/'
    },{
        title: '1. 21-10-07',
        path: '/docs/dailyNotes/21-10-07.md'
    }, {
        title: '2. 21-10-17',
        path: '/docs/dailyNotes/21-10-17.md'
    }, {
        title: '3. 21-10-18',
        path: '/docs/dailyNotes/21-10-18.md'
    }, {
        title: '4. 21-10-28',
        path: '/docs/dailyNotes/21-10-28.md'
    }, {
        title: '5. 21-11-01',
        path: '/docs/dailyNotes/21-11-01.md'
    }, {
        title: '6. 21-11-04',
        path: '/docs/dailyNotes/21-11-04.md'
    }, {
        title: '7. 21-11-09',
        path: '/docs/dailyNotes/21-11-09.md'
    }]
}