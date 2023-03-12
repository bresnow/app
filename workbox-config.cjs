module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{png,json,svg,txt}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};