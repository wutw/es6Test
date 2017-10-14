/**
 * Created by wtw on 2017/10/3.
 */
/*{
    console.log('a','\u0021');
    console.log('b','\u20BB7');
    console.log('c','\u{20BB7}');
}*/
{
    let s = '𠮷a';
   for(let i of s){
       console.log(i.codePointAt(0).toString(16));
   }
}

{
    let s = '\u{20BB7}a';
    for(let i = 0;i<s.length;i++){
        console.log(s[i]);
    }
    for(let j of s){
        console.log('es6',j);
    }

}
{
    let name = 'lora';
    let sex = 'girl';
    let template = `my name is ${name},my sex is ${sex}`;
    console.log(template);
}
{
    let total = 30;
    let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

    function passthru(literals) {
        let result = '';
        let i = 0;

        while (i < literals.length) {
            result += literals[i++];
            if (i < arguments.length) {
                result += arguments[i];
            }
        }

        return result;
    }

    console.log(msg) ;// "The total i
    console.log(String.raw`Hi\n${2+3}!`);
}