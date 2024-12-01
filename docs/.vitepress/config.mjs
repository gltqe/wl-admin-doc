import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/wl-admin-doc/',
    lang: 'zh-CN',
    title: "WlAdmin",
    description: "WlAdmin在线文档",
    head: [['link', {rel: 'icon', href: '/wl-admin-doc/image/logo.ico'}]],
    cleanUrls: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/image/logo.svg',
        siteTitle: 'Wl-Admin',
        search: {
            provider: 'local'
        },
        outline: {
            level: [2, 5],
            label: '页面导航'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        nav: [
            {text: '项目文档', link: '/guide/profile', activeMatch: '/guide/'},
            {text: '参考配置', link: '/config/back'}
        ],

        sidebar: {
            '/guide/': [
                {
                    text: '简介',
                    items: [
                        {text: '项目介绍', link: '/guide/profile'},
                        {text: '快速开始', link: '/guide/start'},
                        {text: '系统部署', link: '/guide/deploy'},
                        {text: '更新日志', link: '/guide/log'}
                    ]
                },
                {
                    text: '后端文档',
                    items: []
                },
                {
                    text: '前端文档',
                    items: []
                },
                {
                    text: '项目扩展',
                    items: []
                },
                {
                    text: '常见问题',
                    items: []
                }

            ],
            '/config/': [
                {
                    text: '后端配置',
                    items: []
                },
            ]
        },
        socialLinks: [
            {icon: 'gitee', link: 'https://gitee.com/gltqe/wl-admin'},
            {icon: 'github', link: 'https://github.com/gltqe/wl-admin'}
        ]
    }
})
