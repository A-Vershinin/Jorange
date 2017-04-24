'use strict';

module.exports = function() {
  $.gulp.task('css:bundle', function() {
    return $.gulp.src($.path.cssFoundation)
      .pipe($.gp.concatCss('bundle.css'))
      // .pipe($.gp.uncss({
      //   html: [$.config.root + '/*.html']
      // }))
      .pipe($.gulp.dest($.config.root + '/css'))
      .pipe($.gp.csso())
      .pipe($.gp.rename({suffix: '.min'}))
      .pipe($.gulp.dest($.config.root + '/css'))
  })
};
