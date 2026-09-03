import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import Translator from './components/Translator';

function App() {
  const navLinkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-out ${
      isActive
        ? 'bg-slate-800 text-indigo-400 shadow-sm ring-1 ring-slate-700/50'
        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
    }`;

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
        
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              
              <div className="flex-shrink-0 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
                  Q
                </div>
                <span className="font-semibold text-lg tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200">
                  Quick Translate
                </span>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-2">
                  <NavLink to="/translator" className={navLinkClasses}>
                    Translator
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Navigate to="/translator" replace />} />
            <Route path="/translator" element={<Translator />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
