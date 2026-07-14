import { useState } from 'react';
import axios from 'axios';

export default function Translator() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLang, setTargetLang] = useState('es');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setError(null);
    setTranslatedText('');

    try {
      // Using a completely free API that requires no API keys!
      const response = await axios.get(
        'https://api.mymemory.translated.net/get',
        {
          params: {
            q: inputText,
            langpair: `en|${targetLang}`
          }
        }
      );

      if (response.data.responseStatus !== 200) {
        throw new Error(response.data.responseDetails || 'Translation failed');
      }

      setTranslatedText(response.data.responseData.translatedText);
    } catch (err) {
      console.error('Translation Error:', err);
      setError(
        err.message || 
        'Failed to translate text. Please check your network connection.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-4">
      <div className="bg-white rounded-[2.5rem] shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] border border-slate-100 p-8 md:p-12 relative overflow-hidden">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-purple-50 to-white blur-3xl pointer-events-none"></div>

        <div className="flex items-center justify-center mb-10 relative z-10">
          <h2 className="text-4xl font-extrabold text-slate-900 text-center drop-shadow-sm">
            Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Translator</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
          
          <div className="flex flex-col space-y-3">
            <label className="text-slate-700 text-sm font-bold ml-1 uppercase tracking-wider">English (Input)</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type something in English to translate..."
              className="w-full bg-white border-2 border-slate-200 rounded-2xl p-5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 resize-none min-h-[220px] transition-all shadow-sm font-medium text-lg"
            />
          </div>

          <div className="flex flex-col space-y-3">
            <label className="text-slate-700 text-sm font-bold ml-1 uppercase tracking-wider">Translated (Output)</label>
            <div className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-5 text-slate-900 min-h-[220px] shadow-inner font-medium text-lg">
              {translatedText ? (
                <p className="whitespace-pre-wrap">{translatedText}</p>
              ) : (
                <span className="text-slate-400 italic select-none">
                  Translation will appear here...
                </span>
              )}
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl mb-8 flex items-start gap-3 animate-in fade-in duration-300 relative z-10">
            <svg className="w-5 h-5 shrink-0 mt-0.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-between border-t border-slate-100 pt-8 relative z-10">
          
          <div className="relative w-full sm:w-auto">
            <select
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="w-full sm:w-56 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl px-5 py-4 focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-400/20 cursor-pointer appearance-none shadow-sm transition-all"
            >
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="ja">Japanese</option>
              <option value="zh-Hans">Chinese (Simplified)</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          <button
            onClick={handleTranslate}
            disabled={isLoading || !inputText.trim()}
            className="w-full sm:w-auto group relative flex items-center justify-center gap-3 bg-slate-900 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-xl shadow-slate-900/20 hover:shadow-slate-900/40 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-slate-900/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {isLoading ? (
              <>
                <svg className="animate-spin relative z-10 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="relative z-10 text-lg">Translating...</span>
              </>
            ) : (
              <>
                <svg className="w-6 h-6 relative z-10 text-purple-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="relative z-10 text-lg">Translate Text</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
