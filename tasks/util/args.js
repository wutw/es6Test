import yargs from 'yargs';//定制命令行参数选项

const args = yargs

    .option('production',{
        boolean:true,
        default:false,
        describe:'min all scripts'
    })

    .option('watch',{//命令行是否有监听
        boolean:true,
        default:false,
        describe:'watch all files'
    })

    .option('verbose',{//日志
        boolean:true,
        default:false,
        describe:'log'
    })

    .option('sourcemaps',{//js映射
        describe:'force the creation of sroucemaps'
    })

    .option('port',{//服务器端口
        string:true,
        default:8080,
        describe:'server port'
    })

    .argv

export default args;
