// Basic JavaScript for form validation
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.ticket-search-box');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add form validation logic here
        alert('Search functionality to be implemented');
    });
});
document.getElementById('search-trains').addEventListener('click', function() {
    // Validation
    const fromStation = document.getElementById('from-station').value;
    const toStation = document.getElementById('to-station').value;
    const travelDate = document.getElementById('travel-date').value;
    const passengerClass = document.getElementById('passenger-class').value;
    const passengerCategory = document.getElementById('passenger-category').value;

    // Basic form validation
    if (!fromStation || !toStation || !travelDate || !passengerClass || !passengerCategory) {
        alert('Please fill in all fields');
        return;
    }

    // Collect form data
    const formData = {
        fromStation,
        toStation,
        travelDate,
        passengerClass,
        passengerCategory
    };

    // You can replace this with actual API call or further processing
    console.log('Searching for trains:', formData);
    alert('Searching for available trains!');
});

// Optional: Prevent past dates
const today = new Date().toISOString().split('T')[0];
document.getElementById('travel-date').setAttribute('min', today);