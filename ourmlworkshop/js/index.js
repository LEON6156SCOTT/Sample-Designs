function isMobile() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

// FAQ: selecting question
let coll = document.getElementsByClassName("question");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function(event) {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      this.classList.add("active");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
// resize function FAQ answers
window.onresize = function(event) {
  let coll = document.getElementsByClassName("question");
  for (let i = 0; i < coll.length; i++) {
    if (coll[i].classList.contains("active")){
      let content = coll[i].nextElementSibling;
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
} 



const SM = 576, MD = 768, LG = 1200
const CLOUD_SPEED = 15000

function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        // rect.top >= 0 - 0.6*window.innerHeight &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        
    );
}

// initialize floating clouds
const clouds_desktop = [{"top":8, "left":40, "size":5, "flip":true},
                {"top":10, "left":10, "size":10, "flip":false},
                {"top":15, "left":55, "size":7, "flip":true},
                {"top":22, "left":80, "size":15, "flip":false},
                {"top":145, "left":8, "size":3, "flip":true},
                {"top":200, "left":-8, "size":12, "flip":true},
                {"top":230, "left":10, "size":8, "flip":true},
                {"top":180, "left":85, "size":8, "flip":false},
                {"top":275, "left":80, "size":25, "flip":false},
                {"top":210, "left":70, "size":5, "flip":true}]

const clouds_mobile = [{"top":35, "left":5, "size":5, "flip":true},
                {"top":25, "left":15, "size":10, "flip":false},
                {"top":155, "left":2, "size":20, "flip":true},
                {"top":80, "left":65, "size":25, "flip":false},
                {"top":590, "left":15, "size":5, "flip":true},
                {"top":640, "left":-5, "size":10, "flip":true},
                {"top":680, "left":80, "size":10, "flip":true},]

var cloud_elems = []
var cloud_wrappers = []
var cloud_rellax = []
var clouds = window.innerWidth < SM && isMobile() ? clouds_mobile : clouds_desktop
clouds.forEach((cloud, i) => {
  var wrap = document.createElement('div')
  wrap.classList.add("floating-cloud-wrap")
  wrap.style.cssText = `${cloud.top ? "top:" + cloud.top : "bottom:" + cloud.bottom}vw;left:${cloud.left}vw;width:${cloud.size}vw`
  wrap.id = "floating-cloud-wrap" + i
  wrap.dataset.rellaxXsSpeed = 1.5 * cloud.size / 25
  wrap.dataset.rellaxMobileSpeed = 3 * cloud.size / 25
  wrap.dataset.rellaxTabletSpeed = 3 * cloud.size / 25
  wrap.dataset.rellaxDesktopSpeed = 3 * cloud.size / 25

  var elem = document.createElement('img');
  
  elem.id = "floating-cloud" + i
  elem.classList.add("floating-cloud")
  elem.src = cloud.flip ? "../assets/img/Cloud_Flipped.svg" : "../assets/img/Cloud.svg"
  
  wrap.appendChild(elem)
  document.body.appendChild(wrap)

  cloud_elems.push(elem)
  cloud_wrappers.push(wrap)

  setTimeout(() => {
    moveCloud(elem)
    setInterval(() => {moveCloud(elem)}, CLOUD_SPEED + Math.floor(Math.random() * CLOUD_SPEED / 5))
  }, Math.random() * CLOUD_SPEED)

  cloud_rellax.push(new Rellax("#floating-cloud-wrap" + i, {
    // speed: 3 * cloud.size / 25,
    breakpoints: [SM, MD, LG]
  }))
})



function moveCloud(elem) {
  if(elem.classList.contains("moving")){
    elem.classList.remove("moving")
    // console.log("moving")
  }
  else {
    elem.classList.add("moving")
  }
}



// initialize cloud layers
const layers = [{"id": "cloud-section1", "target": "#tracks"},
                {"id": "cloud-section2", "target": "#speakers", "offsets": [-0.66,-1,-1.5]},
                {"id": "cloud-section3", "target": "#faq"},
                {"id": "cloud-section4", "target": "#footer", "offsets": [-0.66,-1,-1.5]}]

const SPEEDS = [0.8,1.2,1.75,2.5]
const OFFSETS = [1.25,1,0.8]
layers.forEach(layer => {
  Array.prototype.forEach.call(document.querySelectorAll("#" + layer.id + " .cloud-layer"), elem => {
    speeds = layer.speeds ? layer.speeds : SPEEDS
    offsets = layer.offsets ? layer.offsets : OFFSETS
    offset = elem.id === "cloud-layer-a" ? offsets[0] : (elem.id === "cloud-layer-b" ? offsets[1] : offsets[2])
    
    elem.dataset.rellaxSpeed = speeds[0] * offset
    elem.dataset.rellaxXsSpeed = speeds[0] * offset
    elem.dataset.rellaxMobileSpeed = speeds[1] * offset 
    elem.dataset.rellaxTabletSpeed = speeds[2] * offset 
    elem.dataset.rellaxDesktopSpeed = speeds[3] * offset
  })
})

// initialize parallax objects
rellax = {}
layers.forEach(elem => {
  rellax[elem.id] = new Rellax("#" + elem.id + " .cloud-layer", {
    breakpoints: [SM, MD, LG],
    target: elem.target
  })
  elem.target = document.querySelector(elem.target)
})

const tracks = document.getElementById('tracks')
faq.dataset.scroll = 0

// control loop for setting scroll
setInterval(() => {
  layers.forEach(elem => {
    var newScroll = Math.min(document.documentElement.scrollTop, Math.max(0, window.innerHeight - elem.target.getBoundingClientRect().top + 0.1*window.innerWidth))
    if(elem.id === "cloud-section1"){
    // console.log(newScroll, document.documentElement.scrollTop, Math.round(window.innerHeight - elem.target.getBoundingClientRect().top + 0.1*window.innerWidth))
    }
    elem.target.dataset.scroll = newScroll
  })
  
}, 50)

// 
Array.prototype.forEach.call(document.getElementsByClassName("navbar-btn"), elem => {
  elem.onclick = () => {
    setTimeout(() => {
      layers.forEach(elem => {
        rellax[elem.id].refresh()
        // console.log("refreshed " + elem.id)
      })
    }, 100)
    
  }
})


var trainMoving = false
function moveTrain(dir){
  var train = document.getElementById("train")
  if(!train.classList.contains(dir)){
    if(trainMoving){
      setTimeout(() => {moveTrain(dir)}, 500)
      return
    }
    trainMoving = true
    // console.log("started")
    setTimeout(() => {trainMoving = false}, 2500)
    if(dir === "enter"){
      if(train.classList.contains("exit")){
        train.classList = "reset"
      }
      setTimeout(() => {train.classList = "enter"}, 200)
    }
    else if(dir === "exit"){
      train.classList = "exit"
    }
  }
}

// first move train
function init() {
  moveTrain("enter")
  layers.forEach(elem => {
    rellax[elem.id].refresh()
    // console.log("refreshed " + elem.id)
  })
  
}



// control trains + minor adjustments to clouds
window.onscroll = () => {
  var scroll = document.documentElement.scrollTop
  if(scroll === 0 || scroll === document.documentElement.scrollHeight - window.innerHeight){ // sometimes clouds hang at top
    setTimeout(() => {rellax["cloud-section1"].refresh()},50)
    // console.log(rellax["cloud-section1"])
  }
  // console.log(document.documentElement.scrollTop)
  var tracks = document.getElementById("tracks")
  if((tracks.getBoundingClientRect().top / tracks.offsetTop) <= 0.66){
    moveTrain("exit")
  } 
  else {
    moveTrain("enter")
  }
}



// countdown timer
var countDownDate = new Date("Sep 12, 2020 22:00:00 EDT").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (distance < 0) {
    document.getElementById("days").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("minutes").innerHTML = 0;
    document.getElementById("seconds").innerHTML = 0;
    document.getElementById("countdown-status-arrived").innerHTML = "ARRIVED";
  } else {
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("countdown-status-arrived").innerHTML = "ON TIME";
  }
}, 1000);

window.onload = init



//hamburger menu
var menu = document.getElementById("menu-btn")
var menu_items = document.getElementById("menu-items")
menu.onclick = () => {
  if(menu.classList.contains("is-active")){
    menu.classList.remove("is-active")
    menu_items.classList.remove("active")
  }
  else {
    menu.classList.add("is-active")
    menu_items.classList.add("active")
  }
}
