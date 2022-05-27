const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPWA({
    reactStrictMode: true,
    poweredByHeader: false,

    pwa: {
        dest: 'public',
        runtimeCaching
    }
})
module.exports = withPlugins([optimizedImages]);