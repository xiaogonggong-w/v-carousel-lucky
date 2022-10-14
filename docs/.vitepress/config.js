export default {
    title: "v-carousel-lucky", // 标题
    // description: 'Life is short, Keep it simple.', // 描述信息
    base: "/v-carousel-lucky/",
    themeConfig: {
        nav: [
            { text: "使用", link: "/guide/vueInstallation.md" },
            { text: "配置项", link: "/guide/carousel-config.md" },
        ],
        socialLinks: [{ icon: "github", link: "https://github.com/xiaogonggong-w/v-carousel-lucky" }],
        sidebar: {
            "/guide/": [
                {
                    text: "使用",
                    items: [
                        {
                            text: "基础使用",
                            link: "/guide/vueInstallation.md"
                        }, {
                            text: "卡片模式",
                            link: '/guide/card.md'
                        }, {
                            text: "宽度与高度",
                            link: '/guide/width_height.md'
                        },
                        {
                            text: "延时时间",
                            link: "/guide/duration.md"
                        }, {
                            text: "自动轮播",
                            link: "/guide/autoplay.md"
                        },
                        {
                            text: "初始化展示的item",
                            link: "/guide/init-item.md"
                        },
                        {
                            text: "切换按钮是否展示",
                            link:"/guide/direction.md"
                        },
                        {
                            text: "切换按钮展示的方式",
                            link: "/guide/direction-mode.md"
                        },
                        {
                            text:"指示灯是否展示",
                            link:"/guide/indicator.md"
                        },
                        {
                            text:"指示灯展示的方式",
                            link:"/guide/indicator-mode.md"
                        },
                        {
                            text:"指示灯的位置",
                            link:"/guide/indicator-position.md"
                        },
                        {
                            text:"指示灯触发方式",
                            link:"/guide/indicator-trigger.md"
                        },
                        {
                            text:"是否循环轮播",
                            link:"/guide/loop.md"
                        },
                        {
                            text:"过渡的时间",
                            link:"/guide/delay.md"
                        },
                        {
                            text:"幻灯片缩小的比例",
                            link:"/guide/scale.md"
                        },
                        {
                            text:"幻灯片的宽度",
                            link:"/guide/card-width.md"
                        },
                        {
                            text: "所有配置项",
                            link: "/guide/carousel-config.md"
                        }
                    ]
                }
            ]
        }
    }
};