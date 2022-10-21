//    window.onload = pageLoadedHandler;
//    function pageLoadedHandler() { 
//    alert("I'm alive!");
// }


console.log("Launching script");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const detailsAnchor = document.querySelector(".details-anc");
const detailsFrame = document.querySelector(".details-frame");
const mainClass = document.querySelector(".main-class");
const HIDDEN = "hidden";

function setDetails(anchor) {
   detailsImage.setAttribute('src', anchor.getAttribute('data-details-image'));
   detailsTitle.innerHTML = anchor.getAttribute('data-details-title');
   detailsAnchor.setAttribute("details-url", anchor.getAttribute('data-details-url'))
}
for (let i = 0; i < anchors.length; i++) {
   anchors[i].addEventListener("click", function () {
      console.log("event - click on ", anchors[i]);
      showDetails();
      setDetails(anchors[i]);

   })
}

//   detailsFrame.addEventListener("click", function(){
//    window.open(detailsAnchor.getAttribute('details-url' ))
//   })

function showDetails() {
   mainClass.classList.remove(HIDDEN);
}

function hideDetails() {
   mainClass.classList.add(HIDDEN);
}


//  function printSomething(){
//          console.log("anchor's amount is ", anchors.length);
//          console.log("a's amount is ", document.querySelectorAll('a').length);
//          console.log("ul's amount is ", document.querySelectorAll('ul').length);
//          console.log("li's amount is ", document.querySelectorAll('li').length);}   



