////call back hellllllllllllllllllllllll
function step1(fn){
    console.log(fn);
    setTimeout(()=>{
        console.log('select photo')
        fn()
    },5000)
    
}
function step2(fn){
    
    setTimeout(()=>{
        console.log('filteredd')
        fn()
    },4000)
}
function step3(fn){
    setTimeout(()=>{
        console.log('captioneddd')
        fn()
    },3000)
}
function step4(){
    setTimeout(()=>{
        console.log('posteddd')
        
    },1000)
}
// step1()
// step2()
// step3()
// step4()
step1(()=>{
    step2(()=>{
        step3(()=>{
            step4()
        })
    })
})