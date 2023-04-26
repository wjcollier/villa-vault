const CompressionPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['bayut-production.s3.eu-central-1.amazonaws.com'],
		loader: 'cloudinary',
		path: 'https://res.cloudinary.com/dhqnraex6/image/upload/',
	},
	basePath: isProd ? '/villa-vault' : '',
	assetPrefix: isProd ? '/villa-vault/' : '',
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.plugins.push(
				new CompressionPlugin({
					algorithm: 'gzip',
					test: /\.(js|css|html|svg)$/,
					threshold: 8192,
					minRatio: 0.8,
				})
			)
		}
		config.optimization.minimize = true
		config.optimization.minimizer = [
			new TerserPlugin({
				terserOptions: {
					compress: {
						comparisons: false,
						dead_code: true,
						drop_debugger: true,
						drop_console: true,
					},
					output: {
						comments: false,
					},
				},
				extractComments: false,
			}),
		]
		return config
	},
}