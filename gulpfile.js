var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var promise = require('es6-promise').polyfill();
var prefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  return gulp.src('styles/sass/*.scss')
    .pipe(sass()) // Using gulp-sass 
    .pipe(prefixer('last 2 versions'))   
    .pipe(gulp.dest('styles/'))
    
});


gulp.task('watch', function(){
  gulp.watch('styles/sass/*.scss', ['sass']); 
  // Other watchers
});

