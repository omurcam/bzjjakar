import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const languages = [
    {
      code: 'en',
      name: 'English',
      flag: '🇺🇸'
    },
    {
      code: 'tr',
      name: 'Türkçe',
      flag: '🇹🇷'
    },
    {
      code: 'ar',
      name: 'العربية',
      flag: '🇸🇦'
    }
  ];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative group">
      <button 
        className="flex items-center space-x-2 px-3 py-2 rounded-full bg-gradient-card hover:bg-gradient-primary transition-all duration-300 text-soft-charcoal hover:shadow-soft"
        aria-label={t('common.language')}
      >
        <Globe className="w-4 h-4" />
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="hidden sm:inline text-sm font-medium">{currentLanguage.name}</span>
      </button>
      
      <div className="absolute right-0 top-full mt-2 w-40 bg-pure-white rounded-xl shadow-pastel border border-light-gray/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gradient-card transition-all duration-300 first:rounded-t-xl last:rounded-b-xl ${
              i18n.language === language.code ? 'bg-gradient-primary text-soft-charcoal' : 'text-medium-gray hover:text-soft-charcoal'
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span className="text-sm font-medium">{language.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;