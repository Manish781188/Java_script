const arr = [
   ' https://media.istockphoto.com/id/1127245421/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background.webp?b=1&s=170667a&w=0&k=20&c=bPoh4FbWez1Za2_DfgYY2VlZ3F6RKtx9_OF8I5ZSpXU=',
   ' https://media.istockphoto.com/id/1202093022/photo/the-concept-of-unity-cooperation-teamwork-and-charity.webp?b=1&s=170667a&w=0&k=20&c=ThvIQ8JxwtkHwDbzsRAF5Gff6bTEDREvbas7Cdl22nY=',
 'https://media.istockphoto.com/id/1268636389/photo/asian-chinese-mid-adult-woman-helping-her-father-in-the-farm-greenhouse.webp?b=1&s=170667a&w=0&k=20&c=siw2iCoOOzLnFhB16peT0cBcr_CIVFamZL8Yp8Wz_mk=',
 'https://media.istockphoto.com/id/184103864/photo/clouds-on-sky.webp?b=1&s=170667a&w=0&k=20&c=uCahXbJFxh5m_cKjgUlsO-LdylkKMoRmzSLCJQJSJFQ='
]

const image = document.querySelector('img')
image.style.height='200px'

let num=0;
setInterval(function(){
    image.setAttribute('src',arr[num]);
    num = (num+1)%arr.length;
},1000)
