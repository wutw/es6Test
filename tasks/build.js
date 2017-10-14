/**
 * Created by wtw on 2017/9/30.
 */
//把各种处理脚本关联起来，确定顺序
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';//处理包顺序
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
//serve最后执行