'use strict';

module.exports = function() {
  $.gulp.task('js:common', function() {
    return $.gulp.src($.path.app)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('app.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/js'))
      .pipe($.gp.uglifyjs())
      .pipe($.gp.rename({suffix: '.min'}))
      .pipe($.gulp.dest($.config.root + '/js'))
  })
};
