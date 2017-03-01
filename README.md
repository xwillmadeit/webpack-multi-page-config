## Html Webpack Plugin

1. 可以使用 chunks 指定 HtmlWebpackPlugin 引入某几个指定的 chunk

```js
new HtmlWebpackPlugin({
	chunks: ['home'], 
	template: './src/html/home.html',
	filename: resolve(__dirname, 'dist/html/home.html')
})

new HtmlWebpackPlugin({
	chunks: ['about'],
	template: './src/html/about.html',
	filename: resolve(__dirname, 'dist/html/about.html')
})
```

注意：chunks 参数必须为数字格式，否则所有的 chunk 都会被注入

(same problem)[https://github.com/jantimon/html-webpack-plugin/issues/218]

2. 多个页面，如果每个页面都 import 相同的 css 或 scss，则 ExtractTextPlugin 会自动生成 vendor.css

配置如下：

```js
new ExtractTextPlugin({
	filename: '[name].css'
})
```

该 vendor.css 会被 HtmlWebpackPlugin 插件自动引入

3. 在打包的时候如果配置了 devtool 参数，即 source-map，则注意不能设置为 eval-source-map

(Detail)[https://webpack.js.org/configuration/devtool/]
