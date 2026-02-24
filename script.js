// Part 1: The Visual Charm (Typing Effect)
const text = "Hi, I'm Ayan.";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;

// Part 2: The Custom Comms Function
function sendMessage() {
    // Grab the exact text the user typed
    const userInput = document.getElementById("visitor-message").value;

    // Stop them if the box is empty!
    if (userInput.trim() === "") {
        alert("Please type a message first, Commander!");
        return; 
    }

    // Fire their specific text to the backend engine
    fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput }) // Injecting their text here!
    })
    .then(response => response.json())
    .then(data => {
        alert("Success! Your message was permanently locked in Ayan's vault.");
        // Clear the box after sending so it looks clean
        document.getElementById("visitor-message").value = ""; 
    })
    .catch(error => {
        console.error('Error:', error);
        alert("The visual base is live, but the engine is currently offline.");
    });
}