'use client';

import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ items, className = '' }) => {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap py-8 ${className}`}>
      <motion.div
        className="inline-block"
        animate={{
          x: ['0%', '-33.33%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className="inline-block px-12 text-6xl tablet:text-8xl desktop:text-9xl font-black text-neutral-200 tracking-tighter uppercase will-change-transform"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;