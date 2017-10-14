/**
 * Created by wtw on 2017/9/30.
 */
//创建处理模板构建脚本
import gulp from 'gulp';
import gulpif from 'gulp-if';//gulp语句作if判断
import livereload from 'gulp-livereload';//文件变化浏览器自动刷新
import args from './util/args';//命令行参数解析

gulp.task('pages',()=>{
    return gulp.src('app/**/*.ejs') //app/**/*.ejs表示app文件夹下所有嵌套.ejs文件
    .pipe(gulp.dest('server'))
    .pipe(gulpif(args.watch,livereload()))

})