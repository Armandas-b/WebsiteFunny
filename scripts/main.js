
const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc ==='img/Capy.webp') {
    myImage.setAttribute('src','img/pluto_cover_EXTRA_EDITED_THICC_BOI.jpg');
  } else {
    myImage.setAttribute('src','img/Capy.webp');
  }
}
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

let myButton = document.getElementById('SignIn');
let enterButton = document.getElementById('Enter')
let myHeading = document.querySelector('h1');

function signIN() {
    modal.style.display = "block"
    // const myName = prompt('Please enter your name.');
  }
enterButton.onclick = ()=>{
    var myName = document.getElementById('name').value;
    localStorage.setItem('name', myName);
    myHeading.textContent = `Ok I pull up to, ${myName}`;
}
// span.onclick = ()=>{
//     modal.style.display ="none"
// }
myButton.onclick = () => {
 signIN();
}
// window.onclick = function(event){
//     if (event.target == modal){
//         modal.style.display = "none"
//     }
// }
if (!localStorage.getItem('name')) {
    setUserName();
    } else {
     const storedName = localStorage.getItem('name');
      myHeading.textContent = `Ok I pull up to, ${storedName}`;
    }

