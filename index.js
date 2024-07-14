var playing = false;
var sound = new Audio("./01-Monk-Turner-Fascinoma-Its-Your-Birthday(chosic.com).mp3");



$(".btn").on("click", function () {
    $(this).toggleClass("down");
    
    if(!playing){
        sound.play();
        $('.btn').addClass("pressed");
        setTimeout(function () {
            $(".btn").removeClass("pressed");
        }, 500);
        $(".btn").text("Pause Song");
        playing = true;
        autoScroll();
        
    } 
    else if(playing) {
            sound.pause();
            $(".btn").text("Play Song");
            playing = false;
  
    }
}
);


sound.addEventListener('ended', () => {
    window.location.href = "./hurray.html";
    
  });


function autoScroll() {
    const currentScrollPosition = window.scrollY; // Get current scroll position
    window.scroll(0, currentScrollPosition + 100); // Scroll 100px from current position
    setTimeout(autoScroll, 1000); // Repeat every 1 second
}
  


  