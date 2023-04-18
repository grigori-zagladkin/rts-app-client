const { config } = require('process')

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL,
	},
	async rewrites() {
		return [
			{
				source: `/api/:path*`,
				destination: `http://localhost:2000/api/:path*`,
			},
			{
				source: `/static/:path*`,
				destination: `http://localhost:2000/static/:path*`,
			},
		]
	},
	webpackDevMiddleware: (config) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		}
		return config
	},
}

module.exports = nextConfig
