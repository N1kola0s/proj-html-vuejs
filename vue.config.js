const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    /* File CSS variables importato per ogni strato del file */
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/assets/scss/variables.scss";`
            }
        }
    }
})