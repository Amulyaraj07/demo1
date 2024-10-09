//var and let

function sayhello(){
    for(let i=0;i<5;i++){
        console.log(i);
    }
}

sayhello();


//cannot use before initialisation
//console.log(z);
//console.log(a);
// var a=5;
// //let z=110;
// console.log(a);

// const b=10;

// b=5;//it will give error because const cannot be redeclared or reassigned

// console.log(b);


//classes and Objects

class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(this.name,this.age);
    }
}

var stuObj=new Student("Amulya",20);
stuObj.display();

//static key word is used to make static function

c = (a,b)=>{
    return a+b;
}

console.log(c(3,10));

var names= new Array("Amulya", "Harshit","Abhijeet","CSE","React");

var f=(names)=>{
    for(let i=0;i<names.length;i++){
        console.log(names[i]);
    }
}

f(names);

//Array.from method

let name1=Array.from("Amulya");
console.log(name1);

//concat method

var num=[1,2,3];
var num1=[4,5,6];
var numf=num.concat(num1);
console.log(numf);

//array.of

let name = Array.of(42,10,12,4);
console.log(name);
console.log(name.length);

//Array.copyWithin()
var num=[1,2,3,4,5];
var num1=num.copyWithin(2,0,3);
var num2=num.copyWithin(1,0);
var num3=num.copyWithin(0);
console.log(num1);
console.log(num2);
console.log(num3);

//Array.prototype.find() it returns the first value staisfying the criteria

const numbers=[4,9,15,25,29];
let first=numbers.find(myFunction);

function myFunction(value,index,array){
    return value>12;
}
console.log(first);

//map

const numbers1=[4,9,15,25,29];
const newArr=numbers1.map(myFunction1)

function myFunction1(num){
    return num*10;
}

console.log(newArr);
//index of

var index=[12,15,130,8,10].indexOf(130);
console.log(index);

//spread operator

var a=[1,2,3];
var b=[4,5,6];
var c=[...a,...b];
console.log(c);


let colors=["Red","Yellow"];
let newColor=[...colors];
newColor.push("Green");
console.log(newColor);

//Arrays.entries

let entr=["Red","Yellow","Green","Blue"];
var show=entr.entries();
for(i of show){
    console.log(i);
}

//Arrays.values

// let clr=["Red","Yellow","Green","Blue"];
//var show=clr.values();
//console.log(...show);

//Array.fill

// let clr=["Red","Yellow","Green","Blue"];

// var show=clr.fill("pink",2,3);
// console.log(...show);

//Array destructuring
// var arr=["hello","world"];
// var [a,b]=arr;
// console.log(a,b);

let clr=["Red","Yellow","Green","Blue","abd","cdx"];
var [a,b,...args]=clr;
console.log(a);
console.log(b);
console.log(args);


//swaping
var x=100;
var y=200;

[x,y]=[y,x];
console.log(x);
console.log(y);

//function

function calculate(a,b){
    const add=a+b;
    const sub=a-b;
    const mul=a*b;
    const div=a/b;

    return [add,sub,mul,div];
}

const [add,sub,mul,div]=calculate(3,4);
console.log(add);
console.log(sub);

//spread operators

let color=["Red","Yellow"];
let newColors=[...color,"blue","green","pink"];
console.log(newColors);


//Destructuring objects

//old way

const vehicleOne={
    brand:'Ford',
    model:'Mustang',
    type:'car',
    year:2021,
    color:'red'
}

myvehicle(vehicleOne);

function myvehicle(vehicle){
    const message='My'+vehicle.type +'is a'+vehicle.color+' '+vehicle.brand+' '+vehicle.model+'.';
}

//new way

// const vehicleTwo={
//     brand:'Ford',
//     model:'Mustang',
//     type:'car',
//     year:2021,
//     color:'red'
// }

// myvehicle(vehicleTwo);


//map method

