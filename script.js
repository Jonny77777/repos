var myButton=document.getElementById("button");
var myText="Hello world x";
var myNumber=2;

myButton.addEventListener("click",function() {
  this.classList.toggle("blue-background");
});

// const cars = ["Saab", "Volvo", "BMW"];getArrayList.add(image);//Add that image to the arraylist
// var carsOne = ["Saab", "Volvo", "BMW"];
// var textDisplay ="<ul>";
// var listDisplay = "";
//
// for(var i =0; i < carsOne.length; i++){
//     textDisplay += "<li>" + carsOne[i] + "</li>";
//     document.getElementById("demo").innerHTML = textDisplay;
// }
// document.getElementById("demo").innerHTML = carsOne;

var imgArray =["https://lookatthecar.org/wp-content/uploads/parser/BMW-M6-2014-3.jpg", "https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/shop/xc60-recharge-build-4x3.jpg", "https://i2.wp.com/saabblog.net/wp-content/uploads/2020/09/Saab_900c_1.jpeg"]
var imgDisplay ="";


for(var i =0; i < imgArray.length; i++){
    imgDisplay += "<img src=" + imgArray[i] + ">";
    document.getElementById("imgRow").innerHTML = imgDisplay;
}

document.getElementById("carsTwo").innerHTML = "<img src=" + imgArray[0] + ">";

function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}

function normalImg(x) {
  x.style.height = "250px";
  x.style.width = "auto";
}
