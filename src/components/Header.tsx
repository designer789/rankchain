"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto py-3 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/sitelogo.png" 
            alt="RankChain Logo" 
            width={120} 
            height={40} 
            className="h-auto"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-full mr-4">
            <Link href="#features" className="px-4 py-2 text-sm text-gray-700 hover:text-primary rounded-full hover:bg-white transition">Features</Link>
            <Link href="#value-proposition" className="px-4 py-2 text-sm text-gray-700 hover:text-primary rounded-full hover:bg-white transition">Value Prop</Link>
            <Link href="#tokenomics" className="px-4 py-2 text-sm text-gray-700 hover:text-primary rounded-full hover:bg-white transition">Tokenomics</Link>
            <Link href="#roadmap" className="px-4 py-2 text-sm text-gray-700 hover:text-primary rounded-full hover:bg-white transition">Roadmap</Link>
            <Link href="#faq" className="px-4 py-2 text-sm text-gray-700 hover:text-primary rounded-full hover:bg-white transition">FAQ</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="https://x.com/RankChain_" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            <Link href="https://t.me/RankChain_Official" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.03-1.62 1.03-4.58 3.03-.43.3-.83.45-1.19.44-.39-.01-1.14-.22-1.7-.4-.68-.23-1.23-.35-1.18-.74.02-.2.3-.41.81-.62 3.17-1.4 5.29-2.32 6.38-2.76 3.03-1.27 3.66-1.49 4.08-1.5.1 0 .3.03.42.14.12.1.15.31.16.43 0 .07.01.26-.05.4z" />
              </svg>
            </Link>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none text-gray-700 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="#features" 
              className="py-2 px-4 text-sm text-gray-700 hover:text-primary rounded-full hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#value-proposition" 
              className="py-2 px-4 text-sm text-gray-700 hover:text-primary rounded-full hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Value Prop
            </Link>
            <Link 
              href="#tokenomics" 
              className="py-2 px-4 text-sm text-gray-700 hover:text-primary rounded-full hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Tokenomics
            </Link>
            <Link 
              href="#roadmap" 
              className="py-2 px-4 text-sm text-gray-700 hover:text-primary rounded-full hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Roadmap
            </Link>
            <Link 
              href="#faq" 
              className="py-2 px-4 text-sm text-gray-700 hover:text-primary rounded-full hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex items-center gap-4 py-2 px-4">
              <Link href="https://x.com/RankChain_" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link href="https://t.me/RankChain_Official" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.03-1.62 1.03-4.58 3.03-.43.3-.83.45-1.19.44-.39-.01-1.14-.22-1.7-.4-.68-.23-1.23-.35-1.18-.74.02-.2.3-.41.81-.62 3.17-1.4 5.29-2.32 6.38-2.76 3.03-1.27 3.66-1.49 4.08-1.5.1 0 .3.03.42.14.12.1.15.31.16.43 0 .07.01.26-.05.4z" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
} 