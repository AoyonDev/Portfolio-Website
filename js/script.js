// loader 
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

// side bar 
  $('.cross-icon').click(function(){
    $('.side-bar').css('left', '-100%', 'transition all linear 0.4s')
  })
  $('.bar-icon').click(function(){
    $('.side-bar').css('left', '0%', 'transition all linear 0.4s')
  })