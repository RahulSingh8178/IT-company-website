// Chatbot functionality
const chatbot = {
    isOpen: false,
    messages: [],
    
    // Initial responses for common queries
    responses: {
        greeting: ["Hello! How can I help you today?", "Hi there! What can I do for you?"],
        services: ["We offer various IT services including web development, cloud solutions, and mobile app development. Would you like to know more about any specific service?"],
        contact: ["You can reach us through the contact form above, or call us at +1 234 567 890."],
        pricing: ["Our pricing varies based on project requirements. Would you like to schedule a consultation to discuss your needs?"],
        default: ["I'm not sure I understand. Could you please rephrase that?", "Let me connect you with a human representative who can better assist you."]
    },
    
    // Initialize chatbot
    init() {
        const openBtn = document.getElementById('openChatbot');
        const closeBtn = document.getElementById('closeChatbot');
        const sendBtn = document.getElementById('sendMessage');
        const chatContainer = document.querySelector('.chatbot-container');
        const userInput = document.getElementById('userInput');
        
        openBtn.addEventListener('click', () => this.toggleChat());
        closeBtn.addEventListener('click', () => this.toggleChat());
        sendBtn.addEventListener('click', () => this.sendMessage());
        
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
        
        // Add initial greeting
        this.addMessage('bot', this.getRandomResponse('greeting'));
    },
    
    // Toggle chat window
    toggleChat() {
        const chatContainer = document.querySelector('.chatbot-container');
        this.isOpen = !this.isOpen;
        chatContainer.style.display = this.isOpen ? 'flex' : 'none';
        
        if (this.isOpen) {
            document.getElementById('userInput').focus();
        }
    },
    
    // Send message
    sendMessage() {
        const userInput = document.getElementById('userInput');
        const message = userInput.value.trim();
        
        if (message) {
            // Add user message
            this.addMessage('user', message);
            userInput.value = '';
            
            // Generate and add bot response
            setTimeout(() => {
                const response = this.generateResponse(message);
                this.addMessage('bot', response);
            }, 500);
        }
    },
    
    // Add message to chat
    addMessage(sender, text) {
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = `
            <div class="message-content">
                ${text}
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        this.messages.push({ sender, text });
    },
    
    // Generate response based on user input
    generateResponse(input) {
        input = input.toLowerCase();
        
        if (input.includes('hello') || input.includes('hi')) {
            return this.getRandomResponse('greeting');
        } else if (input.includes('service')) {
            return this.getRandomResponse('services');
        } else if (input.includes('contact') || input.includes('reach')) {
            return this.getRandomResponse('contact');
        } else if (input.includes('price') || input.includes('cost')) {
            return this.getRandomResponse('pricing');
        } else {
            return this.getRandomResponse('default');
        }
    },
    
    // Get random response from category
    getRandomResponse(category) {
        const responses = this.responses[category];
        return responses[Math.floor(Math.random() * responses.length)];
    }
};

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => chatbot.init());
