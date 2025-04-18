export default function TopRanked() {
  const topBlockchains = [
    { name: "Bitcoin", rank: 1, icon: "₿", score: 9.8, color: "orange" },
    { name: "Ethereum", rank: 2, icon: "Ξ", score: 9.6, color: "purple" },
    { name: "Solana", rank: 3, icon: "◎", score: 9.4, color: "green" },
    { name: "Cardano", rank: 4, icon: "₳", score: 9.2, color: "blue" },
  ];

  return (
    <section className="py-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-3 font-heading text-primary-blue">Top Ranked Blockchains</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Explore the highest-ranked blockchain technologies based on our comprehensive evaluation system.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {topBlockchains.map((chain, index) => (
          <div key={chain.name} className={`border rounded-xl p-4 flex flex-col ${index === 0 ? 'border-primary-blue bg-light-blue' : 'border-gray-200 dark:border-gray-800'}`}>
            <div className="flex justify-between items-center mb-3">
              <div className="text-base font-bold">
                <span className="mr-2">{chain.icon}</span>
                {chain.name}
              </div>
              <div className={`text-xs px-2 py-1 rounded-full ${index === 0 ? 'bg-primary-blue text-white' : 'bg-light-blue text-primary-blue'}`}>
                Rank #{chain.rank}
              </div>
            </div>
            <div className="mt-auto pt-3 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
              <div className="text-xs text-gray-600 dark:text-gray-400">Score</div>
              <div className={`text-base font-semibold ${index === 0 ? 'text-primary-blue' : ''}`}>{chain.score}/10</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <button 
          className="text-primary-blue hover:text-blue-700 font-medium inline-flex items-center text-sm"
        >
          View all rankings
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
} 