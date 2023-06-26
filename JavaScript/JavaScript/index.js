/*
function checkMood(mood,goodCallback, badCallback){
    if(mood ==="good"){
        goodCallback();
    }else{
        badCallback();
    }
}

function cry(){
    console.log("ACTION :: CRY");
}

function sing(){
    console.log("ACTION :: SING");
}

function dance(){
    console.log("ACTION :: DANCE");
}

checkMood("good",sing,cry);

//콜백함수: 함수의 파라미터에 함수를 넘겨주는 것임.

//객체를 만드는 방법
//1. 객체 생성자를 이용함
//let person = new Object();

//2. 객체 리터럴 방식
let o = {
    key:"value", //프로퍼티 (객체 프로퍼티)
    key1:"value2",
    key2 : true,
    key3: undefined,
    key4: [1,2],
    key5: function () {}
};
//프로퍼티의 value에는 어떠한 자료형도 올 수 있다.
//console.log(o.key1);
//점표기법: 객체이름.프로퍼티 이름

//console.log(o["key1"]);

let person = {
    name : "허민영",
    age: 23,
    say : function(){
        console.log(`안녕 나는 ${this["name"]}`);
    }
};
//프로퍼티 추가, 수정
person.location ="한국";
//person["gender"] = "여성"

console.log(person);

//프로퍼티 삭제
delete person.location;
//위의 방식으로하면 삭제는 되지만 메모리 사용은 여전하다
//person.name = null;
//이렇게 널값으로 넣어주면 메모리의 사용도 막을 수 있다.
console.log(person);
person.say();

console.log(`name: ${"name" in person}`)
//person객체에 name이라는 프로퍼티가 있느냐라고 물어보는 것 true로 나옴
console.log(`gender: ${"gender" in person}`)

*/
/*
//배열
let arr  = [1,2,3,4]; //배열 리터럴, 모든 자료형이 들어올 수 있음
arr.push(5)
arr.push({key:"value"});

console.log(arr[0]);
console.log(arr[2]);
console.log(arr);

let len = arr.length;

console.log(len);
*/

//배열 내장 함수(forEach, map,includes,indexOf,findIndex, find, sort, join)

//  const arr = [1,2,3,4];
// const newArr = [];
// arr.forEach((element) => {
//     newArr.push(element * 2)    
// });
// console.log(newArr)

// const newArr = arr.map((ele)=>{
//     return ele *2;
// })

// let number = 3;

// arr.forEach((elm)=>{
//     if(elm === number){
//         console.log("true");
//     }
// })

// console.log(arr.includes(number));
// console.log(arr.indexOf(number));


// const colors = [
//     {num: 1, color: "red"},
//     {num: 2, color: "black"},
//     {num: 3, color: "green"},
//     {num: 4, color: "blue"}
// ];

// // let number =3;
// // //findIndex와 find의 차이점
// // console.log(colors[
// //         colors.findIndex((elm)=> elm.color ==="blue")
// //     ]);


// //     console.log(
// //         colors.find((elm)=> elm.color ==="blue")
// //     );


// //배열 필터링
// console.log(colors.filter((elm)=> elm.color==="blue"));

// //배열 자르기

// console.log(colors.slice((0,2)))

// //배열 붙이기
// const arr1 = [
//     {num: 1, color: "red"},
//     {num: 2, color: "black"}
// ]
// const arr2 = [
//     {num: 3, color: "green"},
//     {num: 4, color: "blue"}
// ]

// console.log(arr1.concat(arr2));


//배열 정렬
// let chars =["나","다","가"];
// chars.sort();
// console.log(chars);

let nums = [0,1,5,2,5,10,34,6];

const compare= (a,b)=>{
    //1. 같다.
    //2. 크다
    //3. 작다.
    if(a>b){
        return 1;
    }
    if(a<b){
        return -1;
    }
    return 0;

};
nums.sort(compare);

console.log(nums);

//
const str =["허민영","님","안녕하세요","또오셨군요"];

console.log(str.join(" "));

