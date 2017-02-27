var elixir = require('laravel-elixir')

require('./tasks/concatScripts.task.js')
require('laravel-elixir-karma')
require('./tasks/angular.task.js')
require('./tasks/bower.task.js')
require('./tasks/ngHtml2Js.task.js')

if (!elixir.config.production) {
  require('./tasks/phpcs.task.js')
}

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
  var jsOutputFolder = config.js.outputFolder
  var cssOutputFolder = config.css.outputFolder
  var fontsOutputFolder = config.fonts.outputFolder
  var buildPath = config.buildPath

  var assets = [
      'public/js/final.js',
      'public/css/final.css',
	  'public/js/front.js',
      'public/css/front.css'      
    ],
    scripts = [
      './public/js/vendor.js',
      './public/js/partials.js',
      './public/js/app.js',
      './public/dist/js/app.js'
    ],
	frontScripts = [
	  './public/js/vendor.js',
	  './public/js/partials.js',
	  './public/js/app.js',
	  './public/dist/js/app.js',
      './public/required-js/isotope.min.js',
      './public/required-js/ytplayer.min.js',
      './public/required-js/easypiechart.min.js',
      './public/required-js/owl.carousel.min.js',
      './public/required-js/lightbox.min.js',
      './public/required-js/twitterfetcher.min.js',
      './public/required-js/smooth-scroll.min.js',
      './public/required-js/scrollreveal.min.js',
      './public/required-js/parallax.js',
      './public/required-js/scripts.js'
    ],
    styles = [
      './public/css/vendor.css',
      './public/css/app.css'	  
    ],
	frontStyles = [
	  './public/required-css/bootstrap.css',
	  './public/required-css/socicon.css',
	  './public/required-css/iconsmind.css',
	  './public/required-css/interface-icons.css',
	  './public/required-css/owl.carousel.css',
	  './public/required-css/lightbox.min.css',
	  './public/required-css/theme.css',
	  './public/required-css/custom.css'
	],
    karmaJsDir = [
      jsOutputFolder + '/vendor.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/ng-describe/dist/ng-describe.js',
      jsOutputFolder + '/partials.js',
      jsOutputFolder + '/app.js',	  
      'tests/angular/**/*.spec.js'
  ]

  mix
    .bower()
    .angular('./angular/')
    .ngHtml2Js('./angular/**/*.html')
    .concatScripts(scripts, 'final.js')
    .concatScripts(frontScripts, 'front.js')
    .sass('./angular/**/*.scss', 'public/css')	
    .styles(styles, './public/css/final.css')
    .styles(frontStyles, './public/css/front.css')
    .version(assets)
    .browserSync({
      proxy: 'localhost:8000'
    })
    .karma({
      jsDir: karmaJsDir
    })

  mix
    .copy(fontsOutputFolder, buildPath + '/fonts')
})
