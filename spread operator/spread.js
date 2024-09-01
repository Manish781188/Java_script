let arr=[1,3,5,6,7,43,34]
let num=[3,5,3,2,45,4,32,54 ,...arr] //... is spread operator

// console.log(num.concat(arr))
console.log(num);
 let obj={
    id :1,
    name:"heeee"
   
 }
let obj1={
    id:2,
    lastName:"hyyyyyyyyy",
    ...obj ///spread operator
}
console.log(obj1);


////////Rest  operator
function sum(a,b,...num){
    console.log(num);
    let sum=0;
    for(let i of num){
        sum+=i;
    }
    console.log(sum+a+b);
    
}
sum(5,5,3,34,5,5,3,5,53)

///////////Destructuring
let arrr=[2,4,6,4,3,34,5,4,3]
let [a,b,c,d,e,f,g,h,i]=arrr
console.log(d+e+h);
let object={
    id:1,
    name:'hyyy'
}
// console.log(object.id);
let{id,name}=object
console.log(id,name);
