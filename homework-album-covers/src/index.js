console.log("Launching script");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const detailsAnchor = document.querySelector(".details-anc");
const detailsFrame = document.querySelector(".details-frame");
const mainClass = document.querySelector(".main-class");
const detailsContainer = document.querySelector(".details-container");
const detailsMusic = document.querySelector(".thumbnails-music");
const HIDDEN = "hidden";
const IS_POINT = "is-point";

function setDetails(anchor) {
   detailsImage.setAttribute('src', anchor.getAttribute('data-details-image'));
   detailsTitle.innerHTML = anchor.getAttribute('data-details-title');
   detailsAnchor.setAttribute("details-url", anchor.getAttribute('data-details-url'));
   detailsMusic.setAttribute('src', anchor.getAttribute('data-details-music'));
}

function startMusic(anchor) {
   detailsMusic.play('src', anchor.getAttribute('data-details-music'));
   setTimeout(function () {
      detailsMusic.pause('src', anchor.getAttribute('data-details-music'));
   }, 5000)
}


function showDetails() {
   mainClass.classList.remove(HIDDEN);
   detailsContainer.classList.add(IS_POINT);
   setTimeout(function () {
      detailsContainer.classList.remove(IS_POINT);
   }, 1)
}

function hideDetails() {
   mainClass.classList.add(HIDDEN);
}

detailsFrame.addEventListener("click", function () {
   window.open(detailsAnchor.getAttribute('details-url'))
})

for (let i = 0; i < anchors.length; i++) {
   anchors[i].addEventListener("click", function () {
      console.log("event - click on ", anchors[i]);
      showDetails();
      setDetails(anchors[i]);
      startMusic(anchors[i]);
      // stopMusic(anchors[i]);

   })
}

















//  function printSomething(){
//          console.log("anchor's amount is ", anchors.length);
//          console.log("a's amount is ", document.querySelectorAll('a').length);
//          console.log("ul's amount is ", document.querySelectorAll('ul').length);
//          console.log("li's amount is ", document.querySelectorAll('li').length);} 


//    window.onload = pageLoadedHandler;
//    function pageLoadedHandler() { 
//    alert("I'm alive!");
// }
