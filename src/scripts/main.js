// This file contains the JavaScript code for the resume website. 
// You can add interactive elements or dynamic content here.

document.addEventListener('DOMContentLoaded', function() {
    // Example of a simple interactive feature
    const toggleButton = document.getElementById('toggle-info');
    const infoSection = document.getElementById('info-section');

    toggleButton.addEventListener('click', function() {
        infoSection.classList.toggle('hidden');
    });
});