var pics = [
    "images/berger-australien-0.jpg",
    "images/berger-australien-1.jpg",
    "images/berger-australien-2.jpg",
    "images/berger-australien-3.jpg",
    "images/berger-australien-4.jpg",
    "images/berger-australien-famille-5.jpg"
]

var btn = document.querySelector("button");
var imageuh = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
    if(counter === 6){
        counter = 0;
    }
    imageuh.src = pics[counter]
    counter += 1; 
});