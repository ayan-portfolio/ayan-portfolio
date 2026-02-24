const text = "Hi, I'm Ayan.";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing when the page loads
window.onload = typeWriter;

function initiateContact() {
    fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: "Target Acquired: Someone initialized comms from the pristine glass base!" }) 
    })
    .then(response => response.json())
    .then(data => {
        alert("Success! Your ping has been recorded in Ayan's secure vault.");
    })
    .catch(error => {
        console.error('Error:', error);
        alert("The visual base is live, but the engine is currently offline.");
    });
}