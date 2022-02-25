 let myimage = document.querySelector('img');

 myimage.onclick = function(){
     let mysrc = myimage.getAttribute('src');
     if(mysrc === 'images/haizeiwang2.jpeg'){
         myimage.setAttribute('src', 'images/haizeiwang3.jpeg');
     }else{
         myimage.setAttribute('src', 'images/haizeiwang2.jpeg');
     }
 }
 let mybutton = document.querySelector('button');
 let myheading = document.querySelector('h1');

 function setusername() {
    let myname = prompt('请输入你的名字。');
    if(!myname || myname === null) {
      setusername();
    } else {
      localStorage.setItem('name', myName);
      myheading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
  }

 if(!localStorage.getItem('name')){
     setusername();
 }else{
     let storedname = localStorage.getItem('name');
     myheading.textContent='Mozilla酷毙了,'+myname;
 }
 mybutton.onclick = function(){
     setusername();
 }