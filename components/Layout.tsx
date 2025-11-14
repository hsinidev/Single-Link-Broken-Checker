
import React, { useState } from 'react';
import Modal from './Modal';
import { ModalType } from '../types';

const GalaxyBackground: React.FC = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-900">
     <div 
        className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(30, 41, 59, 0) 0%, #0f172a 70%)' }}
    ></div>
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
    <style jsx>{`
      @keyframes move-twinkle-back {
        from { background-position: 0 0; }
        to { background-position: -10000px 5000px; }
      }
      .twinkling {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        display: block;
        background: transparent url('https://www.script-tutorials.com/demos/360/images/twinkling.png') repeat top center;
        animation: move-twinkle-back 200s linear infinite;
      }
      .particle {
        position: absolute;
        border-radius: 50%;
        animation: drift 50s infinite linear;
        opacity: 0.8;
      }
      @keyframes drift {
        from { transform: rotate(0deg) translateX(400px) rotate(0deg); }
        to { transform: rotate(360deg) translateX(400px) rotate(-360deg); }
      }
    `}</style>
    <div className="twinkling"></div>
    <div className="absolute inset-0 flex items-center justify-center">
        <div className="particle" style={{ width: '60vmax', height: '60vmax', background: 'radial-gradient(circle, rgba(10, 169, 240, 0.15) 0%, rgba(10, 169, 240, 0) 60%)', animationDuration: '60s' }}></div>
        <div className="particle" style={{ width: '50vmax', height: '50vmax', background: 'radial-gradient(circle, rgba(224, 30, 90, 0.15) 0%, rgba(224, 30, 90, 0) 70%)', animationDuration: '45s', animationDirection: 'reverse' }}></div>
        <div className="particle" style={{ width: '70vmax', height: '70vmax', background: 'radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, rgba(138, 43, 226, 0) 65%)', animationDuration: '70s' }}></div>
    </div>
  </div>
);


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const getModalContent = () => {
    switch (activeModal) {
      case 'about':
        return { title: 'About Us', content: 'This tool is designed to provide a simple, free way for developers, SEOs, and website owners to quickly check the status of a URL. It simulates a server-side request to give you an accurate HTTP status code, helping you maintain a healthy, crawlable website.' };
      case 'contact':
        return { title: 'Contact Information', content: 'For inquiries or support, please reach out to us at hsini.web@gmail.com. You can also visit our main portal at doodax.com.' };
      case 'guide':
        return { title: 'How to Use', content: 'Simply enter the full URL (including http:// or https://) into the input field and click "Check Link Status". The tool will then fetch the status code and display the results, color-coded for easy interpretation. Green is good, yellow is a redirect, and red indicates an error.' };
      case 'privacy':
        return { title: 'Privacy Policy', content: 'We respect your privacy. We do not store, log, or share any of the URLs you check with our service. All checks are performed ephemerally. Our goal is to provide a useful tool without compromising your data.' };
      case 'terms':
        return { title: 'Terms of Service', content: 'This tool is provided for free and "as is" without any warranties. By using this service, you agree not to use it for any malicious purposes, such as overloading servers. We reserve the right to limit access if abuse is detected.' };
      case 'dmca':
        return { title: 'DMCA Policy', content: 'We respect intellectual property rights. If you believe any content accessible through our service infringes on your copyright, please send a DMCA notice to hsini.web@gmail.com with sufficient detail for us to investigate.' };
      default:
        return { title: '', content: '' };
    }
  };

  const navLinks: { label: string, type: ModalType }[] = [
    { label: 'About', type: 'about' },
    { label: 'Contact', type: 'contact' },
    { label: 'Guide', type: 'guide' },
    { label: 'Privacy Policy', type: 'privacy' },
    { label: 'Terms of Service', type: 'terms' },
    { label: 'DMCA', type: 'dmca' },
  ];

  return (
    <div className="relative min-h-screen text-slate-100 overflow-x-hidden">
      <GalaxyBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="py-4 px-4 md:px-8 w-full">
            <nav className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 max-w-7xl mx-auto">
                {navLinks.map(link => (
                    <button 
                        key={link.type}
                        onClick={() => setActiveModal(link.type)}
                        className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
                    >
                        {link.label}
                    </button>
                ))}
            </nav>
        </header>
        
        <div className="flex-grow flex flex-col">
          {children}
        </div>

        <footer className="text-center p-8 mt-16 border-t border-slate-700/50 w-full">
          <p className="text-slate-400">
            <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-amber-400 hover:text-amber-300 transition-colors">
              Powered by HSINI MOHAMED
            </a>
          </p>
          <div className="mt-2 text-sm text-slate-500 space-x-4">
            <a href="mailto:hsini.web@gmail.com" className="hover:text-slate-300">hsini.web@gmail.com</a>
            <span>|</span>
            <a href="http://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">doodax.com</a>
          </div>
        </footer>

        {activeModal && (
          <Modal
            title={getModalContent().title}
            onClose={() => setActiveModal(null)}
          >
            <p className="text-slate-300">{getModalContent().content}</p>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Layout;
