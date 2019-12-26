const mix = require('laravel-mix')
const path = require('path')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .copy('node_modules/normalize.css/normalize.css', 'public/css/normalize.css')
  .js('resources/js/app.js', 'public/js') // メインスクリプト
  .sass('resources/sass/app.scss', 'public/css') // メインスタイル
  .sass('resources/sass/vue_app/index.scss', 'public/css/vue_app') // Vue を利用した新 UI 用のスタイル
  .js('resources/js/vue_app/index.js', 'public/js/vue_app') // Vue を利用した新 UI 用のJS
  .webpackConfig({
    resolve: {
      alias: {
        '@': path.resolve('./resources/')
      }
    }
  })
  .js('resources/js/users_checker.js', 'public/js') // ユーザー登録チェッカー
  .js('resources/js/forms_editor/index.js', 'public/js/forms_editor') // フォームエディタJS
  .sass('resources/sass/forms_editor.scss', 'public/css') // フォームエディタCSS
  .browserSync('localhost')
  .version()
