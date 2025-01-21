// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('mentor-modal');
    const modalContent = document.getElementById('mentor-details');
    const closeModal = document.querySelector('.close-btn');
    const viewProfileButtons = document.querySelectorAll('.view-profile-btn');

    // Add click event to each "View Profile" button
    viewProfileButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mentorInfo = button.getAttribute('data-mentor');
            modalContent.textContent = mentorInfo; // Display mentor details in the modal
            modal.style.display = 'flex'; // Show the modal
        });
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
