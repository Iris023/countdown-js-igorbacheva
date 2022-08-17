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
}}

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
  "particles": {
    "number": {
      "value": 300,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 3,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.7,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 6,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 50,
      "color": "#ffffff",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "bottom",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 300,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode":  "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 100,
        "size": 20,
        "duration": 10,
        "opacity": 5,
        "speed": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.2
      },
      "push": {
        "particles_nb": 50
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


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