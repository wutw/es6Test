/**
 * Created by wtw on 2017/9/30.
 */
/*
function test(){
    const PI = 3.12;
    const k = {
        a:1
    };
    k.a=12;
    console.log(PI,k);
}
test();*/
var tmp = new Date();

function f() {
    console.log(tmp);
    if (true) {
        var tmp = 'hello world';
    }
}

f();