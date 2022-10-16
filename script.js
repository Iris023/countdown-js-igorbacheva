function christmasCountdown () {
  const christmasDate = new Date("December 25, 2022 00:00");
  const now = new Date();
  const diff = christmasDate - now;

  const msInSecond = 1000;
  const msInMinute = 60 * 1000;
  const msInHour = 60 * 60 * 1000;
  const msInDay = 24 * 60 * 60 * 1000;

  const displayDay = Math.floor(diff/msInDay);
  document.querySelector('.days').textContent = displayDay;

  const displayHour = Math.floor((diff%msInDay) / msInHour);
  document.querySelector('.hours').textContent = displayHour;

  const displayMinute = Math.floor((diff%msInHour) / msInMinute);
  document.querySelector('.minutes').textContent = displayMinute;

  const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
  document.querySelector('.seconds').textContent = displaySecond;

  if (diff <= 0) {
    document.querySelector('.days').textContent = 0;
    document.querySelector('.hours').textContent = 0;
    document.querySelector('.minutes').textContent = 0;
    document.querySelector('.seconds').textContent = 0;
    clearInterval(timerID);
    merryChristmas();
  }
}

const timerID = setInterval(christmasCountdown, 1000);

function merryChristmas() {
  const heading = document.querySelector('h1');
  let breakLine = "<br>"
  heading.innerHTML = `Merry Christmas! ${breakLine} Ho-Ho-Ho!`;
  heading.classList.add('red');
}

const playButton = document.querySelector('#playButton');
playButton.addEventListener('click', function(){
  document.querySelector('#myAudio').play();
})

const pauseButton = document.querySelector('#pauseButton');
pauseButton.addEventListener('click', function(){
  document.querySelector('#myAudio').pause();
})

particlesJS("particles-js", {
  "particles":{
    "number":{
      "value":250,
      "density":{
        "enable":true,"value_area":1500
      }
    }, 
    "color":{
      "value":"#fff"
    },
    "shape":{
        "type": "circle",
        "stroke":{
          "width":0,
          "color":"#000000"
        },
        "polygon":{
          "nb_sides":5
        },
        "image":{
          "src":"img/github.svg",
          "width":100,
          "height":100
        }
      },
        "opacity":{
          "value":0.7,
          "random":true,
          "anim":{
            "enable":false,
            "speed":1,
            "opacity_min":0.1,
            "sync":false
          }
        },
        "size":{
          "value":10,
          "random":true,
          "anim":{
            "enable":false,
            "speed":20,
            "size_min":0.1,
            "sync":false
          }
        },
        "line_linked":{
          "enable":false,
          "distance":500,
          "color":"#ffffff",
          "opacity":0.4,
          "width":2
        },
        "move":{
          "enable":true,
          "speed":3,
          "direction":"bottom",
          "random":true,
          "straight":false,
          "out_mode":"out",
          "bounce":false,
          "attract":{
            "enable":false,
            "rotateX":600,
            "rotateY":1200
          }
        }
      },
        "interactivity":{
          "detect_on":"canvas",
          "events":{
            "onhover":{
              "enable":false,
              "mode":"bubble"
            },
            "onclick":{
              "enable":true,
              "mode":"push"
            },
            "resize":true
        },
        "modes":{
          "grab":{
            "distance":400,
            "line_linked":{
              "opacity":0.5
            }
          },
          "bubble":{
            "distance":100,
            "size":15,
            "duration":50,
            "opacity":3,
            "speed":2
          },
          "repulse":{
            "distance":100,
            "duration":0.4
          },
          "push":{
            "particles_nb":200
          },
          "remove":{
            "particles_nb":2
          }
        }
      },
    "retina_detect":true
  }
)

function animation(){
  if (window.innerWidth > 1024) {
    gsap.from("#playButton", {delay: .5, opacity: 0, x: -550, rotation: -1440, duration: 2.2})
    gsap.from("#pauseButton", {delay: .5, opacity: 0, x: 550, rotation: 1440, duration: 2.2})
    gsap.from(".christmas", {delay: 2.8, opacity: 0, duration: 1.2, stagger: .6})
  }
  else if (window.innerWidth <= 1024 && window.innerWidth > 800){
    gsap.from("#playButton", {delay: .5,  opacity: 0, x: -400, rotation: -1440, duration: 2.2})
    gsap.from("#pauseButton", {delay: .5,  opacity: 0, x: 400, rotation: 1440, duration: 2.2})
    gsap.from(".christmas", {delay: 2.8, opacity: 0, duration: 1.2, stagger: .6})  
  }
  else if (window.innerWidth <= 800 && window.innerWidth >500){
    gsap.from("#playButton", {delay: .5,  opacity: 0, x: -250, rotation: -1440, duration: 2.2})
    gsap.from("#pauseButton", {delay: .5,  opacity: 0, x: 250, rotation: 1440, duration: 2.2})
    gsap.from(".christmas", {delay: 2.8, opacity: 0, duration: 1.2, stagger: .6})  
  }
  else if (window.innerWidth <= 500){
    gsap.from("#playButton", {delay: .5,  opacity: 0, x: -90, rotation: -720, duration: 2.7})
    gsap.from("#pauseButton", {delay: .5,  opacity: 0, x: 90, rotation: 720, duration: 2.7})
    gsap.from(".christmas", {delay: 2.8, opacity: 0, duration: 1.2, stagger: .6})  
  }
}

animation();