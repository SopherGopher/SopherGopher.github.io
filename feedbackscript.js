console.log('Script is running.');

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('review-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from reloading the page

        // Get input values
        const fname = document.getElementById('name').value;
        const lname = document.getElementById('comment').value;

        // Clear the form
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';

        openPopup();
    });
});

function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
