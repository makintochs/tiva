function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        const chatArea = document.getElementById('chat-area');
        chatArea.innerHTML += `<div><strong>Você:</strong> ${userInput}</div>`;
        document.getElementById('user-input').value = '';

        // Simulando uma resposta da IA (você pode integrar com uma API aqui)
        setTimeout(() => {
            chatArea.innerHTML += `<div><strong>TIVA:</strong> Eu sou sua assistente virtual. Como posso ajudar?</div>`;
            chatArea.scrollTop = chatArea.scrollHeight;
        }, 1000);
    }
}
