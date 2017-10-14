/**
 * Created by wtw on 2017/10/11.
 */
{
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1 === a2);//Symbol（）生成独一无二的值
    let a3 = Symbol.for('a3');//Symbol.for('a3')：a3为key值，如果定义过
    // ，拿到定义的值，如果没有，生成独一无二的值
    let a4 = Symbol.for('a3');
    console.log(a3 === a4);

}
{
    let a1 = Symbol.for('abc');//Symbol定义的属性独一无二
    let obj = {
        [a1]:123,
        'abc':'dd',//不会冲突
        'c':22
    };
    console.log('obj',obj);

    for(let [key,value] of Object.entries(obj)){
        console.log('let of',key,value);
    }

    Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log('symbol',item,obj[item]);
});

    Reflect.ownKeys(obj).forEach(function(item){
        console.log('all',item,obj[item]);
    })
}