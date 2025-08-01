"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CountUp from "react-countup";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

const dummyData = {
  name: "Sachin Kumar",
  referralCode: "sachin2025",
  donations: 18250,
};

const rewards = [
  { name: "🎁 Bronze Badge", unlocked: true },
  { name: "🏅 Silver Badge", unlocked: true },
  { name: "🥇 Gold Badge", unlocked: false },
  { name: "🚀 Super Intern", unlocked: false },
];

const quotes = [
  "Every small step matters! 💡",
  "You're making a real impact 💥",
  "Consistency leads to greatness 🚀",
  "Stay strong. You're doing amazing 🌟",
  "Impact starts with intention ✨",
];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

export default function Dashboard() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (dummyData.donations >= 500) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6 relative">
      {showConfetti && <Confetti recycle={false} numberOfPieces={300} />}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto bg-white/5 p-8 rounded-2xl shadow-xl border border-white/10 backdrop-blur"
      >
        <h1 className="text-3xl font-bold text-pink-500 mb-2">Welcome, {dummyData.name} 👋</h1>
        <p className="text-sm text-white/70 mb-6">
          Referral Code: <span className="font-mono bg-pink-600/20 px-2 py-1 rounded">{dummyData.referralCode}</span>
        </p>
        <div className="mb-6">
          <p className="text-lg font-semibold mb-1">Total Donations Raised</p>
          <h2 className="text-4xl font-bold text-green-400 drop-shadow-lg">
            <CountUp end={dummyData.donations} prefix="₹" duration={2.5} separator="," />
          </h2>
        </div>
        <div className="mt-6">
          <p className="text-sm text-white/70 mb-1">Level Progress</p>
          <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min((dummyData.donations / 20000) * 100, 100)}%` }}
              transition={{ duration: 1 }}
              className="h-full bg-gradient-to-r from-green-400 to-lime-500 rounded-full"
            />
          </div>
          <p className="text-xs mt-1 text-white/60">
            {dummyData.donations} / 20000 to reach next level
          </p>
        </div>
        <div className="mt-6">
          <p className="text-sm text-white/70 mb-2">🎯 Today&apos;s Goal: ₹500</p>
          <p className={`text-lg font-bold ${dummyData.donations >= 500 ? 'text-green-300' : 'text-yellow-300'}`}>
            {dummyData.donations >= 500 ? 'Goal Achieved! 🥳' : 'Keep going! 💪'}
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Rewards & Unlockables</h3>
          <div className="grid grid-cols-2 gap-4">
            {rewards.map((reward, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`p-4 rounded-lg border text-center shadow-md
                  ${reward.unlocked ? 'bg-gradient-to-tr from-green-500 to-lime-500 text-black font-semibold' : 'bg-white/10 text-white/40'}
                `}
              >
                {reward.name}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center italic text-white/80">
          “{randomQuote}”
        </div>
      </motion.div>

      <Link href="/leaderboard">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 bg-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-pink-400/50 transition-all duration-300 z-50"
        >
          🏆
        </motion.button>
      </Link>
    </div>
  );
}
