const submitButtonn=document.getElementById("clientForm");
submitButtonn.addEventListener('submit',onsubmit)
function onsubmit(e){
  e.preventDefault;
  alert("Thank you for your submission, we will contact you shortly");
}