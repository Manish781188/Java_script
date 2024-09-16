//1    // array of object
// let data=[
//     {
//         id:1,
//         name:"rahul"
//     },
//     {
//         id:2,
//         name:"modi jii"
//     },
//     {
//         id:3,
//         name:"rakesh"
//     }
// ]
// data.map((a)=>{
//     console.log(a.name)
// })
// console.log(data[1].id)

// let newarray=  data.filter((a)=>{
//     return a.id>1
// })
// newarray.map((b)=>{
//     console.log(b.name)
// })
//2     /////////////////
// data.filter((a)=>{
//     return a.id>1
// }).map((b)=>{
//     console.log(b.name)
// })
/////////////////////////////////////////////

// // sum of odd number
//  let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//  let newarr1=arr.filter((a)=>{
//  return a>2
// })
// console.log(newarr1);

// let newarr2= newarr1.filter((b)=>{
//     return b%2!=0
// })
// console.log(newarr2)
// let newarr3 = newarr2.reduce((value,b)=>{
//     return value+b
// })
// console.log(newarr3)


////////////////////////////////////////////////////////////// Reduce function

let n=prompt("Enter a number that you want to find sum ")
let arr=[]
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
let sum=arr.reduce((rec,curr)=>{
return rec+curr;
})
 console.log(sum);

 
 let factorial=arr.reduce((rec,curr)=>{
    return rec*curr    
 })
 console.log(factorial);
 