module.exports = {
    title: '多技UI库', // 设置网站标题
    description: '多技前端共建组件库', //描述
    dest: './dist', // 设置输出目录
    repo: 'https://github.com/Sympath/duojiUI',
    port: 1234, //端口
    themeConfig: { //主题配置
        nav: [{
                text: '主页',
                link: '/'
            }, // 导航条
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/components/': [{
                    collapsable: true,
                    children: [
                        'button'
                    ]
                }
            ]
        }
    }
}