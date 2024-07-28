let arr=[1,2,3,4,5,6,6]

// foreach
//  let newA = arr.forEach((value,index,array)=>{
//     console.log(value) // it is not return any value
//  })
    
//map
// let newArray = arr.map((value,index,array)=>{
//     return index // it is return any value
//  })
//  console.log(newArray)

//filter
// let filter_reduce_value = arr.filter((value,index,array)=>{
//     return value>4
// })
// console.log(filter_reduce_value)

//reduce
// let sum= arr.reduce( function(a,b,index,array){
//     return a+b
// })
// console.log(sum)

// find
let findnumber = arr.find((a,b,c)=>{
    return a==3
})
console.log(findnumber) //if value is find then function is stop