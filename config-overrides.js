const { getBabelLoader } = require("customize-cra");

module.exports = {
    webpack:  config => {
        const babel = getBabelLoader(config)
        babel.options.plugins.push('una-language')
        babel.test =  /\.(js|mjs|jsx|ts|tsx|una)$/
        return config
    },
    paths: (config) => {
        config.moduleFileExtensions = [...config.moduleFileExtensions, 'una']
        return config
    }
}