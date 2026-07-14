import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto mt-2 bg-white text-slate-900 rounded-[2.5rem] p-8 md:p-16 shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] flex flex-col items-center relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-indigo-50 to-white blur-3xl pointer-events-none"></div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight drop-shadow-sm relative z-10 text-center">
        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">QSkill Tools</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-600 mb-12 font-light max-w-2xl text-center relative z-10">
        Your premium suite of developer tools, completely free to use.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 w-full relative z-10">
        <Link 
          to="/generator" 
          className="group relative flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto bg-slate-900 rounded-2xl font-bold text-white shadow-xl shadow-slate-900/20 hover:shadow-slate-900/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <svg className="w-6 h-6 relative z-10 text-indigo-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          <span className="relative z-10">String Generator</span>
        </Link>
        
        <Link 
          to="/translator" 
          className="group relative flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto bg-white border-2 border-slate-200 rounded-2xl font-bold text-slate-800 shadow-lg shadow-slate-200/50 hover:border-purple-400 hover:shadow-purple-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <svg className="w-6 h-6 relative z-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
          <span className="relative z-10">Translator</span>
        </Link>
      </div>
      
      <div className="relative group w-full max-w-4xl z-10">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white flex items-center justify-center p-2 border border-slate-100">
           <img 
             src="/hero-image.png" 
             alt="Premium Developer Tools" 
             className="rounded-[1.5rem] object-cover w-full h-auto max-h-[450px] transition-transform duration-700 group-hover:scale-[1.02]"
           />
        </div>
      </div>
    </div>
  );
}
