'use strict';

module.exports = function() {
  $.gulp.task('js:bundle', function() {
    return $.gulp.src($.path.jsFoundation)
      .pipe($.gp.concat('bundle.js'))
      .pipe($.gulp.dest($.config.root + '/js'))
      .pipe($.gp.uglifyjs())
      .pipe($.gp.rename({suffix: '.min'}))
      .pipe($.gulp.dest($.config.root + '/js'))
  })
};
