/*
//객체 리터럴

let userss ={
    name :"Mike",
    age : 22,
}
//객체를 여러개 만들어야하는 상황이 있음 회원, 상품명
//이때 사용하는 것이 생성자 함수
function user(name, age) { //함수의 첫글자는 대문자
    this.name = name,
    this.age  = age,
    this.sayName = function(){ //메소드 추가
        console.log(this.name);
    }
}

//new 함수명(); 빠르고 일관성있게 객체를 만들 수 있다.
let user1 = new user("MIKE", 22);
let user2 = new user("HEO", 23);
let user3 = new user("JIN", 24);

let user4 = new user("HAN", 25);
user4.sayName();

function Item(title, price){
    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log('가격은${price}원 입니다.');
    }
}

const item1 = new Item("인형", 3000);
const item2 = new Item("가위", 4000);
const item3 = new Item("지갑", 5000);

console.log(item1, item2, item3);
item3.showPrice();


//------------------------------------------//

/*객체에서 사용할 수 있는 메소드*/
/*
let a = 'age';
const use = {
    name :'MIKE',
    [a] : 30, //변수 a에 할당된 값이 들어감 == age : '30 ; 
    //computed poperty 계산된 프로퍼티
};
const users = {
    [1 + 4] : 5,
    ["안녕"+"하세요"]:"hello"
}
console.log(users);

//메소드
//1. Object.assign() : 객체 복제

const newUser = Object.assign({},users);
//{} >> 빈객체, 초기값

const newUser1 = Object.assign({ gender :'male'} , users);

console.log(newUser, newUser1);

//2. Object.keys() : 키 배열 반환
console.log(Object.keys(newUser1));

//3.Object.values() :값 배열 반환
console.log(Object.values(newUser1));

//4.Object.entries() :키/값 배열 반환
console.log(Object.entries(newUser1));

//4.Object.fromEntries() :키/값 배열을 객체로

function makeObj(key, val){
    return {
        [key]: val,
    };
}
const obj = makeObj("성별", 30);
console.log(obj);
*/

//------------------------------------------//

//심볼
//property key: 문자형
//property key: Symbol형으로도 가능 유일한 식별자를 만들때 사용됨,

const a = Symbol();
const b = Symbol();

//a===b >>  false
//a == b >> false
//심볼: 유일성 보장
const id = Symbol('id');
const id2 = Symbol('id');
//id===id2 >>  false
//id == id2 >> false
const use = {
    name :'MIKE',
    age : 30,
    [id] :'myid'
}
console.log(use);

console.log(Object.keys(use));

//Symbol.for():전역 심볼 이름이 같으면 같은 객체를 가리킴
//하나의 심볼만 보장받을 수 있음
//없으면 만들고, 있으면 가져오기 때문
//Symbol 함수는 매번 다름 심볼 값을 생성하지만, 
//Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 심볼을 공유

const id3 = Symbol.for('id');
const id4 = Symbol.for('id');
//id3 == id4
Symbol.keyFor(id3); //'id'

//전역심볼이 아니면 keyFor사용 불가능
//대신 description으로 이름을 알 수 있음
//id4.description;


//숨겨진 심볼 키 보는 법

const id5 = Symbol('id');
const user = {
    name: 'MIKE',
    age: 30,
    [id5] : 'myid'
}

Object.getOwnPropertySymbols(user); //심볼값만 볼 수 있음 
Reflect.ownKeys(user);//심볼형 키를 포함한 모든 키를 보여줌
//대부분의 라이브러리 , 내장함수들은 위의 메소드를 사용하지 않음
//유일한 프로퍼티를 추가하고 싶을 때 심볼을 사용하면 된다.

//다른 사람이 쓴 코드
const other_user={
    name: "MIKE",
    age: 30,
};

for(let key in other_user){
    console.log(`his ${key} is ${other_user[key]}.`);
}

//내가 작업
const showName = Symbol("show name");
user[showName] = function(){
    console.log(this.name);
};

user[showName]();


//------------------------------------------//
//Number,Math
//toString 10진수 ->2진수/16진수
let num = 10;
num.toString(); //"10"
num.toString(2); //"1010"
let num2 =255;
num2.toString(16); //"ff"

Math.PI;
let num1 = 5.1;
let num2 = 5.7;

Math.ceil(num1); //올림
Math.floor(num1); //내림
Math.round(num1); //반올림

let userRate = 30.1234;
//요구사항 둘째자리까지 표현(셋째 자리에서 반올림)
Math.round(userRate *100)/100
userRate.toFixed(0);//"30"
userRate.toFixed(6);//"30.123400"
//문자열로 반환하기 때문에 
Number(userRate.toFixed(6)); //Number을 이용하여 숫자로 변경한 다음에 사용


//isNaN()
//NaN? 표현 불가능한 수치형 결과를 나타내는 값 //자신과도 같다고 하지 않는다

let x = Number('x');
x == NaN //false 
X === NaN //false
NaN == NaN //false

isNaN(X); //true
isNaN(3); //false

//parseInt() 문자열을 숫자로 
let margin ='10px';

parseInt(margin); //10 읽을 수 있는 만큼 읽고 반환함
isNaN(margin); //NaN

let redColor = "f3";
parseInt(redColor); //NaN
//숫자가 아닌 문자로 시작하면 NaN을 반환한다.

parseInt(redColor,16); //243 >>16진수로 바꾼 것

parseInt('11',2); //3

//parseFloat()
let padding ='18.5%';

parseInt(padding); //18 
parseFloat(padding); //18.5

Math.random()
//1에서 100사이 임의의 숫자를 뽑고 싶다면?
Math.floor(Math.random*100)+1;

//Math.max() Math.min()
//Math.abs(): 절대값
//Math.pow(n,m) :제곱
//Math.sqrt():제곱근
Math.sqrt(16); //4


