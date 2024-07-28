// function outer(a){
//     console.log("hey");
//     a() //inner function
// }
// outer(
// function inner(){
//     console.log("inner");
//  }
// )
// outer(inner)

/////////////////////////////////////////////////////////
///Asynchronous

// setTimeout(()=>{
//     console.log('one');
// },1000) //run only one time and it is part of wevAPI

 let id=setInterval(()=>{
         console.log('one');
     },1000); //run infinite without ony condtion and it is part of wevAPI

var i=0;

     for(  var i=0;i<=10;i++)
     {
        if(i!=10){
        console.log(id);   
     }
     else{
        clearInterval(id);
     }
    }

console.log('three');
console.log('two')