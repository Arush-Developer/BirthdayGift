import React, { useState } from 'react';
import { Home, Camera, Mail, Gamepad2, Gift, Stars, Compass, Image, CreditCard, Italic as Crystal, Calculator, Music, Sparkles } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'welcome', label: 'Welcome', icon: Home },
    { id: 'memory', label: 'Memory Lane', icon: Camera },
    { id: 'letters', label: 'Love Letters', icon: Mail },
    { id: 'balloons', label: 'Balloon Game', icon: Gamepad2 },
    { id: 'quiz', label: 'Quiz Time', icon: Gamepad2 },
    { id: 'gift', label: 'Gift Box', icon: Gift },
    { id: 'stars', label: 'Starry Night', icon: Stars },
    { id: 'dreams', label: 'Future Dreams', icon: Compass },
    { id: 'polaroid', label: 'Polaroid Wall', icon: Image },
    { id: 'scratch', label: 'Scratch Card', icon: CreditCard },
    { id: 'fortune', label: 'Fortune Teller', icon: Crystal },
    { id: 'calculator', label: 'Love Calculator', icon: Calculator },
    { id: 'playlist', label: 'Playlist', icon: Music },
    { id: 'finale', label: 'Grand Finale', icon: Sparkles },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm shadow-lg border-b border-pink-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
              Saanvi's Birthday 💖
            </h1>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors"
          >
            ☰
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-1 overflow-x-auto">
            {sections.map(section => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => onSectionChange(section.id)}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    currentSection === section.id
                      ? 'bg-pink-500 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-pink-100 hover:text-pink-600'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-1" />
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-pink-200">
            <div className="grid grid-cols-2 gap-2">
              {sections.map(section => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      onSectionChange(section.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      currentSection === section.id
                        ? 'bg-pink-500 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-pink-100 hover:text-pink-600'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {section.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
