let mix = require('laravel-mix')
const path = require('path');

require('./nova.mix')

mix
    .setPublicPath('dist')
    .js('resources/js/card.js', 'js')
    .vue({version: 3})
    .webpackConfig({
        resolve: {
            symlinks: false,
            alias: {
                '@': path.resolve(__dirname, 'vendor/laravel/nova/resources/js/'),
            },
        },
    })
    .nova('nemrutco/nova-filterable-metrics')
