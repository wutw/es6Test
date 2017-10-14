/**
 * Created by wtw on 2017/9/29.
 */
//对js处理的构建脚本

import gulp from 'gulp';
import gulpif from 'gulp-if';//gulp语句作if判断
import concat from 'gulp-concat';//处理拼接
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';//文件命名
import livereload from 'gulp-livereload';//文件变化浏览器自动刷新
import plumber from 'gulp-plumber';//处理文件信息流
import rename from 'gulp-rename';//文件重命名
import uglify from 'gulp-uglify';//js文件压缩
import {log,colors} from 'gulp-util';//命令行工具输出
import args from './util/args';//命令行参数解析
gulp.task('scripts',()=>{
    return gulp.src(['app/js/index.js'])
    .pipe(plumber({//plumber对文件错误进行处理
        errorHandle:function(){

            }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
        module:{ //module模块
            loaders:[{
                test:/\.js$/,
                loader:'babel-loader'
            }]
        }

    }),null,(err,stats) =>{
        log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
            chunks:false
        }))

    })
    .pipe(gulp.dest('server/public/js'))//server拿到编译好的js，服务才能跑起来
    .pipe(rename({
        basename:'cp',
        exitname:'.min.js'//复制一份再压缩
    }))
    .pipe(uglify({//压缩配置
        compress:{
            properties:false
        },
        output:{
            'quote_keys':true
        }

    }))
    .pipe(gulp.dest('server/public/js'))//复制一份地址，这个地址现在有两份文件，未压缩的与压缩好的命名为cp.min.js
    .pipe(gulpif(args.watch,livereload()))//对arg里判断命令行是否有watch参数，有就监听自动刷新
})