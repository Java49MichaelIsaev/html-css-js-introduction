 console.log("Launching script");
 const anchors = document.querySelectorAll(".thumbnails-anchor");
 const detailsImage = document.querySelector(".details-image");
 const detailsTitle = document.querySelector(".details-title");
 printSomething();

 function setDetails(anchor) {
    detailsImage.setAttribute('src', anchor.getAttribute('data-details-image'));
    detailsTitle.innerHTML = anchor.getAttribute('data-details-title');
 }
 for(let i = 0; i < anchors.length; i++)
 {
    anchors[i].addEventListener("click", function(){
        console.log("event - click on ", anchors[i]); 
        setDetails(anchors[i]);
    })
 }

 function printSomething(){
         console.log("anchor's amount is ", anchors.length);
         console.log("a's amount is ", document.querySelectorAll('a').length);
         console.log("ul's amount is ", document.querySelectorAll('ul').length);
         console.log("li's amount is ", document.querySelectorAll('li').length);   
 }