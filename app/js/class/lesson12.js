/**
 * Created by wtw on 2017/10/12.
 */
{
    class Parent{//定义类方法,es5用构造函数function 类名（）{}
        constructor(name='wtw'){
            this.name = name;
        }
    }
    let v_parent = new Parent('v');
    console.log('构造函数和实例',v_parent);
}
{
    class Parent{
        constructor(name = 'wtw'){
            this.name = name;
        }
    }
    class Child extends Parent{

    }
    console.log('继承',new Child());
}

{
    class Parent{
    constructor(name = 'wtw'){
        this.name = name;
    }
    }
    class Child extends Parent{
        constructor(name = 'child'){
            super(name);//super子类向父类传递改变值，参数是要做改变的父类中参数
            this.type = 'child';//子类自己的参数放在super后面
        }

    }
    console.log('继承传递参数',new Child('hello'));//参数覆盖默认值


}

{
   /* //getter,setter
    class Parent {
        constructor(name = 'wtw') {
            this.name = name;
        }


        get longName(){//getter定义longName属性
           return 'mk'+this.name;
        }
        set longName(value){
            this.name = value;

        }
    }
    let v = new Parent();
    console.log('getter',v.longName);
    v.longName = 'hello';
    console.log('setter',v.longName);*/

    class Parent{
        constructor(name = 'mk'){
            this.name = name;
        }
        get longName(){
            return 'mk'+this.name;
        }
        set longName(value){
            this.name = value;

        }
    }
    class Child extends Parent{
        constructor(name='ll'){
            super(name);
            this.age = 11;
        }

    }
    let parent = new Child();
    console.log(parent.longName,parent.age);

    parent.longName = 'hello';
    console.log(parent.longName);

}
{//静态方法
    class Parent{
        constructor(name){
            this.name = name;

    }
        static tell(){//静态方法
            console.log('tell');
        }

    }
    Parent.tell();//静态方法调用直接用对象，无需实例化

}
{
    //静态属性
    class Parent{
        constructor(name = 'ee'){
            this.name = name;
        }
    }
    Parent.type = 'dd';
    console.log('静态属性',Parent.type);
}