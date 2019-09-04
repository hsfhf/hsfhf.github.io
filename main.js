let myImage = document.querySelector('img');
let mySrc;
myImage.onclick = function() {
    mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/file_code.svg') {
      myImage.setAttribute('src', 'images/file_open.svg');
    } else {
      myImage.setAttribute('src', 'images/file_code.svg');
    }
}
function setHeading(name) {
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Hello，' + name ;
  }
  
  function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
  } 
  
  let storedName = localStorage.getItem('name');
  if(!storedName) {
     setUserName();
  } else {
     setHeading(storedName);
  }
  
  let myButton = document.querySelector('button'); 
  myButton.onclick = setUserName;