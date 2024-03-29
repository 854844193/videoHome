// vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:9221', // 后台请求地址
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '' //通过pathRewrite重写地址，将前缀/api转为/
                }
            },
            // '/api': {
            //     target: 'http://127.0.0.1:9221', // 后台请求地址
            //     ws: true,
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/api': '' //通过pathRewrite重写地址，将前缀/api转为/
            //     }
            // }
        }
    },
    lintOnSave: false
}