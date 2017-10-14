/**
 * Created by wtw on 2017/9/30.
 */
//创建css处理脚本
import gulp from 'gulp';
import gulpif from 'gulp-if';//gulp语句作if判断
import livereload from 'gulp-livereload';//文件变化浏览器自动刷新
import args from './util/args';//命令行参数解析

gulp.task('css',()=>{
    return gulp.src('app/**/*.css')
    .pipe(gulp.dest('server/public'))
    .pipe(gulpif(args.watch,livereload()))//如果不用编译，可省
})