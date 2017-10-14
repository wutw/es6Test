/**
 * Created by wtw on 2017/9/30.
 */
{
    let a,b,c,rest;
    [a,b,c]=[1,2];//数组解构赋值,没有配对，c为undefined
    console.log(a,b,c);
}
{
    let a,b,rest;
    [a,b,...rest] = [1,2,3,4,5,6];
    console.log(a,b,rest);

}


//数据交换
{
    let a=1;
    let b=2;
    [a,b]=[b,a];
    console.log(a,b);
}

//取得函数返回的每一个值
{
    let a = function(){
        return [1,2];
    };
    let b,c;
    [b,c]=a();
    console.log(b,c);
}

//对象解构赋值
{
    let a,b;
    ({a,b} = {a:1,b:2});//对象解构赋值
    console.log(a,b);
}

{
    let o={p:42,q:true};
    let {p,q}=o;//对象解构赋值，两边都是对象
    console.log(p,q);

}
{
    let{a = 10,b = 3} = {a :3};
    console.log(a,b);
}
