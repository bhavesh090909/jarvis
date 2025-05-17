const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

async function sendMessage() {
  const userText = userInput.value;
  if (!userText) return;

  // Display user message
  chatBox.innerHTML += `<div><strong>You:</strong> ${userText}</div>`;
  userInput.value = "";

  // Call backend (replace URL with your own server or API)
  const response = await fetch("http://localhost:5000/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userText })
  });

  const data = await response.json();

  // Display AI response
  chatBox.innerHTML += `<div><strong>AI:</strong> ${data.reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}
 