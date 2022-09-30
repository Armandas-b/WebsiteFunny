
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
myButton.onclick = () => {
 signIN();
}
if (!localStorage.getItem('name')) {
    setUserName();
    } else {
     const storedName = localStorage.getItem('name');
      myHeading.textContent = `Ok I pull up to, ${storedName}`;
    }

