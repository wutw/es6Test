/**
 * Created by wtw on 2017/10/12.
 */
{
    let arr = ['hello','world'];
    let map = arr[Symbol.iterator]();//数组内部实现这个接口，Symbol.iterator方法名称，
                                    // ()表示方法要执行，返回对象map，有next方法
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
}

{
    let obj = {//对象没有iterator接口，自己定义
        start:[1,3,2],
        end:[7,9,7],
        [Symbol.iterator](){//es6新增方法方式
            let self = this;//没有this执行会出错
            let index = 0;
            let arr = self.start.concat(self.end);//合并数组
            let len = arr.length;
            return{//返回对象，里有next方法
                next(){
                    if(index < len){
                        return{
                            value:arr[index++],//返回value,done两个值
                            done:false

                        }

                    }else{
                        return{
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
        }

    };
    for(let key of obj){
        console.log(key);
    }


}

{
    let arr = ['hello','world'];
    for(let value of arr){
        console.log(value);

    }
}