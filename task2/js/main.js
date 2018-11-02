const firstname = document.querySelector("#firstname");
const fnameformat = /^[A-za-z]/;
const lastname = document.querySelector("#lastname");
const lnameformat = /^[A-za-z]/;
const email = document.querySelector("#email");
const emailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const phonenumber = document.querySelector("#phonenumber");
const phoneformat = /^(?:\+?3584|0)([0-9]){8}$/;
const address = document.querySelector("#address");
const postcode = document.querySelector("#postcode");
const postformat = /^[0-9]{5}/;
const password = document.querySelector("#password");
function validate() {
  if (firstname.value == "") {
    alert("Enter firstname");
    return false
  }
  else if (lastname.value =="") {
    alert("Enter lastname");
    return false
  }
  else if (email.value =="") {
    alert("Enter email");
    return false
  }
  else if (!email.value.match(emailformat)) {
    alert("Wrong email format");
    return false
  }
  else if (phonenumber.value =="") {
    alert("Enter phone number");
    return false
  }
  else if (!phonenumber.value.match(phoneformat)) {
    alert("Wrong phone number format");
    return false
  }
  else if (!postcode.value.match(postformat)) {
    alert("Wrong postcode format");
    return false
  }
  else if (password.value =="") {
    alert("Enter password");
    return false
  }
  else {
    return true
  }
}

