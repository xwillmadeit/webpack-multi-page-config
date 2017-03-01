const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = (env) => ({
	entry: {
		home: "./src/js/home.js",
		about: "./src/js/about.js",
		contact: "./src/js/contact.js",
		vendor: ['jquery']
	},
	output: {
		filename: '[name].bundle.js',
		path: resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: resolve(__dirname, "node_modules"),
				loader: 'babel-loader'
			},
			{
				test: /.scss$/,
				use: ExtractTextPlugin.extract({
		          fallback: 'style-loader',
		          use: ['css-loader', 'sass-loader']
		        })
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			chunks: ['vendor','home'], 
			template: './src/html/home.html',
			filename: 'home.html'
		}),
		new HtmlWebpackPlugin({
			chunks: ['vendor','about'],
			template: './src/html/about.html',
			filename: 'about.html'
		}),
		new HtmlWebpackPlugin({
			chunks: ['vendor','contact'],
			template: './src/html/contact.html',
			filename: 'contact.html'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.js'
		}),
		new ExtractTextPlugin({
			filename: '[name].css'
		})
	],
	devtool: env.prod ? 'source-map' : 'eval-source-map',
	devServer: {
		port: 8000,
		contentBase: resolve(__dirname, 'dist')
	}
})