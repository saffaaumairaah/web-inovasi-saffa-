let eventDate = new Date("June 30, 2026 00:00:00").getTime();

let timer = setInterval(function() {
    let now = new Date().getTime();
    let distance = eventDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("timer").innerHTML = days + " hari lagi";

}, 1000);


// COUNTER ANIMATION
let count = 0;
let target = 150;

let counter = setInterval(function(){
    if(count < target){
        count++;
        document.getElementById("counter").innerHTML = count;
    }
}, 20);
