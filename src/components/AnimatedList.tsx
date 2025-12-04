"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useState,
} from "react";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0.95, opacity: 0, y: 10 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.95, opacity: 0, y: -10 },
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 25,
      duration: 0.5 
    },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  delay?: number;
  maxItems?: number;
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 1500, maxItems = 10, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children],
    );

    useEffect(() => {
      const timeout = setTimeout(() => {
        if (index < childrenArray.length - 1) {
          setIndex(index + 1);
        } else if (childrenArray.length > maxItems) {
          // If we have a lot of items, start removing from the bottom once we reach maxItems
          setIndex(index + 1);
        }
      }, delay);

      return () => clearTimeout(timeout);
    }, [index, delay, childrenArray.length, maxItems]);

    const itemsToShow = useMemo(() => {
      // Show the first 'index+1' items, but only up to maxItems
      const startIdx = Math.max(0, index + 1 - maxItems);
      const endIdx = index + 1;
      const result = childrenArray.slice(startIdx, endIdx).reverse();
      return result;
    }, [index, childrenArray, maxItems]);

    return (
      <div
        className={cn(`flex flex-col items-center gap-4`, className)}
        {...props}
      >
        <AnimatePresence initial={false}>
          {itemsToShow.map((item, idx) => (
            <AnimatedListItem key={(item as React.ReactElement).key || idx}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  },
);

AnimatedList.displayName = "AnimatedList"; 