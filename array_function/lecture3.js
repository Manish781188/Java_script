// const add=(a,b=9)=>{ //parameter
//     console.log(a+b)
// }
// add(6,6)//first priority argument


// Array functions

// let arr = [12,4,6,3,6,7]
// arr.pop()
// arr.push(7)
// arr.shift()
// arr.unshift(40)
// console.log(arr)
// console.log(arr.length);
// console.log(arr.includes(6));//check value is present in the array or not 


// Object

// let a={   // a is a object
//     id:20,
//     firstName:"hiiiiiiiiiii",
//     isPass:true
// }
// console.log(a.id)
// console.log(a);

//function using object
// function sum(a){
//     console.log(`${a.name}  ${a.lastName}`);
// }
// let obj={
//     id:1,  // id is keys and 1 is value
//     name:"hello",
//     lastName:"hii"

// }
// sum(obj)

// object inside the function

// function cal(num1,num2){

//     let obj={
//         sum:num1+num2,
//         sub:num1-num2,
//         mul:num1*num2
//     }
//     return obj
// }
// let a=cal(5,4)
// console.log(cal(5,3));
// console.log(a.sum);
// console.log(cal(5,8).sum);       

// function in side the Object

// let obj={
//     a:10, b:20,
//     sum:function(){
//         // console.log(this);
//         return this.a+this.b
//     }
// }
// console.log(obj.sum());
