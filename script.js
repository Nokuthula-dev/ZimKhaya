
// ZimKhaya Website JavaScript

// Get the booking form and its fields
const bookingForm = document.getElementById("bookingForm");
const travelDate = document.getElementById("date");
const destinationSelect =
    document.getElementById("destination");

const emailInput = document.getElementById("email");
const replyToInput = document.getElementById("replyTo");

// Prevent selection of previous dates
if (travelDate) {

    const today = new Date();

    const localDate = new Date(
        today.getTime() -
        today.getTimezoneOffset() * 60000
    );

    travelDate.min = localDate
        .toISOString()
        .split("T")[0];
}

// Automatically select the destination
// when a visitor clicks Enquire Now
const destinationButtons =
    document.querySelectorAll("[data-destination]");

destinationButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedDestination =
            button.getAttribute("data-destination");

        destinationSelect.value = selectedDestination;

    });

});

// Check the form before submission
if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        // Validate destination
        if (!destinationSelect.value) {

            event.preventDefault();

            alert(
                "Please select your preferred destination."
            );

            return;
        }

        // Validate travel date
        if (travelDate.value < travelDate.min) {

            event.preventDefault();

            alert(
                "Please select a current or future travel date."
            );

            return;
        }

        // Set the visitor's email for replies
        replyToInput.value = emailInput.value;

        // Allow FormSubmit to send the enquiry
    });

}
