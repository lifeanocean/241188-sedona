var link = document.querySelector(".btn-hotels");

var popup = document.querySelector(".booking-form");

var arrival = popup.querySelector("[name=checkin]")

var departure = popup.querySelector("[name=checkout]")

var kids = popup.querySelector("[name=kids")

var adults = popup.querySelector("[name=adults")

var storage_kids = localStorage.getItem("kids");

var storage_adults = localStorage.getItem("adults");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("modal-content-show"); 

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