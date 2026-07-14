import { useState, useCallback, useEffect } from 'react';

export default function StringGenerator() {
  const [length, setLength] = useState(16);
  const [randomString, setRandomString] = useState('');

  const generateString = useCallback(() => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let newString = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newString += charset[randomIndex];
    }
    
    setRandomString(newString);
  }, [length]);

  useEffect(() => {
    generateString();
  }, [length, generateString]);

  return (
    <div className="max-w-2xl mx-auto mt-4">
      <div className="bg-white rounded-[2.5rem] shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] border border-slate-100 p-8 md:p-12 relative overflow-hidden">
        
        {/* Decorative background blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-indigo-50 to-white blur-3xl pointer-events-none"></div>

        <h2 className="text-3xl font-extrabold text-slate-900 mb-8 relative z-10 text-center drop-shadow-sm">
          Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">String Generator</span>
        </h2>
        
        <div className="bg-slate-50 border-2 border-slate-100 rounded-2xl p-6 mb-10 flex items-center justify-center min-h-[140px] shadow-inner relative z-10">
          <p className="font-mono text-2xl md:text-3xl text-indigo-600 tracking-wider break-all text-center font-bold selection:bg-indigo-100">
            {randomString}
          </p>
        </div>

        <div className="space-y-10 relative z-10">
          
          <div>
            <div className="flex justify-between items-center text-slate-700 mb-5">
              <label htmlFor="length-slider" className="font-bold text-sm uppercase tracking-wider">
                String Length
              </label>
              <span className="bg-white border-2 border-slate-100 px-4 py-1.5 rounded-lg text-indigo-600 font-mono text-sm shadow-sm font-bold">
                {length} chars
              </span>
            </div>
            
            <input
              id="length-slider"
              type="range"
              min="4"
              max="32"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:accent-indigo-500 transition-all focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
            />
            <div className="flex justify-between text-sm text-slate-400 mt-3 font-mono font-bold">
              <span>4</span>
              <span>32</span>
            </div>
          </div>

          <button
            onClick={generateString}
            className="w-full group relative flex items-center justify-center gap-3 bg-slate-900 text-white font-bold py-5 px-6 rounded-2xl transition-all duration-300 active:scale-[0.98] shadow-xl shadow-slate-900/20 hover:shadow-slate-900/40 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg className="w-6 h-6 relative z-10 text-indigo-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="relative z-10 text-lg">Regenerate Now</span>
          </button>
          
        </div>
      </div>
    </div>
  );
}
