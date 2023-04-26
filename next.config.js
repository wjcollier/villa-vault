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
}
