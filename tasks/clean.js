/**
 * Created by wtw on 2017/9/30.
 */
//自动操作，文件不断复制到server，要对之前的复制进行清空
import gulp from 'gulp';
import del from 'del';//
import args from './util/args';//命令行参数解析

gulp.task('clean',()=>{
    return del(['server/public','server/views'])//清空两个目录
})