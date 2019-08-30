/* 解决跨域 */
module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,//启动使用的端口号
        https: false,
        hotOnly: false,
        proxy: { // 配置跨域
            '/api': {
                target: 'https://zbuniversity.herokuapp.com/api/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app => { }
    }
}