import React from 'react';
import { DownOutlined } from '@ant-design/icons';

interface LanguageDropdownProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  selectedLanguage: string;
  handleChangeLanguage: (code: string) => void;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ isOpen, toggleDropdown, selectedLanguage, handleChangeLanguage }) => {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'es', name: 'Español' },
  ];

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {languages.find(lang => lang.code === selectedLanguage)?.name}
          <DownOutlined className="ml-2" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="none">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleChangeLanguage(language.code)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;