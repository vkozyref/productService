var gulp = require('gulp');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var templateCache = require('gulp-angular-templatecache');
var uglifycss = require('gulp-uglifycss');

gulp.task('usemin', ['templates', 'fonts'], function() {
  return gulp.src('./index.html')
    .pipe(usemin({
      css: [ uglifycss],
      js: [ uglify ],
      vendorCss: [ uglifycss ],
      vendorJs: [ uglify ],
      templates: []
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['usemin']);

gulp.task('templates', function () {
  return gulp.src('app/scripts/**/*.html')
    .pipe(templateCache({
      module: 'products.templates'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('templates'));
});

gulp.task('fonts', function(){
  return gulp.src('node_modules/bootstrap/dist/fonts/**')
    .pipe(gulp.dest('../ProductSite/dist/fonts/'));
});