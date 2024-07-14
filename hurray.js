// Select all images with the class "img"
const images = document.querySelectorAll('.img');

var conf = new Audio("./Voicy_Confetti sound effect 2.mp3");
var hurray = new Audio("./_Hooray! Sound Effect.mp3");

let click = false;

var authorize = function(){
  // alert("clicked");
  conf.play();
  hurray.play();
}


var authButton= document.getElementById('button');
authButton.addEventListener('click', authorize);

document.addEventListener('DOMContentLoaded', function() {
    console.log("ok");
    authButton.click();
}, false);



setTimeout(() => {
  $('.img1').addClass("show");
}, 100);

// Function to apply the show-img class and remove it after a delay
// function showImage(img, delay) {
    
//   setTimeout(() => {
//     img.classList.add('show-img');
//     setTimeout(() => {
//       img.classList.remove('show-img');
//       img.classList.add('hide-img');
//     }, 5000); // Remove the class after 5 seconds
//   }, delay);
// }





setTimeout(() => {
  $('.img1').addClass('show-img');
  setTimeout(() => {
    $('.img1').removeClass('show-img');
    $('.img1').addClass('hide-img');
  }, 5000); // Remove the class after 5 seconds
}, 100);


setTimeout(() => {
  $('.img2').addClass('show-img');
  setTimeout(() => {
    $('.img2').removeClass('show-img');
    $('.img2').addClass('hide-img');
  }, 5000); // Remove the class after 5 seconds
}, 5100);

setTimeout(() => {
  $('.img4').addClass('show-img');
  setTimeout(() => {
    $('.img4').removeClass('show-img');
    $('.img4').addClass('hide-img');
  }, 5000); // Remove the class after 5 seconds
}, 10100);


setTimeout(() => {
  $('.img3').addClass('show-img');
  $('h1').text("Enjoy Your Day🎉🎉")
  setTimeout(() => {
   
  }, 5000); // Remove the class after 5 seconds
}, 15100);

setTimeout(function () {
  
    const jsConfetti = new JSConfetti();
    
    jsConfetti.addConfetti({
        confettiRadius: 5,
        confettiNumber: 1000,
      });
    jsConfetti.addConfetti();
    
}, 800);
