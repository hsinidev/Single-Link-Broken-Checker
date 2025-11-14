
import React, { useState } from 'react';
import { checkLinkStatus } from '../services/linkCheckerService';
import { LinkStatusResult } from '../types';

const statusStyles: { [key in LinkStatusResult['status']]: { bg: string; text: string; border: string } } = {
  success: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
  redirect: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/30' },
  error: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
  info: { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/30' },
};


const Loader: React.FC = () => (
    <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        <span className="text-slate-300 font-fira-code text-lg">Pinging server...</span>
    </div>
);

const LinkCheckerTool: React.FC = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<LinkStatusResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      setError('Please enter a URL to check.');
      return;
    }
    setError(null);
    setIsLoading(true);
    setResult(null);
    
    try {
      const statusResult = await checkLinkStatus(url);
      setResult(statusResult);
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const currentStatus = result?.status || 'info';
  const styles = statusStyles[currentStatus];

  return (
    <section id="checker-tool" className="max-w-4xl mx-auto w-full">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-2xl shadow-slate-900/50 p-6 md:p-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/your-link-here"
              className="flex-grow bg-slate-900/70 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 font-fira-code text-lg"
              required
              aria-label="URL to check"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold text-lg px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/40 shadow-cyan-900/50 transform hover:scale-105"
            >
              {isLoading ? 'Checking...' : 'Check Link Status'}
            </button>
          </div>
          {error && <p className="text-red-400 mt-3 text-center md:text-left">{error}</p>}
        </form>

        <div className="mt-8 min-h-[16rem] bg-black/50 border border-slate-700 rounded-lg p-6 font-fira-code text-lg flex flex-col justify-center transition-opacity duration-500">
            {isLoading && <Loader />}
            {!isLoading && result && (
                 <div className="space-y-4 animate-fade-in">
                    <div className={`p-4 rounded-md border ${styles.bg} ${styles.border} flex items-center justify-between`}>
                        <span className="font-bold text-slate-300">Status</span>
                        <span className={`font-bold text-2xl ${styles.text}`}>
                            {result.code} {result.message}
                        </span>
                    </div>
                     <div className="border-t border-slate-700/50"></div>
                    <div className="flex justify-between items-center text-slate-300">
                        <span>Response Time</span>
                        <span className="text-white font-semibold">{result.responseTime} ms</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                        <span>Final URL</span>
                        <a href={result.finalUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline truncate max-w-[200px] sm:max-w-xs md:max-w-md lg:max-w-lg">
                            {result.finalUrl}
                        </a>
                    </div>
                </div>
            )}
            {!isLoading && !result && (
                <div className="text-center text-slate-500">
                    <p>Enter a URL above to begin the diagnostics.</p>
                    <p className="text-sm mt-2">Results will be displayed here.</p>
                </div>
            )}
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default LinkCheckerTool;
