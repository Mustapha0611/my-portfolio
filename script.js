// Typed js
var typed = new Typed('.typedtext', {
    strings: ["I am Mustapha", "Frontend Developer"],
    typeSpeed: 10,
    backSpeed: 10,
    backDelay:3000,
    loop: true
  });

  // Anime js
  var burger = document.querySelector(".burger");
  var close = document.querySelector(".close")

  burger.addEventListener('click', () =>{
    anime({
      targets : '.nav',
      translateX:"100%",
      duration :300,
      easing:'linear'
    })
  })

  
  close.addEventListener('click', () =>{
    anime({
      targets : '.nav',
      translateX:"-100%",
      duration :300,
      easing:'linear'
    })
  })

//Animation on Scroll 
  AOS.init()

  // Scroll to top
  var Scroll = document.querySelector(".arrow")

  Scroll.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
  })

