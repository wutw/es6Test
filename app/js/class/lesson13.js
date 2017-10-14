/**
 * Created by wtw on 2017/10/12.
 */
{//es5回调
    let ajax = function(callback){
        console.log('aa');
        setTimeout(function(){
            callback && callback.call()
        },1000);
    };
    ajax(function(){
        console.log('dd');
    })
}
{
    let ajax =function(){
        console.log('2');
        return new Promise(function(resolve,reject){
            //then方法,resolve执行下一步操作，reject中断当前操作
            setTimeout(function(){
                resolve();
            },1000);

        })
    };
    ajax().then(function(){
        console.log('promise','timeout2');
    })

}
{
    //多步调用
    let ajax =function(){
        console.log('3');
        return new Promise(function(resolve,reject){
            //then方法,resolve执行下一步操作，reject中断当前操作
            setTimeout(function(){
                resolve();
            },1000);

        })
    };
    ajax().then(function(){
        console.log('timeout3');
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve()
            },1000);
        })
    }).then(function(){
        console.log('timeout4');
    })
}
{
    //捕获错误
    let ajax = function(num){
        console.log('4');
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                if(num>3){
                    resolve()

                }else{
                    throw new Error ('wrong');
                }
            },1000);
        })

    };
    ajax(6).then(function(){
        console.log('log',6);
    }).catch(function(err){
        console.log('catch',err);
    });
    ajax(3).then(function(){
        console.log('log',3);
    }).catch(function(err){
        console.log('catch',err);
    })
}
{
    //所有图片加载完再加载到页面
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.onload = function(){
                resolve();//放在函数里，不然会错
            };
            img.onerror = function(){
                reject(src);
            };
        })
    }
    function showImg(imgs){
        imgs.forEach(function(img){
            document.body.appendChild(img);
        })
    }
    Promise.all([//把多个Promise实例当作一个实例
        loadImg('http://i4.buimg.com/567571/dflef0720bea6832.png'),
        loadImg('http://i4.buimg.com/567551/2b07ee25b08930ba.png'),
        loadImg('http://i4.buimg.com/567751/5eb8190d6b2a1c9c.png')
    ]).then(showImg)
}
{ //一个图片加载完就加载到页面
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.onload = function(){
                resolve();//放在函数里，不然会错
            };
            img.onerror = function(){
                reject(src);
            };
        })
    }
    function showImg(img){
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);

    }
    Promise.race([//多个Promise实例一个改变，race实例改变
        loadImg('http://i4.buimg.com/567571/dflef0720bea6832.png'),
        loadImg('http://i4.buimg.com/567551/2b07ee25b08930ba.png'),
        loadImg('http://i4.buimg.com/567751/5eb8190d6b2a1c9c.png')
    ]).then(showImg)


}