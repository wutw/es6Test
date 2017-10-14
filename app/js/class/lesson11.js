/**
 * Created by wtw on 2017/10/12.
 */
{
    let obj = {
        time:'2017-01-11',
        name:'net',
        _r:123
    };//原始对象，存真实数据
    let monitor = new Proxy(obj,{
        //拦截对象属性的读取
        get(target,key){
            return target[key].replace('2017','2018');//不管读取什么属性，把属性中属性值的2017替换为2018

        },
        //拦截对象设置属性,只有name属性值可修改
        set(target,key,value){//target为对象，key设置的属性，value设置的值
            if(key == 'name'){
                return target[key] = value;
            }else{
                return target[key];
            }


        },
        //当前对象是否拥有一个属性
        has(target,key){//只暴露name属性
            if(key === 'name'){
                return target[key];

            }else{
                return false;
            }

        },
        //拦截删除
        deleteProperty(target,key){
            if(key.indexOf('_')>-1){
                delete target[key];//将带_的属性删除
                return true;
            }else{
                return target[key];
            }
        },
        //拦截Objects.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        ownKeys(target){
            //keys不为time属性的返回
            return Object.keys(target).filter(item =>item!='time');

        }


    });//生成obj代理对象


    //用户访问代理对象，操作后结果返回给原始对象obj
    console.log('get', monitor.time);//读取原始对象的time属性
    monitor.time = '2019';
    monitor.name = 'Yang';
    console.log('set',monitor);
    console.log('has','name' in monitor,'time' in monitor);
    console.log('ownKeys',Object.keys(monitor));

    delete monitor.name;
    delete monitor._r;
    console.log('delete',monitor);
}
{
    let obj = {
        time:'2017-01-11',
        name:'net',
        _r:123
    };

    //Reflect的get方法读取obj对象的time属性
    console.log('Reflect get',Reflect.get(obj,'time'));
    Reflect.set(obj,'name','Yang');
    console.log('Reflect set',obj);
    console.log('Reflect has',Reflect.has(obj,'name'));

}
{

    //用Reflect与Proxy实现解耦的数据校验
    function validator(target,validator){
        return new Proxy(target,{
            _validator:validator,//保存默认值
            set(target,key,value,proxy){
                if(target.hasOwnProperty(key)){//当前对象有无key值
                    let va = this._validator[key];
                    if(!!va(value)){
                        //如果存在且满足条件，用代理把数据返回到真实对象上
                        return Reflect.set(target,key,value,proxy);
                    }else{
                        throw Error(`不能设置${key}到${value}`)
                    }
                }else{
                    throw Error(`${key}不存在`);
                }

            }

        })
    }

    const personValidators = {
        name(val){
            return typeof val === 'string'
        },
        age(val){
            return typeof val === 'number'&& val>18;

        }

    };
    class Person{
        constructor(name,age){
            this.name = name;
            this.age = age;
            return validator(this,personValidators);
            // validator里proxy对象代理了Person对象，外面通过proxy操作Person，personValidators提供验证条件
        }
    }
    const person = new Person('LiLei',30);//初始值时不调用Proxy对象
    console.log(person);
    person.name = 1; // 会报错--不能设置name到1

   /* function validator(target,validator){
        return new Proxy(target,{
            _validator : validator,
            set(target,key,value,proxy){
                if(target.hasOwnProperty(key)){
                    let va = this._validator[key];
                    if(!!va(value)){
                        return Reflect.set(target,key,value,proxy);
                    }else{
                        throw Error(`${key} can not match ${value}`);

                    }
                }else{
                    throw Error(`${key} is not exist`);

                }

            }
        })
    }
    const personValidators = {
        name(val){
            return typeof val === 'string';
        },
        age(val){
            return typeof val ==='number' && val>18;
        }
    };
    class Person {
        constructor(name,age){
            this.name = name;
            this.age = age;
            return validator(this,personValidators);
        }
    }
    const person = new Person('yy',22);
    console.log(person);
    person.a = 5;
*/





}