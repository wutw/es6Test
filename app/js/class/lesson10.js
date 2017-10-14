/**
 * Created by wtw on 2017/10/11.
 */
{
    let list = new Set();
    list.add(5);
    list.add(7);
    console.log('size',list.size);
}
{
    let arr = [1,2,3,4,5];
    let list = new Set(arr);

    console.log('size',list.size);
}

{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);
    console.log('list',list);
    //去重
    let arr = [1,2,1,3,'2'];
    console.log('ignore',new Set(arr));
}
{
    let arr = ['add','has','delete','clear'];
    let list = new Set(arr);
    console.log('add',list.add('add1'),list);
    console.log(list.has('add1'));
    console.log('delete',list.delete('add1'),list);
    console.log('clear',list.clear(),list);
}
{
    let arr = ['add','has','delete','clear'];
    let list = new Set(arr);
    for(let key of list.keys()){
        console.log('key',key);
    }
    for(let value of list.values()){
        console.log('value',value);
    }
    for(let [key,value] of list.entries()){
        console.log('entries',key,value);
    }
    list.forEach(function(item){
        console.log('forEach',item);
    })

}
{
    let weakList = new WeakSet();

    let args = {};
    weakList.add(args);
    console.log('weakList',weakList);


}
{
    let map = new Map();
    let arr = ['233'];
    let arr1 = ['233'];
    map.set(arr,456);
    map.set(arr1,46);
    console.log('map',map,map.get(arr));

}
{
    let map = new Map([['a',123],['b',234]]);
    console.log('map args',map);
    console.log('size',map.size);
    console.log('delete',map.delete('a'),map);
    console.log('clear',map.clear(),map);


}
{
    let weakMap = new WeakMap();
    let o = {};
    weakMap.set(o,122);
    console.log(weakMap.get(o));

}
{
    //数据结构横向对比，增，查，改，删
    let map = new Map();
    let array = [];
    //增
    map.set('t',1);
    array.push({t:1});

    console.log('map-array',map,array);
    //查
    let map_exist = map.has('t');
    //let array_exist = array.find(item => item.t);//t存在返回对应的元素
    array.forEach(item => item.t? item.t:'');

    console.info('search',map_exist,array);

    //改
    map.set('t',2);
    array.forEach(item => item.t? item.t = 2:'');
    console.log('modify',map,array);

    //删
    map.delete('t');

    let index = array.findIndex(item => item.t);
    array.splice(index,1);
    console.log('delete',map,array);
}
{
    //Set与Array
    let set = new Set();
    let array = [];

    //增
    let obj = {t:1};
    set.add(obj);
    array.push({t:1});
    console.log('add',set,array);

    //查
    let set_exist = set.has(obj);
    let array_exist = array.find(item => item.t);
    console.log('search',set_exist,array_exist);
    //改
    set.forEach(item =>item.t?item.t = 3:'');
    array.forEach(item =>item.t?item.t = 3:'');
    console.log('modify',set,array);

    //删
    set.forEach(item =>item.t? set.delete(item):'');
    let index = array.findIndex(item => item.t);
    array.splice(index,1);
    console.log('delete',set,array);



}
{
    let item = {t:1};
    let map = new Map();
    let set = new Set();
    let obj = {};

    //增
    map.set('t',1);
    set.add(item);
    obj['t'] = 1;
    console.log('add',map,set,obj);

    //查
   console.log( {map_exist:map.has('t'),
   set_exist:set.has(item),
    obj_exist:'t' in obj});

    //改
    map.set('t',2);
    item.t = 2;//Set如果没有定义item,要便利，取得含t的item，
    obj['t'] = 2;
    console.log('modify',map,set,obj);

    //删
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.log('delete',map,set,obj);


}
