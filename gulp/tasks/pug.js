'use strict';

module.exports = function() {
  $.gulp.task('html', function() {
    return $.gulp.src('./app/templates/pages/*.pug')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(function(err) {
          return {
            title: '{',
            message: err.message
          }
        })
      }))
      .pipe($.gp.pug({
        pretty: true
      }))
      .pipe($.gulp.dest($.config.root));
  });
};
