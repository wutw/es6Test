/**
 * Created by wtw on 2017/10/9.
 */
{
    let a = 1,b = 'hello';
    let obj = {
        a:a,
        b:b
    };

    let objNew = {
        a,
        b
    };

    console.log(obj,objNew);
}//属性比较
{
    let es5_method = {
         hello:function(){
            console.log('hello')
}
    };
    let es6_method = {
        hello(){
            console.log('I am ok')
        }
    };

    es5_method.hello();
    es6_method.hello();
}//方法比较
{
    let a = 'cd';
    let es5_obj = {
        a:'b'
    };
    let es6_obj = {
        [a]:'c'
    };
    console.log(es5_obj,es6_obj);
}
{
    console.log('a',Object.is('abc','abc'),'abc'==='abc');
    console.log('b',Object.is([],[]),[]===[]);
    console.log('copy',Object.assign({a:'a'},{b:'b'}));

    let test = {
        a:'1',
        b:'e'
    };
    for(let [key,value] of Object.entries(test)){
        console.log([key,value]);
    }

}