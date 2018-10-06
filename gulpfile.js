var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  var input = 'src/stylesheets/style.scss';
  var output = 'dist/style.css';

  return gulp
    .src('src/stylesheets/style.scss')
    .pipe(sass())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('handlebars', function () {
  var templateData = {},
  options = {
    batch : ['./src/partials']
  }

  return gulp.src('src/index.hbs')
    .pipe(handlebars(templateData, options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('dist'));
});

gulp.task('vendor', function () {
  return gulp.src('src/vendor/**/*')
    .pipe(gulp.dest('dist/vendor'));
})

gulp.task('images', function () {
  return gulp.src('src/images/*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('seo_files', function () {
  return gulp.src('src/seo_files/*')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass', 'handlebars', 'vendor', 'images', 'seo_files']);
