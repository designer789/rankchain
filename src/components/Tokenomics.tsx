"use client";

import { cn } from "@/lib/utils";

interface TokenAllocationProps {
  name: string;
  percentage: string;
  color: string;
}

const TokenAllocation = ({ name, percentage, color }: TokenAllocationProps) => {
  return (
    <div className="flex items-center mb-3">
      <div className={cn("w-3 h-3 rounded-full mr-3", color)} />
      <div className="flex-1 text-sm">{name}</div>
      <div className="font-medium text-sm">{percentage}</div>
    </div>
  );
};

interface UtilityItemProps {
  title: string;
  description: string;
  isLast?: boolean;
}

const UtilityItem = ({ title, description, isLast = false }: UtilityItemProps) => {
  return (
    <div className={cn(!isLast && "border-b border-gray-100 pb-5 mb-5", "last:mb-0")}>
      <h4 className="flex items-start text-base font-medium text-gray-900 tracking-tight mb-1">
        <span className="text-primary mr-2 flex-shrink-0 mt-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
          </svg>
        </span>
        <span>{title}</span>
      </h4>
      <p className="text-xs leading-relaxed text-gray-600 ml-4">{description}</p>
    </div>
  );
};

interface PieChartSegment {
  percentage: number;
  fill: string;
}

// SVG Pie Chart component
const PieChart = () => {
  const segments: PieChartSegment[] = [
    { percentage: 70, fill: "#3B82F6" }, // Fair Launch & Liquidity
    { percentage: 10, fill: "#22C55E" }, // Staking & Rewards
    { percentage: 10, fill: "#A855F7" }, // Ecosystem Fund
    { percentage: 5, fill: "#EAB308" },  // Marketing & Partnerships
    { percentage: 5, fill: "#EF4444" }   // Team & Advisors
  ];

  const calculatePath = (startAngle: number, endAngle: number): string => {
    // Convert angles to radians and calculate coordinates
    const startRad = ((startAngle - 90) * Math.PI) / 180;
    const endRad = ((endAngle - 90) * Math.PI) / 180;
    
    const x1 = Math.cos(startRad);
    const y1 = Math.sin(startRad);
    const x2 = Math.cos(endRad);
    const y2 = Math.sin(endRad);
    
    // Determine if the arc should be drawn the long way around
    const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
    
    // Generate the SVG path
    return `
      M 0 0
      L ${x1} ${y1}
      A 1 1 0 ${largeArc} 1 ${x2} ${y2}
      Z
    `.trim();
  };

  let currentAngle = 0;
  
  return (
    <svg viewBox="-1.1 -1.1 2.2 2.2">
      {segments.map((segment, index) => {
        const startAngle = currentAngle;
        const endAngle = currentAngle + (segment.percentage * 360) / 100;
        currentAngle = endAngle;
        
        return (
          <path
            key={index}
            d={calculatePath(startAngle, endAngle)}
            fill={segment.fill}
            stroke="white"
            strokeWidth="0.01"
            className="transition-all duration-300 hover:opacity-90"
          />
        );
      })}
    </svg>
  );
};

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">Tokenomics</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left side - Token info and allocation */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-1">Token Name</div>
                <div className="text-xl font-medium">$RCN</div>
              </div>
              
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-1">Total Supply</div>
                <div className="text-xl font-medium">1,000,000,000 $RCN</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm flex-1">
              <div className="text-sm text-gray-500 mb-3">Token Allocation</div>
              
              <div className="flex flex-col gap-6">
                <div className="aspect-square w-full max-w-[140px] mx-auto">
                  <PieChart />
                </div>
                
                <div className="w-full">
                  <TokenAllocation 
                    name="Fair Launch & Liquidity" 
                    percentage="70%" 
                    color="bg-blue-500"
                  />
                  <TokenAllocation 
                    name="Staking & Rewards" 
                    percentage="10%" 
                    color="bg-green-500"
                  />
                  <TokenAllocation 
                    name="Ecosystem Fund" 
                    percentage="10%" 
                    color="bg-purple-500"
                  />
                  <TokenAllocation 
                    name="Marketing & Partnerships" 
                    percentage="5%" 
                    color="bg-yellow-500"
                  />
                  <TokenAllocation 
                    name="Team & Advisors" 
                    percentage="5%" 
                    color="bg-red-500"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Utility */}
          <div className="w-full lg:w-2/3 flex">
            <div className="bg-white p-8 rounded-xl shadow-sm h-full w-full flex flex-col">
              <h3 className="text-xl font-medium text-gray-900 tracking-tight mb-6">Utility</h3>
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <UtilityItem 
                    title="Staking for Scoring Participation"
                    description="Stake $RCN tokens to participate in the wallet scoring mechanism. Your staked tokens grant you voting rights to rate the performance of smart money addresses, contributing to the platform's accuracy."
                  />
                  
                  <UtilityItem 
                    title="Governance Rights"
                    description="Hold $RCN tokens to participate in decentralized governance. Token holders can propose and vote on key platform changes, including new features, reward structures, and more."
                  />
                  
                  <UtilityItem 
                    title="Access to Premium Data & Insights"
                    description="Unlock exclusive analytics tools and advanced wallet tracking features by using $RCN. Gain access to premium reports, predictive analytics, and deeper insights into smart money behavior."
                  />
                  
                  <UtilityItem 
                    title="Tokenized Analytics Services"
                    description="$RCN can be used to purchase tokenized data and analytics reports. This offers researchers, analysts, and developers valuable insights into wallet activities and market trends."
                  />
                  
                  <UtilityItem 
                    title="Fee Reduction for Premium Features"
                    description="Stake $RCN tokens to receive discounts on platform fees for advanced services such as extended data storage, premium staking rewards, and additional governance powers."
                    isLast={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 