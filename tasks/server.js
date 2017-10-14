/**
 * Created by wtw on 2017/9/30.
 */
//处理服务器构建脚本

import gulp from 'gulp';
import gulpif from 'gulp-if';//gulp语句作if判断
import liveserver from 'gulp-live-server';//启动脚本作为服务器
import args from './util/args';//命令行参数解析

gulp.task('serve',(cb)=>{
    if(!args.watch) return cb();//不是监听，返回回调函数
    var server = liveserver.new(['--harmony','server/bin/www'])//监听状态，创建服务器,处于harmony命令，启动'server/bin/www脚本
    server.start();//启动服务器
    gulp.watch(['server/public/**/*.js','server/public/**/*.ejs'],function(file){//对服务器js.ejs监听
        server.notify.apply(server,[file]);//通知服务器改变
    })
    //服务器路由、接口变化，重启服务器
    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        server.start.bind(server)()
    });

})