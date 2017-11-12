var gulp = require("gulp");
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var dist = 'www/dist';
//压缩index文件
gulp.task('indexminify', function() {
    return gulp.src('www/src/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(dist));
});


//压缩modules.html文件
gulp.task('htmlminify', function() {
    return gulp.src('www/src/modules/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(dist+'/modules'));
});
//压缩压缩modules.js文件
gulp.task('minifymodulesjs', function () {
    return gulp.src('www/src/modules/*.js')
        .pipe(jsmin())
        // .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(dist+'/modules'));
});


//压缩image文件
gulp.task('minifyimg',function(){
    return gulp.src('www/src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest(dist+'/img'))
})
//压缩css

gulp.task('minifycss', function() {
    return gulp.src('www/src/css/*')
        .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
        .pipe(cleanCSS())
        .pipe(gulp.dest(dist+'/css'));
});

//压缩js文件
gulp.task('minifyjs', function () {
    return gulp.src('www/src/js/*.js')
            .pipe(jsmin())
            // .pipe(rename({suffix: '.min'}))
           .pipe(gulp.dest(dist+'/js'));
});


gulp.task('transferfont', function () {
    return gulp.src('www/src/font/**/*')
            .pipe(gulp.dest(dist+'/font'));
});
gulp.task('transferi18', function () {
    return gulp.src('www/src/i18/*.json')
        .pipe(gulp.dest(dist+'/i18'));
});


gulp.task('default',['minifycss','minifyjs','htmlminify','indexminify','minifyimg','minifymodulesjs','transferfont','transferi18'])