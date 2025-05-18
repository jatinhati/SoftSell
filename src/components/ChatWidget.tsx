import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2, Maximize2 } from 'lucide-react';

type Message = {
  id: number;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const helpfulResponses: { [key: string]: string } = {
  'how do i sell my license': 'To sell your license, simply click on the "Sell My Licenses" button at the top of the page and fill out the form. Our team will provide a valuation within 24 hours.',
  'what types of licenses can i sell': 'We accept most major software licenses including Microsoft, Adobe, Autodesk, Oracle, SAP, and Salesforce. If you have a different type, please mention it in your contact form.',
  'how much is my license worth': 'License values vary based on type, remaining duration, version, and current market demand. For a personalized valuation, please submit your license details through our contact form.',
  'how long does it take to sell': 'Most licenses sell within 72 hours of listing. Enterprise licenses may take 5-7 business days due to additional compliance verification.',
  'is this legal': 'Yes, software license resale is legal in most jurisdictions. We ensure all transfers comply with the relevant licensing agreements and terms of service.',
  'payment methods': 'We offer several payment options including direct bank transfer, PayPal, and wire transfer. All payments are processed within 48 hours of completed sale.',
  'default': 'Thank you for your message! To provide you with the most accurate information, please contact us through our form above. A representative will respond within 24 hours.'
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: 'Hi there! How can I help you with software license sales today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current && isOpen && !isMinimized) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isMinimized]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate typing delay
    setTimeout(() => {
      // Find appropriate response
      let botResponse = helpfulResponses.default;
      const userQuestion = inputValue.toLowerCase();
      
      Object.keys(helpfulResponses).forEach(key => {
        if (userQuestion.includes(key)) {
          botResponse = helpfulResponses[key];
        }
      });
      
      const botMessage: Message = {
        id: messages.length + 2,
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className={`fixed z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen && !isMinimized
            ? 'bottom-[380px] right-6 bg-red-500 hover:bg-red-600'
            : 'bottom-6 right-6 bg-blue-600 hover:bg-blue-700'
        }`}
        aria-label="Chat with us"
      >
        {isOpen && !isMinimized ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageSquare className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          className={`fixed z-40 right-6 w-[350px] bg-white dark:bg-gray-900 rounded-xl shadow-2xl transition-all duration-300 overflow-hidden ${
            isMinimized
              ? 'h-16 bottom-6'
              : 'h-[380px] bottom-6'
          }`}
        >
          {/* Chat header */}
          <div className="flex items-center justify-between px-4 py-3 bg-blue-600 text-white">
            <div className="flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              <h3 className="font-medium">SoftSell Assistant</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMinimize}
                className="p-1 rounded hover:bg-blue-700 transition-colors"
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                {isMinimized ? (
                  <Maximize2 className="w-4 h-4" />
                ) : (
                  <Minimize2 className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={toggleChat}
                className="p-1 rounded hover:bg-blue-700 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Chat messages */}
              <div className="p-4 h-[280px] overflow-y-auto">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-4 ${
                      message.sender === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div
                      className={`inline-block px-4 py-2 rounded-lg max-w-[80%] ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-tr-none'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-tl-none'
                      }`}
                    >
                      {message.content}
                    </div>
                    <div
                      className={`text-xs mt-1 text-gray-500 ${
                        message.sender === 'user' ? 'text-right' : 'text-left'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat input */}
              <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-l-md border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-white"
                    placeholder="Type your message..."
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md transition-colors"
                    aria-label="Send message"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatWidget;