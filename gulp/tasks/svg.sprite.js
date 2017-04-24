'use strict';

module.exports = function() {
  $.gulp.task('svg:sprite', function() {
    return $.gulp.src('./app/img/sprites/*.svg')
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: { xmlMode: true }
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: "../svg-sprite.svg"
          }
        }
      }))
      .pipe($.gp.rename("svg-sprite.svg"))
      .pipe($.gulp.dest($.config.root + '/img'))
  })
};
