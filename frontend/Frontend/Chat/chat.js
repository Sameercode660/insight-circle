// Chat functionality
document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatWindow = document.getElementById('chat-window');

    // Add event listener to handle form submission
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload

        const userMessage = chatInput.value.trim(); // Get input value

        if (userMessage !== '') {
            // Add user's message to the chat window
            addMessage(userMessage, 'sent');

            // Simulate bot response
            setTimeout(() => {
                addMessage('Thank you for your message! How else can I assist?', 'received');
            }, 1000);
        }

        chatInput.value = ''; // Clear the input field
    });

    // Function to add a message to the chat window
    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type);

        const messageText = document.createElement('p');
        messageText.textContent = text;

        const timestamp = document.createElement('span');
        timestamp.classList.add('timestamp');
        timestamp.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        messageDiv.appendChild(messageText);
        messageDiv.appendChild(timestamp);

        chatWindow.appendChild(messageDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the latest message
    }
});
