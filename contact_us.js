// Add event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Show an alert to the user
    alert('Thank you for contacting us! We will get back to you shortly.');

    // Reset the form fields
    this.reset();
});
