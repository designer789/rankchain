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

// SVG Pie Chart component
const PieChart = () => {
  // Allocation percentages
  const fairLaunch = 70;
  const staking = 10;
  const ecosystem = 10;
  const marketing = 5;
  const development = 5;
  
  // Calculate angles for each segment
  const getCoordinatesForPercent = (percent: number) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  };
  
  // Calculate SVG path data for each segment
  const calculatePath = (startPercent: number, endPercent: number) => {
    const [startX, startY] = getCoordinatesForPercent(startPercent);
    const [endX, endY] = getCoordinatesForPercent(endPercent);
    const largeArcFlag = endPercent - startPercent > 0.5 ? 1 : 0;
    
    return [
      `M 0 0`,
      `L ${startX} ${startY}`,
      `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
      `L 0 0`,
    ].join(' ');
  };
  
  return (
    <svg viewBox="-1.1 -1.1 2.2 2.2" style={{ transform: 'rotate(-90deg)' }}>
      {/* Fair Launch & Liquidity (70%) */}
      <path 
        d={calculatePath(0, fairLaunch/100)} 
        fill="#3B82F6" 
        stroke="white" 
        strokeWidth="0.01"
      />
      
      {/* Staking & Rewards (10%) */}
      <path 
        d={calculatePath(fairLaunch/100, (fairLaunch+staking)/100)} 
        fill="#22C55E" 
        stroke="white" 
        strokeWidth="0.01"
      />
      
      {/* Ecosystem Fund (10%) */}
      <path 
        d={calculatePath((fairLaunch+staking)/100, (fairLaunch+staking+ecosystem)/100)} 
        fill="#A855F7" 
        stroke="white" 
        strokeWidth="0.01"
      />
      
      {/* Marketing & Partnerships (5%) */}
      <path 
        d={calculatePath((fairLaunch+staking+ecosystem)/100, (fairLaunch+staking+ecosystem+marketing)/100)} 
        fill="#EAB308" 
        stroke="white" 
        strokeWidth="0.01"
      />
    </svg>
  );
};

export default function Tokenomics() {
  const allocations = [
    { name: "Fair Launch & Liquidity", percentage: "70%", color: "bg-blue-500" },
    { name: "Staking & Rewards", percentage: "10%", color: "bg-green-500" },
    { name: "Ecosystem Fund", percentage: "10%", color: "bg-purple-500" },
    { name: "Marketing & Partnerships", percentage: "5%", color: "bg-yellow-500" },
    { name: "Development & Operations", percentage: "5%", color: "bg-red-500" }
  ];

  const utilities = [
    {
      title: "Staking & Voting",
      description: "Stake $RCN to participate in wallet scoring and earn rewards based on accuracy."
    },
    {
      title: "Governance",
      description: "Vote on platform proposals and help shape the future of RankChain."
    },
    {
      title: "Premium Access",
      description: "Access advanced analytics and insights by holding $RCN tokens."
    },
    {
      title: "Rewards",
      description: "Earn $RCN tokens through accurate wallet scoring and community participation.",
      isLast: true
    }
  ];

  return (
    <section id="tokenomics" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight">Tokenomics</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Token Allocation */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Token Allocation</h3>
            <div className="flex items-center justify-center mb-8">
              <div className="w-48 h-48">
                <PieChart />
              </div>
            </div>
            <div>
              {allocations.map((allocation) => (
                <TokenAllocation
                  key={allocation.name}
                  name={allocation.name}
                  percentage={allocation.percentage}
                  color={allocation.color}
                />
              ))}
            </div>
          </div>
          
          {/* Right column - Token Utility */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Token Utility</h3>
            <div>
              {utilities.map((utility) => (
                <UtilityItem
                  key={utility.title}
                  title={utility.title}
                  description={utility.description}
                  isLast={utility.isLast}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 