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
counter = 0 ;

var menu = document.querySelector(".basic-nav li:first-child");
menu.addEventListener("mouseover", function () {
    this.querySelector("ul").style.display = "block"
})


menu.querySelector("ul").addEventListener("mouseout", function () {
    this.style.display = "none"
})


var chairs = document.querySelectorAll(".chair-pictures");

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
//dropdown: otwieranie i zamykanie przez klikniecie na strzalce i przez nacisniecie esc
var dropDownList = document.querySelectorAll(".drop_down_list");

document.addEventListener("keyup", function(event){

    if(event.which === 27){

        for(var i = 0; i < document.querySelectorAll(".list_panel").length; i++){
            if(document.querySelectorAll(".list_panel")[i].style.display === "block"){
                document.querySelectorAll(".list_panel")[i].style.display = "none";
                counter = 0;
            }

        }
    }
})


for(var i = 0; i < dropDownList.length; i++){
    dropDownList[i].querySelector(".list_arrow").addEventListener("click", function () {
        counter++;
        if (counter % 2) {
            this.nextElementSibling.style.display = "block";
        }else if(!(counter%2)) {
            this.nextElementSibling.style.display = "none";
        }
        var toClose = this.nextElementSibling;
    })
}

//event na elementy li pierwszej dropdown-list

for (var i = 0; i < dropDownList[0].querySelectorAll("li").length; i++ ){
    dropDownList[0].querySelectorAll("li")[i].addEventListener("click", function () {
        document.querySelector("h4.title").innerText = this.innerText;
        document.querySelector("h4.title.value").innerText = this.dataset.price;

        var sum = 0;

        var values = document.querySelector(".panel_right").children
        for (var i = 0; i < values.length; i++ ){

            sum += Number(values[i].innerText);

        }
        document.querySelector(".sum strong").innerHTML = sum;


    })
}
//druga lista: color

for (var i = 0; i < dropDownList[1].querySelectorAll("li").length; i++ ){
    dropDownList[1].querySelectorAll("li")[i].addEventListener("click", function () {
        document.querySelector("span.color").innerText = this.innerText;
        document.querySelector("span.color.value").innerText = 0;


        var sum = 0;

        var values = document.querySelector(".panel_right").children
        for (var i = 0; i < values.length; i++ ){

            sum += Number(values[i].innerText);

        }
        document.querySelector(".sum strong").innerHTML = sum;

    })
}
// ostatnia: material

for (var i = 0; i < dropDownList[2].querySelectorAll("li").length; i++ ){
    dropDownList[2].querySelectorAll("li")[i].addEventListener("click", function () {
        document.querySelector("span.pattern").innerText = this.innerText;
        document.querySelector("span.pattern.value").innerText = this.dataset.price;

        var sum = 0;

        var values = document.querySelector(".panel_right").children
        for (var i = 0; i < values.length; i++ ){

            sum += Number(values[i].innerText);

        }
        document.querySelector(".sum strong").innerHTML = sum;
    })
}

//checkbox

document.querySelector('div.checkbox input').addEventListener("click",function () {
    if(document.querySelector('div.checkbox input').checked){
        document.querySelector("span.transport").innerText = "Transport";
        document.querySelector("span.transport.value").innerText = this.dataset.price;
    }else {
        document.querySelector("span.transport").innerText = "Transport";
        document.querySelector("span.transport.value").innerText = 0;
    }
    var sum = 0;

    var values = document.querySelector(".panel_right").children
    for (var i = 0; i < values.length; i++ ){

        sum += Number(values[i].innerText);

    }
    document.querySelector(".sum strong").innerHTML = sum;

})



