import React, { useState } from 'react';
import { Bot, Send, Lightbulb, X, MessageCircle } from 'lucide-react';
import { ArduinoBoardData } from '../types/arduino';

interface ProjectAssistantProps {
  boards: ArduinoBoardData;
  onBoardSelect: (boardName: string) => void;
}

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  suggestions?: string[];
}

export const ProjectAssistant: React.FC<ProjectAssistantProps> = ({
  boards,
  onBoardSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hi! I'm your Arduino project assistant. Describe your project idea and I'll suggest the best Arduino board for your needs. What would you like to build?",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const analyzeProject = (projectDescription: string): string[] => {
    const description = projectDescription.toLowerCase();
    const suggestions: string[] = [];

    // IoT and WiFi projects
    if (description.includes('wifi') || description.includes('internet') || description.includes('iot') || description.includes('cloud')) {
      suggestions.push('Arduino MKR WiFi 1010', 'Arduino Nano 33 IoT', 'Arduino UNO R4');
    }

    // Bluetooth projects
    if (description.includes('bluetooth') || description.includes('ble') || description.includes('wireless')) {
      suggestions.push('Arduino Nano 33 IoT', 'Arduino MKR WiFi 1010', 'Arduino Nicla Sense ME');
    }

    // Computer vision and AI
    if (description.includes('camera') || description.includes('vision') || description.includes('ai') || description.includes('machine learning') || description.includes('object detection')) {
      suggestions.push('Arduino Nicla Vision', 'Arduino Portenta H7');
    }

    // Wearable projects
    if (description.includes('wearable') || description.includes('clothing') || description.includes('textile') || description.includes('fabric')) {
      suggestions.push('Arduino Lilypad', 'Arduino Nano 33 IoT', 'Arduino Micro');
    }

    // Many pins/complex projects
    if (description.includes('many pins') || description.includes('complex') || description.includes('multiple motors') || description.includes('cnc') || description.includes('3d printer')) {
      suggestions.push('Arduino Mega 2560', 'Arduino Due', 'Arduino Portenta H7');
    }

    // Small/compact projects
    if (description.includes('small') || description.includes('compact') || description.includes('tiny') || description.includes('space') || description.includes('portable')) {
      suggestions.push('Arduino Nano', 'Arduino Micro', 'Arduino Pro Mini', 'Arduino Nano Every');
    }

    // Battery powered projects
    if (description.includes('battery') || description.includes('portable') || description.includes('low power') || description.includes('solar')) {
      suggestions.push('Arduino Pro Mini', 'Arduino MKR WiFi 1010', 'Arduino Nano 33 IoT');
    }

    // Sensor projects
    if (description.includes('sensor') || description.includes('temperature') || description.includes('humidity') || description.includes('motion') || description.includes('environment')) {
      suggestions.push('Arduino Nicla Sense ME', 'Arduino UNO R3', 'Arduino Nano 33 IoT');
    }

    // Audio projects
    if (description.includes('audio') || description.includes('sound') || description.includes('music') || description.includes('speaker') || description.includes('microphone')) {
      suggestions.push('Arduino Due', 'Arduino Zero', 'Arduino Nicla Vision');
    }

    // Cellular/GSM projects
    if (description.includes('cellular') || description.includes('gsm') || description.includes('remote') || description.includes('tracking')) {
      suggestions.push('Arduino MKR GSM 1400', 'Arduino MKR NB 1500');
    }

    // LoRa/long range projects
    if (description.includes('lora') || description.includes('long range') || description.includes('agriculture') || description.includes('farm')) {
      suggestions.push('Arduino MKR WAN 1310');
    }

    // Gaming/controller projects
    if (description.includes('game') || description.includes('controller') || description.includes('joystick') || description.includes('buttons')) {
      suggestions.push('Arduino Esplora', 'Arduino Leonardo', 'Arduino Micro');
    }

    // Beginner projects
    if (description.includes('beginner') || description.includes('learning') || description.includes('first') || description.includes('simple')) {
      suggestions.push('Arduino UNO R3', 'Arduino UNO R4', 'Arduino Nano');
    }

    // Industrial projects
    if (description.includes('industrial') || description.includes('professional') || description.includes('commercial')) {
      suggestions.push('Arduino Portenta H7', 'Arduino Portenta C33', 'Arduino MKR WiFi 1010');
    }

    // Default suggestions if no specific matches
    if (suggestions.length === 0) {
      suggestions.push('Arduino UNO R3', 'Arduino Nano', 'Arduino MKR WiFi 1010');
    }

    // Remove duplicates and limit to top 3
    return [...new Set(suggestions)].slice(0, 3);
  };

  const generateResponse = (projectDescription: string): string => {
    const suggestions = analyzeProject(projectDescription);
    const description = projectDescription.toLowerCase();

    let response = "Based on your project description, here are my recommendations:\n\n";

    suggestions.forEach((boardName, index) => {
      const board = boards[boardName];
      if (board) {
        response += `${index + 1}. **${boardName}**\n`;
        response += `   ${board.intro}\n`;
        response += `   Key specs: ${board.microcontroller}, ${board.operating_voltage}, ${board.digital_pins} digital pins\n\n`;
      }
    });

    // Add specific reasoning
    if (description.includes('wifi') || description.includes('iot')) {
      response += "💡 These boards have built-in WiFi capabilities perfect for IoT projects.\n\n";
    }
    if (description.includes('small') || description.includes('compact')) {
      response += "💡 These compact boards are ideal for space-constrained projects.\n\n";
    }
    if (description.includes('beginner')) {
      response += "💡 These boards are beginner-friendly with excellent documentation and community support.\n\n";
    }

    response += "Click on any board name above to view its detailed specifications!";

    return response;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const suggestions = analyzeProject(inputValue);
      const response = generateResponse(inputValue);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response,
        suggestions,
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleBoardClick = (boardName: string) => {
    onBoardSelect(boardName);
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-40"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl h-[600px] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Arduino Project Assistant</h3>
                  <p className="text-sm text-slate-600">Get board recommendations for your project</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-800'
                    }`}
                  >
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">
                      {message.content.split('**').map((part, index) => {
                        if (index % 2 === 1 && message.suggestions?.includes(part)) {
                          return (
                            <button
                              key={index}
                              onClick={() => handleBoardClick(part)}
                              className="font-semibold text-blue-600 hover:text-blue-800 underline cursor-pointer"
                            >
                              {part}
                            </button>
                          );
                        }
                        return index % 2 === 1 ? <strong key={index}>{part}</strong> : part;
                      })}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 text-slate-800 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm text-slate-600">Analyzing your project...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-200">
              <div className="flex gap-2">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Describe your project idea... (e.g., 'I want to build a WiFi-enabled temperature monitor')"
                  className="flex-1 p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={2}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                <Lightbulb className="w-3 h-3" />
                <span>Tip: Be specific about your project requirements (WiFi, sensors, size, etc.)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};