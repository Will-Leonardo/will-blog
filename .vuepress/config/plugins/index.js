/**
 * @description 插件
 */
module.exports = [
    // 看板娘
    [
        "@vuepress-reco/vuepress-plugin-kan-ban-niang",
        {
            theme: ["z16"],
            clean: true,
            modelStyle: {
                right: '90px',
                bottom: '0px',
                opacity: '1'
            }
        }
    ],

    // 消息通知插件
    // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    //     title: '消息提示',
    //     body: [{
    //             type: 'title',
    //             content: '欢迎加入QQ交流群 🎉🎉🎉',
    //             style: 'text-aligin: center;'
    //         },
    //         {
    //             type: 'image',
    //             src: '/wechat-pay.jpg'
    //         }
    //     ],
    //     footer: [{
    //         type: 'button',
    //         text: '打赏',
    //         link: '/donate'
    //     }]
    // }]

    // 背景音乐插件
    // [
    //     "@vuepress-reco/vuepress-plugin-bgm-player",
    //     {
    //         autoShrink: 'ture',
    //         audios: [
    //             // // 本地文件示例
    //             // {
    //             //     name: '장가갈 수 있을까',
    //             //     artist: '咖啡少年',
    //             //     url: '/bgm/1.mp3',
    //             //     cover: '/bgm/1.jpg'
    //             // },
    //             // 网络文件示例
    //             {
    //                 name: '강남역 4번 출구',
    //                 artist: 'Plastic / Fallin` Dild',
    //                 url: 'https://assets.smallsunnyfox.com/music/2.mp3',
    //                 cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
    //             },
    //             {
    //                 name: '用胳膊当枕头',
    //                 artist: '최낙타',
    //                 url: 'https://assets.smallsunnyfox.com/music/3.mp3',
    //                 cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
    //             }
    //         ]
    //     }
    // ],
    [
        "dynamic-title",
        {
            showIcon: "/favicon.ico",
            showText: "(/≧▽≦/)咦，欢迎回到 - ",
            hideIcon: "/failure.ico",
            hideText: "(●—●)我会想念你的！",
            recoverTime: 2000
        }
    ],

    // 随机名人名言
    ["vuepress-plugin-boxx"],

    [
        "@vuepress/medium-zoom", {
            selector: '.page img',
            delay: 1000,
            // medium-zoom options here
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 24,
                background: "rgba(0,0,0,0.7)",
                scrollOffset: 40
            }
        }
    ],

    // 特效鼠标
    [
        "cursor-effects",
        {
            size: 2, // size of the particle, default: 2
            shape: ['star'], // shape of the particle, default: 'star'，option  'circle'
            zIndex: 999999999 // z-index property of the canvas, default: 999999999
        }
    ],
    // 代码复制弹窗插件
    ["vuepress-plugin-nuggets-style-copy", {
        copyText: "复制代码",
        tip: {
            content: "复制成功!"
        }
    }],

    // 评论插件
    [
        '@vssue/vuepress-plugin-vssue',
        {
            platform: 'github', //v3的platform是github，v4的是github-v4
            locale: 'zh', //语言
            // 其他的 Vssue 配置
            owner: 'Will0705xO', //github账户名
            repo: 'will', //github一个项目的名称
            clientId: '21fa9a91cfd8e044d9cb', //注册的Client ID
            clientSecret: 'e38b086f9f65f5c32d4ef5953498e0eebb6a2b58', //注册的Client Secret
            autoCreateIssue: true, // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
            showComment: true
        },
    ],
    // ['demo-container'],
    // ['demo-block'],
    ['demo-container-v2']
]