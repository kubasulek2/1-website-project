var images = document.querySelectorAll("section.site-black-chair div.column-left img");

var nextPicture = document.querySelector("span.nav-sign-right a");

var prevPicture = document.querySelector("span.nav-sign-left a");



var counter = 0;

images[counter].classList.add("visible");


nextPicture.addEventListener('click', function () {
    images[counter].classList.remove("visible");
    counter++;
    counter %= images.length;
    images[counter].classList.add("visible");
});


prevPicture.addEventListener('click', function () {
    images[counter].classList.remove("visible");
    counter--;
    counter = counter < 0? counter = images.length - 1: counter;
    images[counter].classList.add("visible");
});


var menu = document.querySelector(".basic-nav li:first-child");
menu.addEventListener("mouseover", function () {
    this.querySelector("ul").style.display = "block"
})


menu.querySelector("ul").addEventListener("mouseout", function () {
    this.style.display = "none"
})


var chairs = document.querySelectorAll(".chair-pictures");
console.log(chairs);

for (var i = 0; i < chairs.length; i++){
    chairs[i].addEventListener("mouseover", function () {
        var self = this;
        setTimeout(function () {
            self.nextElementSibling.style.display = "none"
        },250)
    })
}
for (var i = 0; i < chairs.length; i++){
    chairs[i].addEventListener("mouseout", function () {
        this.nextElementSibling.style.display = "block"
    })
}
