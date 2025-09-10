import React, { useState, useRef, useEffect } from 'react';
import './Assistant.css';

const Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Knowledge base for your specific business
  const knowledgeBase = {
    greetings: {
      patterns: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon'],
      response: "Hello! I'm your business assistant. How can I help you with our services and industries today?",
      options: ['Services', 'Industries', 'Contact', 'About Us']
    },

    // Industries
    chemical: {
      patterns: ['chemical', 'chemical industry', 'chemical services', 'chemical solutions'],
      response: "**Chemical Industry Services:**\n\n• Chemical process optimization\n• Quality control and testing\n• Regulatory compliance\n• Material safety analysis\n• Environmental impact assessment\n\nWhich specific chemical service are you interested in?",
      options: ['Process Optimization', 'Quality Control', 'Regulatory Compliance', 'All Services']
    },

    construction: {
      patterns: ['construction', 'construction industry', 'building', 'construction services'],
      response: "**Construction Industry Solutions:**\n\n• Project management consulting\n• Supply chain optimization\n• Safety compliance\n• Quality assurance\n• Cost estimation and analysis\n\nWhat construction service do you need?",
      options: ['Project Management', 'Supply Chain', 'Safety Compliance', 'Quality Assurance']
    },

    food: {
      patterns: ['food', 'food industry', 'food services', 'food safety', 'food processing'],
      response: "**Food Industry Expertise:**\n\n• Food safety compliance\n• Quality control systems\n• Supply chain management\n• Process optimization\n• Regulatory guidance\n\nWhich food industry service interests you?",
      options: ['Food Safety', 'Quality Control', 'Supply Chain', 'Process Optimization']
    },

    government: {
      patterns: ['government', 'public sector', 'government services', 'municipal', 'federal'],
      response: "**Government Sector Services:**\n\n• Public policy consulting\n• Regulatory compliance\n• Data management solutions\n• Process optimization\n• Audit and accountability systems\n\nWhat government service do you require?",
      options: ['Policy Consulting', 'Regulatory Compliance', 'Data Management', 'Process Optimization']
    },

    // Services
    data: {
      patterns: ['data', 'data analytics', 'data analysis', 'big data', 'data services'],
      response: "**Data Analytics Services:**\n\n• Business intelligence solutions\n• Predictive analytics\n• Data visualization\n• Machine learning implementation\n• Custom reporting systems\n\nWhat type of data solution do you need?",
      options: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization', 'All Services']
    },

    ai: {
      patterns: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'ai services'],
      response: "**AI & Machine Learning Services:**\n\n• Custom AI solutions\n• Machine learning models\n• Natural language processing\n• Computer vision systems\n• AI integration services\n\nWhich AI service are you looking for?",
      options: ['Custom AI Solutions', 'ML Models', 'NLP Services', 'Computer Vision']
    },

    cloud: {
      patterns: ['cloud', 'cloud services', 'cloud computing', 'cloud solutions', 'aws', 'azure'],
      response: "**Cloud Services:**\n\n• Cloud migration\n• Infrastructure setup\n• Security implementation\n• Cost optimization\n• 24/7 monitoring and support\n\nWhat cloud service do you need?",
      options: ['Cloud Migration', 'Infrastructure Setup', 'Security', 'Cost Optimization']
    },

    consulting: {
      patterns: ['consulting', 'consultation', 'business consulting', 'professional services'],
      response: "**Consulting Services:**\n\n• Strategic planning\n• Business process optimization\n• Technology implementation\n• Change management\n• Performance improvement\n\nWhat type of consulting do you require?",
      options: ['Strategic Planning', 'Process Optimization', 'Technology Implementation', 'All Services']
    },

    // General company info
    about: {
      patterns: ['about', 'about us', 'company', 'who are you', 'what do you do'],
      response: "We are a professional services company offering:\n\n• **Industry Solutions**: Chemical, Construction, Food, Government\n• **Services**: Data Analytics, AI, Cloud, Consulting\n• **Expertise**: Years of experience across multiple sectors\n\nWhat would you like to know more about?",
      options: ['Industries', 'Services', 'Contact', 'Case Studies']
    },

    contact: {
      patterns: ['contact', 'get in touch', 'email', 'phone', 'address', 'location'],
      response: "**Contact Information:**\n\n📞 Phone: (555) 123-4567\n📧 Email: info@company.com\n🏢 Address: 123 Business District, City, State\n⏰ Hours: Mon-Fri 9AM-5PM\n\nWould you like to schedule a consultation?",
      options: ['Schedule Meeting', 'Request Quote', 'Call Now', 'Email Us']
    },

    default: {
      response: "I'm not sure I understand. Could you please rephrase your question or choose from the options below?",
      options: ['Services', 'Industries', 'Contact', 'About Us']
    }
  };

  // Common questions for quick access
  const commonQuestions = [
    { label: 'Chemical Services', question: 'Tell me about chemical industry services' },
    { label: 'Construction', question: 'What construction services do you offer?' },
    { label: 'Data Analytics', question: 'What data analytics services do you provide?' },
    { label: 'AI Services', question: 'What AI and machine learning services do you offer?' },
    { label: 'Contact', question: 'How can I contact your company?' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when assistant opens
      setTimeout(() => {
        handleResponse(knowledgeBase.greetings);
      }, 500);
    }
  }, [isOpen]);

  const findResponse = (message) => {
    const lowerMessage = message.toLowerCase();

    for (const [key, data] of Object.entries(knowledgeBase)) {
      if (data.patterns && data.patterns.some(pattern => lowerMessage.includes(pattern))) {
        return data;
      }
    }

    return knowledgeBase.default;
  };

  const handleResponse = (responseData) => {
    const botMessage = {
      text: responseData.response,
      sender: 'bot',
      options: responseData.options,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const response = findResponse(inputMessage);
      handleResponse(response);
    }, 1000);
  };

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
  };

  const handleOptionSelect = (option) => {
    const userMessage = {
      text: option,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Find appropriate response for the selected option
    setTimeout(() => {
      let response = knowledgeBase.default;

      // Map options to responses based on your business context
      if (option.includes('Chemical') || option.includes('Process') || option.includes('Quality') || option.includes('Regulatory')) {
        response = knowledgeBase.chemical;
      } else if (option.includes('Construction') || option.includes('Project') || option.includes('Safety')) {
        response = knowledgeBase.construction;
      } else if (option.includes('Food') || option.includes('Safety') || option.includes('Quality')) {
        response = knowledgeBase.food;
      } else if (option.includes('Government') || option.includes('Policy') || option.includes('Regulatory')) {
        response = knowledgeBase.government;
      } else if (option.includes('Data') || option.includes('Analytics') || option.includes('Business Intelligence')) {
        response = knowledgeBase.data;
      } else if (option.includes('AI') || option.includes('Machine Learning') || option.includes('ML')) {
        response = knowledgeBase.ai;
      } else if (option.includes('Cloud') || option.includes('Migration') || option.includes('Infrastructure')) {
        response = knowledgeBase.cloud;
      } else if (option.includes('Consulting') || option.includes('Strategic') || option.includes('Planning')) {
        response = knowledgeBase.consulting;
      } else if (option.includes('Contact') || option.includes('Schedule') || option.includes('Call')) {
        response = knowledgeBase.contact;
      }

      handleResponse(response);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>


      {/* Assistant Button */}
      <button
        className="assistant-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat assistant"
      >
        <img
          src="/images/Footer/Assistant/robot.png"
          alt="Chat Assistant"
        />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="assistant-window">
          <div className="assistant-header">
            <div className="assistant-info">
              <div className="assistant-avatar">
                <img
                  src="/images/Footer/Assistant/robot.png"
                  alt="Assistant Robot"
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <h3>SpectraCore Analytics</h3>
                <p>Here to help with our services</p>
              </div>
            </div>
            <button
              className="close-assistant"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                <div className="message-content">
                  {message.sender === 'bot' ? (
                    <>
                      <div className="message-text">
                        {message.text.split('\n').map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                      {message.options && (
                        <div className="message-options">
                          {message.options.map((option, optIndex) => (
                            <button
                              key={optIndex}
                              className="option-button"
                              onClick={() => handleOptionSelect(option)}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="message-text">
                      <p>{message.text}</p>
                    </div>
                  )}
                  <span className="message-time">{message.timestamp}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="message bot">
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

          {/* Quick Questions */}
          <div className="quick-questions">
            <p>Quick questions:</p>
            <div className="question-buttons">
              {commonQuestions.map((item, index) => (
                <button
                  key={index}
                  className="question-button"
                  onClick={() => handleQuickQuestion(item.question)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="chat-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about our services, industries, or contact info..."
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Assistant;