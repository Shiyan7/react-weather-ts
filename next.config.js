const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache')
const withSvgr = require("next-plugin-svgr");
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    [withSvgr, {
        svgrOptions: {
            icon: true
        },
    }],
    [withPWA, {
        pwa: {
            dest: 'public',
            runtimeCaching,
        }
    }],
]);