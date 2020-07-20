const gulp = require('gulp')
const yaml = require('gulp-yaml')

gulp.task('yaml', () => {
    return gulp
        .src('./themes/*.yaml')
        .pipe(yaml({ space: 2 }))
        .pipe(gulp.dest('./themes/'))
})

gulp.task('default', () => {
    return gulp.watch('./themes/*.yaml', gulp.series(['yaml']))
})
