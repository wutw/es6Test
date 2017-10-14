/**
 * Created by wtw on 2017/10/14.
 */
//模块
/*
export let A = 123;//模块化暴露
export function test(){
    console.log('test');
}
export class Hello{
    test(){
        console.log('class');
    }
}
*/

let A = 123;
let test = function(){
    console.log('test');
};
class Hello{
    test(){
        console.log('class');
    }
}
export default{//default导出对象不起名字,引入时名字随便定
    A,test,Hello
}