function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

var loc = window.location;
var baseUrl = loc.protocol + "//" + loc.hostname+"/"+ (loc.port? ":"+loc.port : "") ;
var seq=[
  [0,15],
  [16,31],
  [32,48]
];
var logo = document.getElementById("animLogo");
var logoRelated= document.getElementById("animLogoRelated");
var logoSlider= document.getElementById("animLogoSlider");

window.onload = function () {
setupAnimLogo(logo);
setupAnimLogo(logoRelated);
};


function setupAnimLogo(box){

  if(typeof box !== 'undefined' && box !== null) {
    var animation = bodymovin.loadAnimation({
    container: box,
    renderer: "svg",
    loop: false,
    autoplay: false,
    prerender: false,
    path: "/json/logo.json"
    });

    box.addEventListener("mouseenter", function () {
    animation.setDirection(1);
    animation.playSegments(seq[getRandomIntInclusive(0,2)],true);
    });

    box.addEventListener("mouseleave", function () {
    animation.setDirection(-1);
    animation.play();
    });
  } else{
    console.log("can not find"+ box);
  }

}
