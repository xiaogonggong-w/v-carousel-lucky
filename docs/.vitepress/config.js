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
                            text: "在Vue中使用",
                            link: "/guide/vueInstallation.md"
                        }, {
                            text: "配置项",
                            link: "/guide/carousel-config.md"
                        }
                    ]
                }
            ]
        }
    }
};