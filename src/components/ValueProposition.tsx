import Image from 'next/image';

export default function ValueProposition() {
  return (
    <section id="value-proposition" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight">Empower On-Chain Alpha</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 tracking-tight mb-1">AI + Community = Alpha Generation</h3>
                  <p className="text-sm text-gray-600">Combines machine precision with decentralized wisdom for reliable address scoring.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 tracking-tight mb-1">Transparency First</h3>
                  <p className="text-sm text-gray-600">All scoring, voting, and leaderboard logic is on-chain and verifiable.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 tracking-tight mb-1">Participate and Earn</h3>
                  <p className="text-sm text-gray-600">Stakers become active participants in the leaderboard and share in the platform revenue.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 tracking-tight mb-1">Multi-Chain Integration</h3>
                  <p className="text-sm text-gray-600">Built on major chains such as Solana and BNB Chain to ensure data accessibility and seamless interaction.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side image */}
          <div className="w-full lg:w-1/2 h-[400px] relative">
            <Image 
              src="/p1.png"
              alt="RankChain Value Proposition"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 