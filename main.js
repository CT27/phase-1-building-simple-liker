// Defining text characters for the empty and full hearts for you to use later.

// const EMPTY_HEART = "♡";
// const FULL_HEART = "♥";
// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function () {
  const errorMessage = document.getElementById("modal");
  errorMessage.setAttribute("hidden", "true");

  //like and dislike
  const EMPTY_HEART = document.createElement("button");
  EMPTY_HEART.textContent = "♡";
  const FULL_HEART = document.createElement("button");
  FULL_HEART.textContent = "♥";

  //onClick
  EMPTY_HEART.addEventListener("click", function(){
    mimicServerCall
    then(res=>{
      FULL_HEART.textContent ="♥"
      FULL_HEART.classList.add("activated-heart");
    })
    .catch(error =>{
      errorMessage.classList.remove("hidden")
      const modalMessage =document.getElementById("modal-message")
      modalMessage.textContent=error
      setTimeout(())=> {
        errorMessage.classList.add("hidden");
      },3000;
      });
    });



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
