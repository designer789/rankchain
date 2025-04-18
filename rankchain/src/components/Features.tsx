import { cn } from "@/lib/utils";
import Image from "next/image";
import ScoringMechanismCard from "./ScoringMechanismCard";
import LottieAnimation from "./LottieAnimation";

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  className?: string;
  children?: React.ReactNode;
}

const FeatureCard = ({ title, description, imageUrl, className, children }: FeatureCardProps) => {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all",
      className
    )}>
      <div className={cn(
        "mb-4 rounded-lg bg-gray-200",
        children ? "overflow-visible" : "overflow-hidden"
      )}>
        {children ? (
          children
        ) : imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={title}
            width={400}
            height={300}
            className="w-full object-cover"
          />
        ) : (
          <div className="flex h-40 w-full items-center justify-center bg-gray-200 text-gray-400">
            <span className="text-sm">Image</span>
          </div>
        )}
      </div>
      <h3 className="mb-2 text-lg font-medium text-gray-900 tracking-tight">{title}</h3>
      <p className="text-xs leading-relaxed text-gray-600">{description}</p>
    </div>
  );
};

// ChainSmart Tracking System Card
const ChainSmartCard = ({ title, description, className }: Omit<FeatureCardProps, 'imageUrl' | 'children'>) => {
  const wallets = [
    {
      address: "0x3a84...f29e",
      balance: "32.45 ETH",
      change: "+12.3%",
      timestamp: "2 hrs ago",
      isUp: true,
      emoji: "🦊" // Metamask fox
    },
    {
      address: "0x7b23...a91c",
      balance: "145,230 USDC",
      change: "+5.7%",
      timestamp: "5 hrs ago",
      isUp: true,
      emoji: "💎" // Diamond hands
    },
    {
      address: "0xf890...e45d",
      balance: "18.72 ETH",
      change: "-3.2%",
      timestamp: "1 day ago",
      isUp: false,
      emoji: "🐳" // Whale
    },
    {
      address: "0x2c55...b37a",
      balance: "504,192 USDT",
      change: "+8.9%",
      timestamp: "4 hrs ago",
      isUp: true,
      emoji: "🚀" // Rocket
    }
  ];

  return (
    <FeatureCard
      title={title}
      description={description}
      className={className}
    >
      <div className="flex flex-col justify-center bg-transparent p-3 relative overflow-hidden rounded-lg">
        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        {/* Wallet items container with narrower spacing */}
        <div className="space-y-1.5 w-[160%] pr-5">
          {wallets.map((wallet, index) => (
            <div 
              key={index}
              className="flex items-center justify-between bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm"
            >
              <div className="flex items-center px-4 py-2.5">
                <div className="h-10 w-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mr-4 text-xl">
                  {wallet.emoji}
                </div>
                <div>
                  <div className="text-[15px] font-medium text-gray-800 leading-tight">{wallet.address}</div>
                  <div className="text-sm text-gray-500 leading-tight mt-0.5">{wallet.balance}</div>
                </div>
              </div>
              <div className="px-4 py-2.5 text-right ml-auto">
                <div className={`text-[15px] font-medium ${wallet.isUp ? 'text-green-600' : 'text-red-500'} leading-tight`}>
                  {wallet.change}
                </div>
                <div className="text-sm text-gray-400 leading-tight mt-0.5">{wallet.timestamp}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FeatureCard>
  );
};

// Specific card for KOL Auto-Mapping with overlapping avatars
const KOLCard = ({ title, description, className }: Omit<FeatureCardProps, 'imageUrl' | 'children'>) => {
  const kolProfiles = [
    {
      name: "CryptoWhale",
      handle: "@cryptowhale",
      followers: "125K",
      accuracy: "92%",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "DeFiQueen",
      handle: "@defiqueen",
      followers: "89K",
      accuracy: "88%",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "BlockchainPro",
      handle: "@blockchainpro",
      followers: "156K",
      accuracy: "95%",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  return (
    <FeatureCard
      title={title}
      description={description}
      className={className}
    >
      <div className="flex flex-col justify-center bg-transparent p-3 relative overflow-hidden rounded-lg">
        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        {/* KOL profiles container with narrower spacing */}
        <div className="space-y-2 w-[160%] pr-5">
          {kolProfiles.map((kol, index) => (
            <div 
              key={index}
              className="flex items-center justify-between bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm"
            >
              <div className="flex items-center px-4 py-2.5">
                <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
                  <Image
                    src={kol.avatar}
                    alt={kol.name}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{kol.name}</div>
                  <div className="text-xs text-gray-500">{kol.handle}</div>
                </div>
              </div>
              <div className="flex items-center pr-4">
                <div className="text-right mr-4">
                  <div className="text-xs text-gray-500">Followers</div>
                  <div className="text-sm font-medium text-gray-900">{kol.followers}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Accuracy</div>
                  <div className="text-sm font-medium text-green-600">{kol.accuracy}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FeatureCard>
  );
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">Core Features</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* First column - 1 tall card */}
          <div className="flex flex-col gap-6">
            <ChainSmartCard
              className="h-full"
              title="ChainSmart Tracking System"
              description="AI models analyze on-chain behaviors to tag high-performing, active wallets and monitor their movements in real time."
            />
          </div>
          
          {/* Second column - 2 cards with equal height */}
          <div className="flex flex-col gap-6 h-full">
            <div className="flex-1">
              <KOLCard
                className="h-full"
                title="KOL Auto-Mapping"
                description="Automatically identifies influential KOL wallets by analyzing both their on-chain actions and social footprint."
              />
            </div>
            
            <div className="flex-1">
              <ScoringMechanismCard
                className="h-full"
                title="Decentralized Scoring Mechanism"
                description="Users can stake $RCN to participate in wallet Address rating, helping determine each address's accuracy, profitability, and influence."
              />
            </div>
          </div>
          
          {/* Third column - 2 cards */}
          <div className="flex flex-col gap-6">
            <FeatureCard
              title="Weekly Leaderboard and Rewards"
              description="Each week, the top 10 users and those who have voted (based on rating accuracy and contribution) will be rewarded with tokens from the reward pool."
            >
              <div className="bg-white h-full w-full overflow-hidden relative">
                <LottieAnimation 
                  animationPath="/animations/3fa45cc5.json"
                  loop={true}
                  autoplay={true}
                  className="h-48 -mt-8 -mb-8" 
                />
              </div>
            </FeatureCard>
            
            <FeatureCard
              title="Data Visualization Tools"
              description="Dive into the rich dashboard that showcases the history of the smart wallet, AI-analyzed KOL portfolio behavior and real-time on-chain signals."
            >
              <div className="bg-white h-full w-full">
                <div className="relative h-32">
                  {/* SVG Chart */}
                  <svg className="w-full h-full" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Grid lines */}
                    <line x1="0" y1="0" x2="300" y2="0" stroke="#f3f4f6" strokeWidth="1" />
                    <line x1="0" y1="30" x2="300" y2="30" stroke="#f3f4f6" strokeWidth="1" />
                    <line x1="0" y1="60" x2="300" y2="60" stroke="#f3f4f6" strokeWidth="1" />
                    <line x1="0" y1="90" x2="300" y2="90" stroke="#f3f4f6" strokeWidth="1" />
                    <line x1="0" y1="120" x2="300" y2="120" stroke="#f3f4f6" strokeWidth="1" />
                    
                    {/* Area Chart with smooth curve and animation */}
                    <path 
                      d="M0,120 L0,90 Q20,60 40,40 T80,30 T120,40 T160,20 T200,30 T240,50 T300,10 L300,120 Z" 
                      fill="url(#areaGradient)" 
                      opacity="0.5"
                      className="animate-fill-fade-in"
                    />
                    
                    {/* Line Chart with smooth curve and animation */}
                    <path 
                      d="M0,90 Q20,60 40,40 T80,30 T120,40 T160,20 T200,30 T240,50 T300,10" 
                      stroke="#4ade80" 
                      strokeWidth="2"
                      fill="none" 
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      className="animate-draw-line"
                      style={{ strokeDasharray: 500, strokeDashoffset: 500 }}
                    />
                    
                    {/* Data Points on the curve with animation */}
                    {[
                      { cx: 0, cy: 90, delay: "0.2s", fadeOutAt: "95%" },
                      { cx: 40, cy: 40, delay: "0.6s", fadeOutAt: "90%" },
                      { cx: 80, cy: 30, delay: "1.0s", fadeOutAt: "85%" },
                      { cx: 120, cy: 40, delay: "1.4s", fadeOutAt: "80%" },
                      { cx: 160, cy: 20, delay: "1.8s", fadeOutAt: "75%" },
                      { cx: 200, cy: 30, delay: "2.2s", fadeOutAt: "70%" },
                      { cx: 240, cy: 50, delay: "2.6s", fadeOutAt: "65%" },
                      { cx: 300, cy: 10, delay: "3.0s", fadeOutAt: "60%" }
                    ].map((point, index) => (
                      <circle 
                        key={index}
                        cx={point.cx} 
                        cy={point.cy} 
                        r="3" 
                        fill="#4ade80"
                        style={{ 
                          animation: `dotAnimation${index} 8s ease-in-out infinite`,
                          opacity: 0
                        }}
                      />
                    ))}
                    
                    {/* Gradients and animations */}
                    <defs>
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4ade80" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#4ade80" stopOpacity="0.1" />
                      </linearGradient>
                      
                      {/* Animation definitions */}
                      <style>
                        {`
                          /* Individual dot animations with adjusted timings to match curve */
                          @keyframes dotAnimation0 {
                            0%, 1%, 75%, 100% { opacity: 0; }
                            2%, 40% { opacity: 1; }
                          }
                          @keyframes dotAnimation1 {
                            0%, 3%, 72%, 100% { opacity: 0; }
                            5%, 40% { opacity: 1; }
                          }
                          @keyframes dotAnimation2 {
                            0%, 6%, 69%, 100% { opacity: 0; }
                            8%, 40% { opacity: 1; }
                          }
                          @keyframes dotAnimation3 {
                            0%, 9%, 66%, 100% { opacity: 0; }
                            11%, 40% { opacity: 1; }
                          }
                          @keyframes dotAnimation4 {
                            0%, 12%, 63%, 100% { opacity: 0; }
                            14%, 40% { opacity: 1; }
                          }
                          @keyframes dotAnimation5 {
                            0%, 15%, 60%, 100% { opacity: 0; }
                            17%, 40% { opacity: 1; }
                          }
                          @keyframes dotAnimation6 {
                            0%, 18%, 63%, 100% { opacity: 0; }
                            20%, 40% { opacity: 1; }
                          }
                          @keyframes dotAnimation7 {
                            0%, 21%, 60%, 100% { opacity: 0; }
                            23%, 40% { opacity: 1; }
                          }
                          
                          @keyframes drawLine {
                            0% {
                              stroke-dashoffset: 500;
                            }
                            40% {
                              stroke-dashoffset: 0;
                            }
                            60% {
                              stroke-dashoffset: 0;
                            }
                            100% {
                              stroke-dashoffset: 500;
                            }
                          }
                          
                          @keyframes fillFadeIn {
                            0% {
                              opacity: 0;
                            }
                            40% {
                              opacity: 0.5;
                            }
                            60% {
                              opacity: 0.5;
                            }
                            100% {
                              opacity: 0;
                            }
                          }
                          
                          .animate-draw-line {
                            animation: drawLine 8s ease-in-out infinite;
                          }
                          
                          .animate-fill-fade-in {
                            opacity: 0;
                            animation: fillFadeIn 8s ease-in-out infinite;
                          }
                        `}
                      </style>
                    </defs>
                  </svg>
                </div>
              </div>
            </FeatureCard>
          </div>
        </div>
      </div>
    </section>
  );
} 