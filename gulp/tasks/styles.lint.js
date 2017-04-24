'use strict';

module.exports = function() {
    $.gulp.task('styles:lint', function() {
        return $.gulp.src('./app/styles/**/*.s+(a|c)ss')
          .pipe($.gp.sassLint())
          .pipe($.gp.sassLint.format())
          .pipe($.gp.sassLint.failOnError())
          .on('error', $.gp.notify.onError({
            title: 'Styles syntax error',
            message: 'Please look the console for details'
          }));
    })
};
