import React, { useState, useRef, useEffect } from 'react';
import { ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';

const INITIAL_MESSAGE = {
  type: 'bot',
  content: "👋 Hi! I'm your virtual assistant. How can I help you today?"
};

const BOT_RESPONSES = {
  greeting: [
    "Hello! How can I assist you today?",
    "Hi there! What can I help you with?",
    "Welcome! How may I help you?"
  ],
  services: [
    "We offer a wide range of IT services including:\n- Web Development\n- Cloud Solutions\n- Mobile App Development\n- IT Consulting\n\nWhich service would you like to know more about?",
  ],
  pricing: [
    "Our pricing varies based on project requirements. Would you like to:\n1. Schedule a consultation\n2. Get a rough estimate\n3. See our standard packages",
  ],
  contact: [
    "You can reach us through:\n- Phone: +1 234 567 890\n- Email: contact@techcore.com\n- Contact form on our website\n\nWhat's your preferred method of contact?",
  ],
  default: [
    "I'm not quite sure about that. Would you like to:\n1. Speak with a human representative\n2. Browse our services\n3. Check our FAQ",
  ]
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
      return BOT_RESPONSES.greeting[Math.floor(Math.random() * BOT_RESPONSES.greeting.length)];
    }
    if (lowerInput.includes('service')) {
      return BOT_RESPONSES.services[0];
    }
    if (lowerInput.includes('price') || lowerInput.includes('cost')) {
      return BOT_RESPONSES.pricing[0];
    }
    if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('email')) {
      return BOT_RESPONSES.contact[0];
    }
    return BOT_RESPONSES.default[0];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { type: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = { type: 'bot', content: generateResponse(inputValue) };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 p-4 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 z-50"
      >
        <ChatBubbleLeftIcon className="h-6 w-6" />
      </button>

      {/* Chatbot Window */}
      <div className={`chatbot-container transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        {/* Header */}
        <div className="chatbot-header">
          <h3 className="text-lg font-medium">Customer Support</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={message.type === 'user' ? 'user-message' : 'bot-message'}>
              <div className="message-content whitespace-pre-line">
                {message.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="bot-message">
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="chatbot-input">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
