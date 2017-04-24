'use strict';

module.exports = function() {
  $.gulp.task('png:sprite', function() {
    var spriteData = $.gulp.src('./app/img/sprites/*.png').pipe($.gp.spritesmith({
        imgName: 'png-sprite.png',
        cssName: 'png-sprite.scss',
        cssFormat: "scss",
        imgPath: '../img/png-sprite.png',
        padding: 40
    }));
    spriteData.css.pipe($.gulp.dest('app/styles/sprites/'));
    spriteData.img.pipe($.gulp.dest($.config.root + '/img'));
    return spriteData;

  })
};
