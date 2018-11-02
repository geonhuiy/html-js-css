const firstname = document.querySelector("#firstname");
const fnameformat = /^[A-za-z]/;
const lastname = document.querySelector("#lastname");
const lnameformat = /^[A-za-z]/;
const email = document.querySelector("#email");
const emailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const phonenumber = document.querySelector("#phonenumber");
const phoneformat = /^[+][0-9]{10}/;
const address = document.querySelector("#address");
const addressformat = /^[A-za-z0-9]/;
const postcode = document.querySelector("#postcode");
const postformat = /^[0-9]{5}/;
const password = document.querySelector("#password");
const passwordformat = /^[A-za-z0-9]/;

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
    alert("Wrong format");
    return false
  }
  else if (phonenumber.value =="") {
    alert("Enter phone number");
    return false
  }
  else if (!phonenumber.value.match(phoneformat)) {
    alert("Wrong format");
    return false
  }
  else if (address.value !=addressformat) {
    alert("Wrong format");
    return false
  }
  else if (!postcode.value.match(postformat)) {
    alert("Wrong format");
    return false
  }
  else if (password.value =="") {
    alert("Enter password");
    return false
  }
  else if (password.value!=passwordformat) {
    alert("Wrong format");
    return false
  }
  else {
    return true
  }
}

