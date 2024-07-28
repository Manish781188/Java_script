
///promise

let promise =new Promise((res,rej)=>{
 let reason='Barish'
 if(reason==='barish'){
    rej('F')
 }
 else{
    res('T')
 }
})
console.log(promise);
promise.then((a)=>{
    console.log('resolve',a);
}).catch((b)=>{
    console.log('errer',b);
})







// ////call back hellllllllllllllllllllllll
// function step1(fn){
//     console.log(fn);
//     setTimeout(()=>{
//         console.log('select photo')
//         fn()
//     },5000)
    
// }
// function step2(fn){
    
//     setTimeout(()=>{
//         console.log('filteredd')
//         fn()
//     },4000)
// }
// function step3(fn){
//     setTimeout(()=>{
//         console.log('captioneddd')
//         fn()
//     },3000)
// }
// function step4(){
//     setTimeout(()=>{
//         console.log('posteddd')
        
//     },1000)
// }
