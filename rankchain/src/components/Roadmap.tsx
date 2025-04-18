"use client"
import { Timeline } from "@/components/ui/timeline"

export default function Roadmap() {
  const CheckIcon = () => (
    <svg 
      className="w-4 h-4 text-primary flex-shrink-0" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M20 6L9 17L4 12" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  const data = [
    {
      title: "Phase 1",
      content: (
        <div className="font-poppins">
          <h3 className="mb-3 text-lg font-semibold text-neutral-800 md:text-xl dark:text-neutral-200">
            Foundation & Launch
          </h3>
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Develop and test RankChain's AI-driven wallet tracking system
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Deploy smart contracts for staking, scoring, and reward distribution
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Launch the $RCN token via fair launch
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Integrate Solana and BNB Chain for multi-chain wallet tracking
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Release MVP with basic AI wallet analysis and user staking functions
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Launch $RCN token and initiate platform's staking rewards system
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Phase 2",
      content: (
        <div className="font-poppins">
          <h3 className="mb-3 text-lg font-semibold text-neutral-800 md:text-xl dark:text-neutral-200">
            Feature Expansion
          </h3>
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Introduce the KOL Auto-Mapping System, linking wallet behavior to social activity
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Roll out full leaderboard with dynamic ranking and weekly reward distribution
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Launch scoring reputation system, rewarding accurate participants
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Begin Decentralized Autonomous Organization (DAO) governance with proposals and voting
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Expand platform to support Ethereum and major Layer2 chains (e.g., Arbitrum, Optimism)
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Launch community incentive programs to boost engagement and participation
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Phase 3",
      content: (
        <div className="font-poppins">
          <h3 className="mb-3 text-lg font-semibold text-neutral-800 md:text-xl dark:text-neutral-200">
            Prediction Market & Developer Tools
          </h3>
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Launch on-chain prediction market for smart wallet performance and KOL forecasts
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Provide API for third-party DApps, allowing them to integrate RankChain data
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Introduce a tokenized analytics marketplace for purchasing wallet insights
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Expand anti-Sybil mechanisms, incorporating zk-proofs for voting integrity
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Partner with blockchain analytics platforms and DeFi applications to broaden data accessibility
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Phase 4",
      content: (
        <div className="font-poppins">
          <h3 className="mb-3 text-lg font-semibold text-neutral-800 md:text-xl dark:text-neutral-200">
            Full DAO Governance & Ecosystem Growth
          </h3>
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Transition RankChain to full DAO governance, empowering token holders to control key decisions
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Open-source scoring models and wallet analysis algorithms for community contributions
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Launch the RankChain&apos;s Ecosystem Grant Program to support development on the platform
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Organize seasonal RankChain&apos;s Alpha Hunt to crowdsource alpha signals for top wallets
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-600 md:text-sm dark:text-neutral-400">
              <CheckIcon /> Strengthen partnerships with DeFi projects, data analysts, and other Web3 platforms to drive growth
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <section id="roadmap" className="bg-gray-50">
      <div className="relative w-full overflow-clip font-poppins">
        <Timeline data={data} />
      </div>
    </section>
  );
} 