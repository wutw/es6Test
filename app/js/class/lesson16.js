/**
 * Created by wtw on 2017/10/14.
 */
{
//限制某个功能只读
    let readonly = function(target,name,descriptor){
        //target修改类，name修改属性名称，descriptor：属性描述对象
        descriptor.writable = false;
        return descriptor;

    };
    class Test{
        @readonly//修饰器一个函数，修改类行为，限制某个功能只读
        time(){
            return '2017-03-11'
        }
    }
    let test = new Test();
   /* test.time = function(){
    return '2013-2-2';
    };*/
    console.log(test.time());
}
{
    let typename = function(target,name,descriptor){
        target.myname = 'hello';//类增加静态属性
    };
    @typename//修饰器可以放类外，但要在class前面
    class Test{

    }
    console.log('类修饰符',Test.myname);

}
/*
{
    let log = (type)=>{//埋点抽离，变成可复用模块
        return function(target,name,descriptor){//修饰器
            let src_method = descriptor.value;//属性值
            descriptor.value = (...arg)=>{//类方法重新赋值
                src_method.apply(target,arg);//调用类方法
                console.log(`log ${type}`);//调用埋点
            }
        }
    };

    class AD{
        @log('show')//埋点拆除，可维护性与复用性变好
        show(){
            console.log('ad is show');

        }
        @log('click')
        click(){
            console.log('ad is click');
        }

    }
    let ad = new AD();
    ad.show();
    ad.click();
}*/

{


    let log = (type)=>{
        return function(target,name,descriptor){//修饰器
            let src_method = descriptor.value;//属性值
            descriptor.value = (...arg)=>{//类方法重新赋值
                src_method.apply(target,arg);

                console.log(`log ${type}`);

            }

        }
    };
    class AD{
        @log('show')//埋点拆除，可维护性与复用性变好
        show(){
            console.log('ad is show');

        }
        @log('click')
        click(){
            console.log('ad is click');
        }

    }
    let ad = new AD();
    ad.show();
    ad.click();
   /* class a{
        @log('show')
        show(){
            console.log(`show`);
        }
        @log('click')
        click(){
            console.log('click')
        }
    }
    let example = new a();
    example.show();
    example.click();*/
}