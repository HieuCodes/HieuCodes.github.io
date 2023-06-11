//access the images
let slideImages = document.querySelectorAll('img');
//Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
var counter = 0;
//Code for next button
next.addEventListener('click',slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
        counter = 0;
    }
    else{
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
}
//code for prev button
prev.addEventListener('click',slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length-1;
    }
    else{
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
}
//auto sliding
function autoSliding(){
    deletInterval = setInterval(timer,5000);
    function timer(){
        slideNext();
    }
}
autoSliding();
//Stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
});
//resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding);