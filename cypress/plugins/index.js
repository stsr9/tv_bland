const { initPlugin } = require('cypress-plugin-snapshots/plugin')
const browserify = require('@cypress/browserify-preprocessor')

module.exports = (on, config) => {
	on('file:preprocessor', browserify())
	initPlugin(on, config)
	return config
}
