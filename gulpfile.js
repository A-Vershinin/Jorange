'use strict';

global.$ = {
    package: require('./package.json'),
    config: require('./gulp/config'),
    // cssCombConfig: require('./csscomb.json'),
    path: {
        task: require('./gulp/paths/tasks.js'),
        jsFoundation: require('./gulp/paths/js.bundle.js'),
        cssFoundation: require('./gulp/paths/css.bundle.js'),
        app: require('./gulp/paths/app.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    // mqpacker: require("css-mqpacker"),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')({
      rename: {
        "gulp-css-unit" : "cssunit"
      }
    })
};

$.path.task.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'html',
        'styles',
        'css:bundle',
        'js:common',
        'js:bundle',
        'php',
        'png:sprite',
        'svg:sprite',
        'images',
        'fonts',
        'favicons'
        // 'styles:lint',
        // 'js:lint'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
