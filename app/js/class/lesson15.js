/**
 * Created by wtw on 2017/10/13.
 */
import 'babel-polyfill';
{
    //generator基本定义
    let tell = function*(){//tell是一个generator函数
        yield 'a';
        yield 'b';
        return 'c'


    };
    let k = tell();//generator函数返回iterator接口,在yield前停下
    console.log(k.next());//执行第一个yield
    console.log(k.next());//执行第2个yield
    console.log(k.next());//执行return
    console.log(k.next());

    //generator函数遍历器生成函数，直接赋值给iterator接口

}
{
    let obj = {};
    //generator部署iterator接口
    obj[Symbol.iterator]=function*(){
        yield 1;
        yield 2;
        yield 3;
    };
    for(let value of obj){//有iterator接口，可遍历
        console.log('value',value);
    }

}
{
    //状态机
    //事物a,b,c三种状态
    let state = function* (){
        while(1){
            yield 'A';
            yield 'B';
            yield 'C';
        }
    };
    let status = state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}
/*{
    let state = async function (){
        while(1){
            await 'A';
            await 'B';
            await 'C';
        }
    };
    let status = state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}*/

{
    let draw = function(count){
        //具体抽奖逻辑
        console.log(`剩余${count}次`)
    };
    //全局变量保存当前变量，影响页面性能，不安全
    //generator判断抽奖次数
    let residue = function* (count){
        while(count>0){
            count --;
            yield draw(count);
        }
    };
    let star = residue(5);
    //按钮绑定，每点击一次，次数少1
    let btn = document.createElement('button');
    btn.id = 'start';
    btn.textContent = '抽奖';
    document.body.appendChild(btn);//添加到body中，可取DOM对象
    document.getElementById('start').addEventListener('click',function(){
        star.next();

    },false);


}

//常轮询，实时取得服务端变化
{
    //接口模拟
    let ajax = function*(){//generator函数
        yield new Promise(function(resolve,reject){
            setTimeout(function(){
               resolve({code:0});//接口成功返回，执行
            },200)
        })
    };
    //轮询过程
    let pull = function(){
        let generator = ajax();//实例化,ajax()有iterate接口,有next方法
        let step = generator.next();//与后端进行一次通信,返回对象的value值是一个Promise实例
        step.value.then(function(d){//resolve函数，参数为对象
            if(d.code !=0){
                setTimeout(function(){
                    console.log('wait');
                    pull()
                },1000);

            }else{
                console.log(d);

            }
        })

    };
    pull();


}
