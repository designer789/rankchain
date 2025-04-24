"use client";

import React from 'react';
import { AnimatedList } from './AnimatedList';
import { WalletNotification } from './WalletNotification';
import { cn } from '@/lib/utils';

export default function Hero() {
  // Base wallet data
  const baseWallets = [
    { id: 1, address: "0x7a2...5e9f", percentage: 77, time: "2m ago" },
    { id: 2, address: "0x3b5...8d2c", percentage: 65, time: "5m ago" },
    { id: 3, address: "0x9f1...4a3d", percentage: 53, time: "12m ago" },
    { id: 4, address: "0xe4c...9b2f", percentage: 42, time: "18m ago" },
    { id: 5, address: "0x1d8...7c6e", percentage: 39, time: "24m ago" },
    { id: 6, address: "0x8f5...2a1d", percentage: 34, time: "31m ago" },
    { id: 7, address: "0x2c6...9f3e", percentage: 28, time: "45m ago" },
  ];
  
  // Generate more wallets by repeating the base set (10 repetitions)
  const walletData = Array.from({ length: 10 }, (_, i) => 
    baseWallets.map(wallet => ({
      ...wallet,
      key: `${wallet.id}-${i}`, // Ensure unique keys
    }))
  ).flat();

  return (
    <section className="min-h-[calc(100vh-56px)] bg-gray-50 py-12 md:py-16 lg:py-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 max-w-2xl mx-auto lg:mx-0 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 md:mb-6 font-heading tracking-tighter leading-[1.1] md:leading-[1.2]">
              Trust the Chain, <span className="text-primary">Not the Noise.</span>
            </h1>
            <p className="text-base text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-xl">
              Discover top-performing wallets. Rank the smartest traders. Earn rewards for being right. RankChain brings AI and community insight together to unlock on-chain alpha.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="#Features">
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-semibold leading-6 text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-6 ring-1 ring-white/10">
                  <span>Start Exploring</span>
                  <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
                </a>

              <a href="https://rankchain.gitbook.io/docs/" target="_blank" rel="noopener">
              <button className="bg-zinc-900/10 no-underline group cursor-pointer relative shadow-xl shadow-zinc-900/10 rounded-full p-px text-sm font-semibold leading-6 text-black inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.3)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-white py-2 px-6 ring-1 ring-zinc-900/20 text-zinc-900">
                  <span>Gitbook</span>
                  <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-zinc-400/0 via-zinc-400/60 to-zinc-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
                </a>
            </div>
          </div>
          
          {/* Right hero image - flat design */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-md">
              <div className="bg-white border border-gray-100 rounded-lg p-4 sm:p-6 md:p-8 relative z-10 shadow-sm">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h3 className="font-medium text-gray-800 text-base md:text-lg">Top Wallets</h3>
                  <div className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                    <span className="text-xs text-primary font-medium">Live</span>
                  </div>
                </div>
                
                {/* Animated Wallet Notifications with Feed Effect */}
                <div className={cn("relative h-[240px] sm:h-[290px] overflow-hidden px-3 sm:px-4 pt-3 pb-2 bg-gray-50/50 rounded-xl border border-gray-100")}>
                  <AnimatedList delay={2000} className="space-y-0 gap-3 sm:gap-4 pt-1">
                    {walletData.map((wallet) => (
                      <WalletNotification 
                        key={wallet.key || wallet.id} 
                        id={wallet.id}
                        address={wallet.address}
                        percentage={wallet.percentage}
                        time={wallet.time}
                      />
                    ))}
                  </AnimatedList>
                  
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-gray-50/90 to-transparent"></div>
                </div>
                
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
                  <button className="w-full bg-slate-50 no-underline group cursor-pointer relative rounded-full p-px text-sm font-medium leading-6 text-primary inline-flex items-center justify-center">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                      <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.2)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </span>
                    <div className="relative flex items-center z-10 rounded-full py-1.5 px-4">
                      <span>View All Rankings</span>
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.75 8.75L14.25 12L10.75 15.25" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 transition-opacity duration-500 group-hover:opacity-100" />
                  </button>
                </div>
              </div>
              
              {/* Flat decorative element */}
              <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 w-full h-full border-2 border-primary-light rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
