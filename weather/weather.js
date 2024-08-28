let ApiKey='9f6290d6cda9a36a63755fadee71f83d'
let inp=document.querySelector('input')
let btn=document.querySelector('button')
  let div=document.querySelector('div')
btn.addEventListener('click',(e)=>{
    let city =inp.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data)
        console.log(data.main.temp);
        let h1=document.createElement('h1')
        h1.innerText=data.main.temp
        div.appendChild(h1)
    })
})

