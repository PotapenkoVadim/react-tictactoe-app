const path = require ('path');
const HTMLWebpackPlugin = require ('html-webpack-plugin');
const {CleanWebpackPlugin} = require ('clean-webpack-plugin');

module.exports = {
	entry: { main: ['@babel/polyfill', './src/index.js'] },
	output: {
		filename: '[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: { port: 4200 },
	plugins: [
		new HTMLWebpackPlugin({ template: './src/index.html' }),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/plugin-proposal-class-properties']
					}
				}
			}
		]
	}
};