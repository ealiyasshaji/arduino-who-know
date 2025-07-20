import React, { useState } from 'react';
import { BoardSelector } from './components/BoardSelector';
import { BoardDisplay } from './components/BoardDisplay';
import { BoardComparison } from './components/BoardComparison';
import { ProjectAssistant } from './components/ProjectAssistant';
import { arduinoBoards } from './data/arduinoBoards';
import { Cpu, Github, ExternalLink } from 'lucide-react';

function App() {
  const [selectedBoard, setSelectedBoard] = useState('Arduino UNO R3');
  const [showComparison, setShowComparison] = useState(false);

  const handleBoardSelect = (boardName: string) => {
    setSelectedBoard(boardName);
    setShowComparison(false);
  };

  const handleShowComparison = () => {
    setShowComparison(true);
  };

  const handleCloseComparison = () => {
    setShowComparison(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg">
                <Cpu className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  ARDUINO WHO-KNOW?
                </h1>
                <p className="text-slate-600 mt-1">Your comprehensive guide to Arduino circuit boards</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://arduino.cc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Arduino.cc
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BoardSelector
              boards={arduinoBoards}
              selectedBoard={selectedBoard}
              onBoardSelect={handleBoardSelect}
            />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {showComparison ? (
              <BoardComparison
                boards={arduinoBoards}
                currentBoard={selectedBoard}
                onClose={handleCloseComparison}
              />
            ) : (
              <BoardDisplay
                boardName={selectedBoard}
                board={arduinoBoards[selectedBoard]}
                onCompare={handleShowComparison}
              />
            )}
          </div>
        </div>
      </main>

      {/* Project Assistant */}
      <ProjectAssistant
        boards={arduinoBoards}
        onBoardSelect={handleBoardSelect}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-slate-600 mb-4">
              Arduino WHO-KNOW? - Comprehensive guide to Arduino boards and their specifications
            </p>
            <div className="flex justify-center items-center space-x-6 text-sm text-slate-500">
              <span>Built with React & TypeScript</span>
              <span>•</span>
              <span>Powered by Vite</span>
              <span>•</span>
              <span>Styled with Tailwind CSS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;