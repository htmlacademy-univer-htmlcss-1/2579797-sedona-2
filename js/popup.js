var link = document.querySelector(".search-hotels");
var popup = document.querySelector(".search-filters");
var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=arrival-data]");
var departure = popup.querySelector("[name=departure-data]");


link.addEventListener("click", function (event) {
    "use strict";
    event.preventDefault();
    if (popup.getAttribute('class').indexOf('search-filters-show') === -1) {
        popup.classList.add("search-filters-show");
        arrival.focus();
    } else {
        popup.classList.remove("search-filters-show");
        popup.classList.remove("modal-error");
    }
});

window.addEventListener("keydown", function (event) {
    "use strict";
    if (event.keyCode === 27) {
        if (popup.classList.contains("search-filters-show")) {
            popup.classList.remove("search-filters-show");
            popup.classList.remove("modal-error");
        }
    }
});

form.addEventListener("submit", function (event) {
    "use strict";
    if (!arrival.value || !departure.value) {
        event.preventDefault();
        popup.classList.remove("modal-error");
        setTimeout(function () {
            popup.classList.add("modal-error");
        }, 50)
    }
});

function initMap() {
    "use strict";
    new google.maps.Map(document.getElementsByClassName('map')[0], {
        center: {lat: 34.8654859, lng: -111.7868444},
        zoom: 15
    });
}
