/**
 * Created by wtw on 2017/10/9.
 */

{
    let arr = Array.of(2,5,7,10);//转换为数组
    console.log('arr=',arr);
}
{
    let ele = document.querySelectorAll('p');
    let eleArr = Array.from(ele);//集合转换为数组
    eleArr.forEach(function(value){
        console.log(value.textContent);
    });

    console.log(Array.from([1,2,4],function(value){
        return value ** value;//相当于map映射作用
    }));
}
{
    console.log([3,undefined,'3',5].fill(2,1,3));//2表示要替换后的值，1表示起始位，3表示终点，1、2位会被替换

}
{
   for(let index of ['a','b','c'].keys()){
       console.log('key',index);

   }

   /* for(let value of ['a','b','c'].values()){
        console.log('value',value);
    }*/
    for(let [index,value] of ['a','b','c'].entries()){
        console.log('values' ,index,value);
    }


}
{
    console.log([1,2,3,4].copyWithin(0,2,4));
}

{
    let list = [1,2,3,4];
    let a = list[0], rest = list.slice(1);
   let listSub =  [a,...rest];
    console.log('rest',rest);

    console.log('listSub',listSub);

}
{
    console.log([1,2,3,4].find(function(ele){
        return  ele>2;
    }));
    console.log([1,2,3,4].findIndex(function(ele){
        return  ele>2;
    }));
}
{
    function ArrayOf(){
        return [].slice(1,2);
        /*return [].slice.apply(arguments);*/
    }
   console.log('ArrayOf',ArrayOf()) ;

}

