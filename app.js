// Let's defint things we need ;)
const container = document.querySelector('#container');
const strajkkobiet = document.querySelector('#strajkkobiet');
const lightning0 = document.querySelector('#lightning0');
const lightning1 = document.querySelector('#lightning1');
const lightning2 = document.querySelector('#lightning2');
const lightning3 = document.querySelector('#lightning3');
const hashtag = document.querySelector('#hashtag');

// Moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    strajkkobiet.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener('mouseenter', (e) => {
    strajkkobiet.style.transition = 'none';
    // Popout
    lightning0.style.transform = `translateZ(300px)`;
    lightning1.style.transform = `translateZ(250px)`;
    lightning2.style.transform = `translateZ(200px)`;
    lightning3.style.transform = `translateZ(150px)`;
    hashtag.style.transform = `translateZ(100px)`;
});

// Animate Out
container.addEventListener('mouseleave', (e) => {
    strajkkobiet.style.transition = 'all 0.5s ease';
    strajkkobiet.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // Popback
    lightning0.style.transform = `translateZ(0px)`;
    lightning1.style.transform = `translateZ(0px)`;
    lightning2.style.transform = `translateZ(0px)`;
    lightning3.style.transform = `translateZ(0px)`;
    hashtag.style.transform = `translateZ(0px)`;
});