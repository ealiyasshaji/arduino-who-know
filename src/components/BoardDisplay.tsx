import React, { useState } from 'react';
import { ArduinoBoard } from '../types/arduino';
import { Tabs } from './Tabs';
import { ImageModal } from './ImageModal';
import { GitCompare, ZoomIn } from 'lucide-react';

interface BoardDisplayProps {
  boardName: string;
  board: ArduinoBoard;
  onCompare: () => void;
}

export const BoardDisplay: React.FC<BoardDisplayProps> = ({
  boardName,
  board,
  onCompare,
}) => {
  const [activeTab, setActiveTab] = useState('specifications');
  const [showImageModal, setShowImageModal] = useState(false);

  const specifications = [
    { label: 'Microcontroller', value: board.microcontroller },
    { label: 'Operating Voltage', value: board.operating_voltage },
    { label: 'Input Voltage', value: board.input_voltage },
    { label: 'Digital I/O Pins', value: board.digital_pins },
    { label: 'Analog Input Pins', value: board.analog_pins },
    { label: 'Flash Memory', value: board.flash_memory },
    { label: 'SRAM', value: board.sram || 'N/A' },
    { label: 'EEPROM', value: board.eeprom || 'N/A' },
    { label: 'Clock Speed', value: board.clock_speed },
    { label: 'Dimensions', value: board.dimensions },
    { label: 'Weight', value: board.weight },
  ];

  const tabs = [
    { id: 'specifications', label: 'Specifications' },
    { id: 'components', label: 'Components' },
    { id: 'modules', label: 'Compatible Modules' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'specifications':
        return (
          <div className="space-y-3">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="flex justify-between items-start py-3 border-b border-slate-100 last:border-b-0"
              >
                <span className="font-medium text-slate-600 flex-shrink-0 w-1/3">{spec.label}:</span>
                <span className="text-slate-800 text-right flex-1 ml-4">{spec.value}</span>
              </div>
            ))}
          </div>
        );
      case 'components':
        return (
          <div className="space-y-4">
            {Object.entries(board.components).map(([component, description]) => (
              <div key={component} className="border-b border-slate-100 pb-4 last:border-b-0">
                <h4 className="font-semibold text-blue-600 mb-2">{component}</h4>
                <p className="text-slate-700 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        );
      case 'modules':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {board.compatible_modules.map((module, index) => (
              <div
                key={index}
                className="bg-slate-50 px-4 py-3 rounded-lg text-sm text-slate-700 border border-slate-100"
              >
                {module}
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
        {/* Board Image */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200 relative group">
            <img
              src={board.image}
              alt={boardName}
              className="w-full h-auto object-contain rounded-lg cursor-pointer transition-transform duration-200 group-hover:scale-105"
              onClick={() => setShowImageModal(true)}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-xl flex items-center justify-center">
              <div className="bg-white bg-opacity-90 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ZoomIn className="w-5 h-5 text-slate-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Board Info */}
        <div className="lg:col-span-2">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-3">{boardName}</h1>
              <p className="text-slate-600 leading-relaxed">{board.intro}</p>
            </div>
          </div>

          {/* Tabs */}
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* Tab Content */}
          <div className="mt-6 min-h-[300px] bg-slate-50 rounded-lg p-6">
            {renderTabContent()}
          </div>

          {/* Compare Button */}
          <div className="mt-6">
            <button
              onClick={onCompare}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <GitCompare className="w-4 h-4" />
              Compare with another board
            </button>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={showImageModal}
        onClose={() => setShowImageModal(false)}
        imageUrl={board.image}
        boardName={boardName}
      />

    </div>
  );
};