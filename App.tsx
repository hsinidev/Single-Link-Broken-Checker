
import React from 'react';
import Layout from './components/Layout';
import LinkCheckerTool from './components/LinkCheckerTool';
import SeoArticle from './components/SeoArticle';

const App: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8 md:py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Single-Link <span className="text-cyan-400">Broken Checker</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Instantly diagnose any URL with our server-side checker. Get real-time HTTP status codes and response times to ensure your website's health and SEO performance.
          </p>
        </header>
        <main className="w-full">
          <LinkCheckerTool />
          <SeoArticle />
        </main>
      </div>
    </Layout>
  );
};

export default App;
