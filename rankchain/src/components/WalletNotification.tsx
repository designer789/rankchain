"use client";

import { cn } from "@/lib/utils";

interface WalletNotificationProps {
  id: number;
  address: string;
  percentage: number;
  time?: string;
}

// Array of colors and emojis for different rank positions
const rankStyles = [
  { color: "#FF3D71", emoji: "🔥" }, // 1st
  { color: "#FFB800", emoji: "⭐" }, // 2nd
  { color: "#00C9A7", emoji: "🚀" }, // 3rd
  { color: "#1E86FF", emoji: "💎" }, // 4th
  { color: "#8A63D2", emoji: "✨" }, // 5th
  { color: "#FF9456", emoji: "🏆" }, // 6th
  { color: "#3FA796", emoji: "💰" }, // 7th
];

export function WalletNotification({ id, address, percentage, time = "Just now" }: WalletNotificationProps) {
  // Get the rank style based on ID (using modulo to ensure it wraps around)
  const rankIndex = (id - 1) % rankStyles.length;
  const { color, emoji } = rankStyles[rankIndex];

  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-full cursor-pointer overflow-hidden rounded-xl p-3",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[102%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_8px_16px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-zinc-900/80 dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3 justify-between">
        <div className="flex items-center gap-3">
          <div
            className="flex size-8 items-center justify-center rounded-md text-base"
            style={{
              backgroundColor: color,
            }}
          >
            {emoji}
          </div>
          <div className="flex flex-col overflow-hidden">
            <figcaption className="flex flex-row items-center whitespace-pre font-medium text-zinc-900 dark:text-white">
              <span className="font-mono text-sm">{address}</span>
              <span className="mx-1 text-zinc-400">·</span>
              <span className="text-xs text-zinc-500">{time}</span>
            </figcaption>
            <p className="text-xs font-normal text-zinc-500">Top performing wallet</p>
          </div>
        </div>
        <div className="text-sm font-medium text-emerald-500">
          +{percentage}%
        </div>
      </div>
    </figure>
  );
} 