'use strict';

module.exports = function() {
  $.gulp.task('images', function() {
    return $.gulp.src('./app/img/**/*.*', { since: $.gulp.lastRun('images') })
      .pipe(($.gp.imagemin({
          optimizationLevel: 5,
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          // use: [pngquant()],
          interlaced: true
        })))
      .pipe($.gulp.dest($.config.root + '/img'));
  });
};
