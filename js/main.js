// set up a base path, make for easy swapping if changed
var basePath = "img/";

// a simple array here, would be a react or angular repeat in the html, or filled in by .net
// just using javascript to keep it simple and not include libraries
var imgArray = [
    "dog1.jpg","dog2.jpg","dog3.jpg","dog4.jpg","dog5.jpg","dog6.jpg","dog7.jpg","dog8.jpg"
];

var dogsLoaded = function(){
    var headerElem = document.getElementById("image-backdrop");
    var totalWidth = headerElem.offsetWidth;
    var imgTemplate = document.createElement("img");
    imgTemplate.src = basePath+imgArray[0];
    headerElem.appendChild(imgTemplate);
    var itemWidth = (headerElem.offsetHeight/2);
    imgTemplate.parentNode.removeChild(imgTemplate);
    var totalItems = Math.floor(totalWidth / itemWidth) * 2;
    for (var i = 0; i < totalItems; i++) {
        imgTemplate = document.createElement("img");
        imgTemplate.src = basePath+imgArray[i%imgArray.length];
        headerElem.appendChild(imgTemplate);
    }

};


// make sure we fire on page load.
if(window.attachEvent) {
    window.attachEvent('onload', dogsLoaded);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            dogsLoaded(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = dogsLoaded;
    }
}

