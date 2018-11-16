'use strict';

// HTML contains element 'message'. This is used to show the server's response
// Select it and save it as a variable/object

// make function 'upload' which
// - prevents the form from sending
// - writes 'Upload in progress...' into 'message' element
// - selects the file input field
// - makes FormData -object and adds the file selected byt the user into the object
// - send the file to the same url as in task a by using fetch -method
// - when file upload is complete, writes server response to 'message' element
// function ends

// make an event listener which calls upload function when the form is submitted
// get data from e.g. form
const myForm = document.querySelector('form');
const message = document.querySelector('#message');
const upload = (x) => {
  //message.innerHTML('Before upload....');
  x.preventDefault();
  const fData = new FormData(myForm);
// settings object for fetch
  const settings = {
    method: 'post',
    body: fData
  };
  fetch('/node/testnode', settings)
  .then( (response) => {
    return response.json();
  })
  .then( (result) => {
    console.log(result);
    //message.innerHTML('After upload');
  });
};
myForm.addEventListener('submit',upload);

