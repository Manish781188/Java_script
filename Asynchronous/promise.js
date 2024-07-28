
///promise

// let promise =new Promise((res,rej)=>{
//  let reason='Barish'
//  if(reason==='barish'){
//     rej('F')
//  }
//  else{
//     res('T')
//  }
// })
// console.log(promise);
// promise.then((a)=>{
//     console.log('resolve',a);
// }).catch((b)=>{
//     console.log('errer',b);
// })

// /////////////////////
let step1=  function(){
   return new Promise((res,rej)=>{
    setTimeout(()=>{
        res('select photo')
    
    },5000)
   })
     
}
let step2=  function(){
    return new Promise((res,rej)=>{
     setTimeout(()=>{
         res('filtereddd')
     
     },4000)
    })
}     

 let step3=  function(){
    return new Promise((res,rej)=>{
     setTimeout(()=>{
         res('captiosssss')
     
     },3000)
    })   
 }
let step4=  function(){
    return new Promise((res,rej)=>{
     setTimeout(()=>{
         res('postedd')
     
     },1000)
    })    
 }
  step1().then((data)=>{
    console.log(data);
    return step2().then((filter)=>{
       console.log(filter);
       return step3().then((caption)=>{
        console.log(caption);
        return step4().then((post)=>{
            console.log(post);
        })
       })
    })
})