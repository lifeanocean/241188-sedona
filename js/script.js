var popup = document.querySelector(".booking-form");

var form = document.querySelector(".filter-form");

if (popup) {

var link = document.querySelector(".btn-hotels");

var arrival = popup.querySelector("[name=checkin]")

var departure = popup.querySelector("[name=checkout]")

var kids = popup.querySelector("[name=kids")

var adults = popup.querySelector("[name=adults")

if (localStorage) { 

var storage_kids = localStorage.getItem("kids"); 

var storage_adults = localStorage.getItem("adults"); 

}

popup.classList.add("modal-content-hide")

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("modal-content-show");
    popup.classList.toggle("modal-content-hide"); 

    if (storage_kids) {
        kids.value = storage_kids;
    }

    if (storage_adults) {
        adults.value = storage_adults;
    }
});

popup.addEventListener("submit", function(event) {
    if (!arrival.value || !departure.value || !adults.value || !kids.value) {
        event.preventDefault();
        console.log("выберите параметры заказа");
    } else {
        localStorage.setItem("kids", kids.value);
        localStorage.setItem("adults", adults.value);
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
        }
    }
});

}

if (form) {

var filter_link = document.querySelector(".btn-transparent");

filter_link.addEventListener("click", function(event) {
    event.preventDefault();
    form.submit();
});

}