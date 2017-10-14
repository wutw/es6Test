/**
 * Created by wtw on 2017/10/9.
 */
{
    function test(x,y = ' world!'){
        console.log(x + y);
    }
    test('hello');
}

{
    function a(...args){//args是数组, ...args为参数1,2,4
        for(let value of args){
            console.log(value);
        }
    }
    a(1,3,4);
}
{
    let ele1 = a => a + 2;
    console.log('arrow',ele1(2));
    let ele2 = () => 5;
    console.log('arrow1',ele2());
}

