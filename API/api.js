let ul=document.querySelector('ul')

fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>{
    //   console.log(res,'hee');  //meta data
    return res.json()
      
}).then((data)=>{
    console.log(data[0].id)
    // let li=document.createElement('li')
    //   li.innerText=data[0].id
    // ul.appendChild(li)
    // data.map((a)=>{
    // let li =document.createElement('li')

    //     console.log(a.title)
    //  li.innerText=a.title
    //  ul.append(li)
    // })
}).catch((err)=>{
    console.log(err);
    
})