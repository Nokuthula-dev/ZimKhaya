// ZimKhaya Website JavaScript

// 1. Stop visitors from picking a travel date in the past
const today = new Date();
today.setMinutes(today.getMinutes() - today.getTimezoneOffset()); // use local time, not UTC
document.getElementById("date").min = today.toISOString().split("T")[0];

// 2. When "Enquire Now" is clicked, pre-select that destination in the form
document.querySelectorAll("[data-destination]").forEach(function (button) {
  button.addEventListener("click", function () {
    document.getElementById("destination").value = button.dataset.destination;
  });
});

// The browser checks all other fields itself using the "required", "type" and "min"
// attributes in index.html, so no extra validation code is needed.
