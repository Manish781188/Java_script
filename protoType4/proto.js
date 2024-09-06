// let obj=
// {
//     id:1,
//     name:"hyyyyyyyy"
// }
// console.log(obj. toString())


// let arr=[3,3,5,56,6]

// let str="heeeeeeeeeeeee"





//////////////data base
// localStorage.setItem('data','helloooooooooooooo')
// let a= localStorage.getItem('data')
// console.log(a);


////////////form

let btn=document.querySelector('button')
let inp=document.querySelector('input')
btn.addEventListener('click',()=>{
    localStorage.setItem('data',inp.value)
 let a= localStorage.getItem('data')
 console.log(a);
})

