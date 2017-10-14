/**
 * Created by wtw on 2017/10/2.
 */
{
    let regex = new RegExp('xyz','i');
    let regex1 = new RegExp(/xyz/i);
    console.log(regex.test('xyz12'),regex1.test('xyz123'));
    let regex2 = new RegExp(/xyz/ig,'i');
    console.log(regex2.flags);


}
/*
{
    let b ='bbb-bb_b';
    let reg1 = /b+/g;
    let reg2 = /b+/y;
    console.log('one',reg1.exec(b),reg2.exec(b));
    console.log('two',reg1.exec(b),reg2.exec(b));
    console.log(reg1.sticky,reg2.sticky);
}*/
/*
{
    console.log('1',/^\uD83D/.test('\uD83D\uD82A'));
    console.log('2',/^\uD83D/u.test('\uD83D\uD82A'));

    let s ='寄=' ;
    console.log('u-1',/^.$/.test(s));
    console.log('u-2',/^.$/u.test(s));

}*/
