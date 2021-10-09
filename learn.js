/* class Person {
    constructor() {
        this.name = "x";

    }
}
Person = class AnotherPerson {
    constructor() {
        this.name = 'Y'
    }
}
const member = new Person(); 
console.log(member.name); */




//static method vs. non static one 
/* class Color{
    constructor(newColor = 'green'){
        this.newColor = newColor
    }
    static colorChange(newColor){
        this.newColor = newColor; 
        console.log(this.newColor);
    }
    colorChange(newColor){
        this.newColor = newColor; 
        console.log(this.newColor);
    }
}
const myColor = new Color('purple')
myColor.colorChange('orange') */





/* const {first: last} = {first: 'first', last: 'last'}
console.log(last); // first
console.log(first); // undefined  */


/* var isOk = new Boolean('false')
if(isOk){
    console.log('hi');
} */


/* var myHash = new Array(); 
myHash['key1'] = 'var1'; 
myHash['key2'] = 'var2'; 
myHash[0] = '222'
for(var i in myHash){
    if(myHash.hasOwnProperty(i)){
        console.log(i);
    }
}
console.log(myHash.length); // 1
myHash.length = 3
console.log(myHash.length); // 3
 */


/* console.log(undefined == null); //  true */

/* console.log(typeof (new(class{test(){}}))); */


//ES6 does not support overloading at all 


/* function getName(){
    return 'whateve'
}
const obj = {
    id: 1, 
    name: 'j', 
    [getName()]: true
}
console.log(obj); */

/* input: A, B, C
A = 4 
B = 6 
C = 7
单一选择组合至少需要多少测试用例
A. 3 -- :)
B. 7
C. 15
D. 17 

测试设计时，通常会涉及因子组合，常见的因子组合包括：EC、BC、AC、Pair-wise等，各组合特点如下：

单一选择组合（Each Choice）：每个因子的枚举值，至少出现一次；组合数量=最大因子枚举个数；
基本选择组合（Base Choice）：以基本组合为基础，每次修改一个枚举值；组合数量=所有枚举值个数- 因子个数+1；
全组合（All Combinations）：所有因子的枚举值全部组合一次；组合数量=各因子枚举值个数相乘；
Pair-wise组合（Pair-wise）：任意两个因子的枚举值至少组合一次；组合数量>=因子最大枚举值相乘；

当前可通过iCase_V3.0用例设计辅助工具、PICT等工具手工生成，本博客提供一种代码生成方式
*/


/* 
代码行数：文件不超2000行，方法不超50行（不包含注释、空行）
代码嵌套：不超过4层
每行限长120个窄字符
方法参数个数不超过5个
 */

/* 不支持多继承 */

/* 代码设计的第一原则是
代码长度短小 */

/* var person = {
    name: "Jason",
    shout() {
        console.log(this.name);
    },
    hello: () => {
        console.log(this);
    }
};
person.shout()
person.hello() */


// [1,2,3].reduce((total, n) => {
//     return total + n
// }, 0)

/* [1, 2, 3].map(x => x * x) */

/* there is no overloading in js  */


/* function callback(){
    console.log(this);
}

function Foo(){}; 
Foo.prototype.test = function(){
    callback(); 
    $(document).on('click', callback); 
    $(document).trigger('click');
    callback.call(this);

}

new Foo().test();  */

/* var x = 1;
try {
    var x = 2
} catch (err) {
    console.log(this.x);
} */


/* 
let str = 'Hi'
str[0] = 'h'
str[1] ='ello'
str = str[0] + str[1]
console.log(str); // 'Hi' because strings are immutable in js 
 */


/* 
function appLog(){
    var args = Array.prototype.slice.call(arguments); 
    args.unshift('your app name')
    console.log.apply(console,args);
}
appLog('js') // your app name js 
*/


// no idea what the answer is 
'use strict'
let greet = {
    text: 'hello',
    sayhi: function () { console.log(this.text); },
    saybye: function () { console.log('Bye'); },
    set: na => {
        this.text = na;
    }
};
greet.set('world');
(greet.text === 'hello' ? greet.sayhi : greet.saybye)()


'use strict';
let greet = {
    text: "hello",
    sayhi: function () { console.log(this.text); },
    sayBye: function () { console.log("Bye"); },
    set: na => {
        this.text = na;
    }
};

greet.set("world");
(greet.text == "hello" ? greet.sayhi : greet.sayBye)();


let greet = {
    text: "hello",
    sayhi: function () { console.log(this.text); },
    sayBye: function () { console.log("Bye"); },
    set: na => {
        this.text = na;
    }
};
greet.set("world");
(greet.text == "hello" ? greet.sayhi : greet.sayBye)();


let greet = {
    text: "hello",
    sayhi: function () { console.log(this.text); },
    sayBye: function () { console.log("Bye"); },
    set: na => {
        this.text = na;
    }
};
greet.set("world");
(greet.text == "hello" ? greet.sayhi() : greet.sayBye());

// 0, 1, 2 2
/* let number = 0
function handleThings(index = number++){
    console.log(index);
}
handleThings()
handleThings()
handleThings() */


/* function printNumber(...args){
    console.log(typeof args);
    console.log(args);
}
printNumber(100)
// object
//[100] */

/* JSON.parse('{"1": 1, "2" : 2, "3": {"4": 4, "5": {"6": 6}}}', function (k, v) {
    console.log(k);
    return v
})
//124653 */


/* function f(){
    return 'global'
}
function test (useLocal){
    let g = f, res = [];
    if(useLocal){
        g = function(){return 'local'}
        res.push(g())
    }
    res.push(g())
    return res
}
console.log(test(true)); // ['local', local'],
console.log(test(false)); // ['global'] */

/* var a = []
for(var i = 0; i < 10; i++){
    a[i] = function(){
        console.log(i);
    }
}
a[6](); */

/* for(let i = 0; i < 3; i++){
    let i = 'abc'; 
    console.log(i);
} */
