var gulp 		= 	require('gulp');
var svgmin 		= 	require('gulp-svgmin');
var runSequence = 	require('run-sequence');
var svg2png 	= 	require('gulp-svg2png');
var src 		= 	'assets/';
var svg_dest	=	'svg_optimized/';
var png_dest	=	'png_optimized/'

gulp.task('svgo', function () {
    return gulp.src(src + '/*.svg')
        .pipe(svgmin({
            plugins: [{
                removeDimensions: true
            }]
        }))
        .pipe(gulp.dest(svg_dest));
});

gulp.task('svg2png', function () {
    gulp.src(src + '/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest(png_dest));
});

gulp.task('default', function(callback) {
    runSequence(
        'svgo',
        'svg2png');
});