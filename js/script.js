//Login Button Functionality

document.getElementById('loginBtn').addEventListener('click',function(e){
e.preventDefault()
const mobileNumber = 1768282252;
const pinNumber = 2178;
const mobileNumberValue =document.getElementById('numberCheck').value;
const mobileValueConverted = parseInt(mobileNumberValue);
const pinNumberValue =  document.getElementById('pinCheck').value;
const pinValueConverted =  parseInt(pinNumberValue);

if(mobileValueConverted === mobileNumber && pinValueConverted === pinNumber){
   window.location.href = "./home.html"
}else{
    alert('Put Valid Info')
}
})