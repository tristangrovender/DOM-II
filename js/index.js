// Title
// Changes Fun Bus color to green on mouseover
// Add toggle back to original color?
const funBus = document.querySelector(".logo-heading");
// console.log(funBus);
funBus.addEventListener("mouseover", function(event) {
    event.currentTarget.style.color = "seagreen";
});

// Nav container
// Have to click on one of the nav buttons and press a key to activate this event.
const container = document.querySelector(".nav-container");
// console.log(container);
container.addEventListener("keydown", function() {
    alert("You are typing in the nav-container!");
});

// Bus image
// When moused over bus image and scrolling image will shrink.
const bus = document.querySelector(".intro img");
// console.log(bus);
bus.addEventListener("wheel", function(event) {
    event.target.style.height = "100px";
    event.target.style.width = "300px";
});

// load event
window.addEventListener("load", event => {
    console.log("page is fully loaded");
});

// focus event on home button
const home = document.querySelector(".nav-link");
// console.log(home);
home.addEventListener("focus", function(event) {
    event.target.style.color = "purple";
});

// window resize event
window.addEventListener("resize", function() {
    alert("You have resized the window");
});

// About us color
const navLinks = document.querySelectorAll(".nav-link");
// console.log(navLinks[0]);
// console.log(navLinks[1]);
// console.log(navLinks[2]);
// console.log(navLinks[3]);

// About us color
navLinks[1].addEventListener("click", function(event) {
    event.target.style.color = "crimson";
});

// Blog color
navLinks[2].addEventListener("dblclick", function(event) {
    event.target.style.color = "blue";
});

// Contact color
navLinks[3].addEventListener("click", function(event) {
    event.target.style.color = "orange";
});

// Welcome title
const welcomeTitle = document.querySelector(".intro h2");
console.log(welcomeTitle);
welcomeTitle.addEventListener("mousemove", function(event) {
    event.currentTarget.style.color = "purple";
});
