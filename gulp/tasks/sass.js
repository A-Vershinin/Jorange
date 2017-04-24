'use strict';

module.exports = function() {
  $.gulp.task('styles', function() {
    return $.gulp.src('./app/styles/app.scss')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(function(err) {
          return {
            title: 'Styles',
            message: err.message
          }
        })
      }))
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass({
        errLogToConsole: true,
        "sourcemap=none": true,
        noCache: true,
        outputStyle: 'expanded'
      }))
      .pipe($.gp.cssunit({
        type :'px-to-rem',
      	rootSize : 16
      }))
      .pipe($.gp.autoprefixer({
        browsers: $.config.autoprefixerConfig
      }))
      // .pipe($.gp.postcss([
      //   mqpacker({
      //     sort: true
      //   })
      // ]))
      // .pipe($.gp.csscomb(cssCombConfig))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/css'))
      .pipe($.gp.csso())
      // .pipe($.gp.rename({suffix: '.min'}))
      .pipe($.gulp.dest($.config.root + '/css'))
      .pipe($.browserSync.stream());
  })
};
