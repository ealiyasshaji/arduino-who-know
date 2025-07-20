import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { ArduinoBoardData } from '../types/arduino';

interface BoardSelectorProps {
  boards: ArduinoBoardData;
  selectedBoard: string;
  onBoardSelect: (boardName: string) => void;
}

export const BoardSelector: React.FC<BoardSelectorProps> = ({
  boards,
  selectedBoard,
  onBoardSelect,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBoards = useMemo(() => {
    if (!searchTerm) return Object.keys(boards);
    
    return Object.keys(boards).filter(boardName =>
      boardName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      boards[boardName].microcontroller.toLowerCase().includes(searchTerm.toLowerCase()) ||
      boards[boardName].intro.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [boards, searchTerm]);

  const clearSearch = () => setSearchTerm('');

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Select Arduino Board</h2>
        
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search boards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-slate-700 placeholder-slate-400"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        
        {searchTerm && (
          <p className="text-sm text-slate-500 mt-2">
            {filteredBoards.length} board{filteredBoards.length !== 1 ? 's' : ''} found
          </p>
        )}
      </div>

      <div className="max-h-96 overflow-y-auto">
        <div className="p-2 space-y-1">
          {filteredBoards.map((boardName) => (
            <button
              key={boardName}
              onClick={() => onBoardSelect(boardName)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                selectedBoard === boardName
                  ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <div className="font-medium">{boardName}</div>
              <div className="text-sm opacity-75 mt-1">
                {boards[boardName].microcontroller}
              </div>
            </button>
          ))}
          
          {filteredBoards.length === 0 && (
            <div className="text-center py-8 text-slate-500">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>No boards found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};