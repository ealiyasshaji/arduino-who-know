import React, { useState } from 'react';
import { ArduinoBoardData } from '../types/arduino';
import { X, Search } from 'lucide-react';

interface BoardComparisonProps {
  boards: ArduinoBoardData;
  currentBoard: string;
  onClose: () => void;
}

export const BoardComparison: React.FC<BoardComparisonProps> = ({
  boards,
  currentBoard,
  onClose,
}) => {
  const [compareBoard, setCompareBoard] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');

  const availableBoards = Object.keys(boards).filter(board => board !== currentBoard);
  const filteredBoards = availableBoards.filter(board =>
    board.toLowerCase().includes(searchTerm.toLowerCase()) ||
    boards[board].microcontroller.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentBoardData = boards[currentBoard];
  const compareBoardData = compareBoard ? boards[compareBoard] : null;

  const specifications = [
    { key: 'microcontroller', label: 'Microcontroller' },
    { key: 'operating_voltage', label: 'Operating Voltage' },
    { key: 'input_voltage', label: 'Input Voltage' },
    { key: 'digital_pins', label: 'Digital I/O Pins' },
    { key: 'analog_pins', label: 'Analog Input Pins' },
    { key: 'flash_memory', label: 'Flash Memory' },
    { key: 'sram', label: 'SRAM' },
    { key: 'eeprom', label: 'EEPROM' },
    { key: 'clock_speed', label: 'Clock Speed' },
    { key: 'dimensions', label: 'Dimensions' },
    { key: 'weight', label: 'Weight' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="flex justify-between items-center p-6 border-b border-slate-200 bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-800">Board Comparison</h2>
        <button
          onClick={onClose}
          className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6">
        {/* Board Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">
            Compare <span className="text-blue-600">{currentBoard}</span> with:
          </h3>
          
          {/* Search for comparison board */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search for a board to compare..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Board selection dropdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-48 overflow-y-auto">
            {filteredBoards.map((boardName) => (
              <button
                key={boardName}
                onClick={() => setCompareBoard(boardName)}
                className={`text-left p-3 rounded-lg border transition-all duration-200 ${
                  compareBoard === boardName
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="font-medium text-sm">{boardName}</div>
                <div className="text-xs opacity-75 mt-1">
                  {boards[boardName].microcontroller}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        {compareBoard && compareBoardData && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left py-4 px-4 font-semibold text-slate-700 border-b border-slate-200">
                    Specification
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-blue-600 border-b border-slate-200">
                    {currentBoard}
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-green-600 border-b border-slate-200">
                    {compareBoard}
                  </th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, index) => {
                  const currentValue = currentBoardData[spec.key as keyof typeof currentBoardData] || 'N/A';
                  const compareValue = compareBoardData[spec.key as keyof typeof compareBoardData] || 'N/A';
                  
                  return (
                    <tr
                      key={spec.key}
                      className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-slate-100 transition-colors`}
                    >
                      <td className="py-3 px-4 font-medium text-slate-700 border-b border-slate-100">
                        {spec.label}
                      </td>
                      <td className="py-3 px-4 text-slate-600 border-b border-slate-100">
                        {currentValue}
                      </td>
                      <td className="py-3 px-4 text-slate-600 border-b border-slate-100">
                        {compareValue}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {!compareBoard && (
          <div className="text-center py-12 text-slate-500">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg">Select a board above to start comparing</p>
          </div>
        )}
      </div>
    </div>
  );
};