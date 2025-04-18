"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-medium text-gray-900 hover:text-primary focus:outline-none"
        onClick={onClick}
      >
        <span className="text-sm md:text-base font-medium">{question}</span>
        <svg
          className={cn("h-5 w-5 text-gray-500 transition-transform", 
            isOpen ? "rotate-180 transform" : ""
          )}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}
      >
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is RankChain?",
      answer: "RankChain is an AI-powered platform that tracks smart money and KOL wallets on-chain, allowing users to score, rank, and earn rewards by participating in decentralized wallet rating and analysis."
    },
    {
      question: "How does the wallet scoring system work?",
      answer: "Users stake $RCN tokens to vote on the performance and impact of smart money wallets. AI provides an initial score based on wallet behavior, and community participants vote to refine rankings. The most accurate voters earn rewards from the weekly pool."
    },
    {
      question: "What are KOLs and how are they tracked?",
      answer: "KOLs (Key Opinion Leaders) are influential individuals in the crypto space. RankChain's KOL Auto-Mapping System uses AI to track their on-chain wallet activity and correlate it with their social media presence, helping users identify influential traders and wallets."
    },
    {
      question: "How can I participate in RankChain?",
      answer: "You can participate by staking $RCN tokens to vote on wallet scores, tracking KOL activity, contributing to leaderboard rankings, and earning rewards based on the accuracy of your assessments."
    },
    {
      question: "What is $RCN and how is it used?",
      answer: "$RCN is the native utility token of the RankChain platform. It is used for staking, participating in governance, earning rewards, accessing and premium analytics."
    },
    {
      question: "How are rewards distributed?",
      answer: "Every week, the top 10 users who contribute to wallet scoring accuracy are rewarded with $RCN tokens. Rewards are also distributed to users who stake tokens and contribute to the platform's governance."
    },
    {
      question: "Is RankChain decentralized?",
      answer: "Yes, RankChain is built on a decentralized model. It allows for community participation through staking, voting, and governance. Decisions on platform updates and token distribution are made by $RCN token holders."
    },
    {
      question: "How can I earn from RankChain?",
      answer: "You can earn by participating in wallet scoring, staking $RCN tokens, and being rewarded for accurate wallet assessments."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 tracking-tight">FAQ</h2>
        
        <div className="flex justify-end">
          <div className="w-full lg:w-2/3 xl:w-3/5">
            {faqItems.map((item, i) => (
              <FAQItem 
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onClick={() => toggleItem(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 