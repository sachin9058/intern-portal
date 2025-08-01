"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const leaderboardData = [
  { name: "Sachin Kumar", donations: 18250 },
  { name: "Aditi Verma", donations: 14500 },
  { name: "Rohan Mehta", donations: 12800 },
  { name: "Simran Kaur", donations: 11200 },
  { name: "Yash Patel", donations: 9600 },
];

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-white/5 p-8 rounded-2xl shadow-xl border border-white/10 backdrop-blur"
      >
        <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
          🏆 Leaderboard
        </h1>

        <div className="space-y-4">
          {leaderboardData.map((user, index) => (
            <motion.div
              key={user.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex justify-between items-center px-4 py-3 rounded-lg border shadow
                ${
                  index === 0
                    ? "bg-gradient-to-r from-yellow-400 to-orange-300 text-black font-bold shadow-yellow-500/30"
                    : "bg-white/10 text-white/80"
                }
              `}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold">
                  #{index + 1}
                </span>
                <span>{user.name}</span>
                {index === 0 && <span className="ml-2 animate-pulse">👑</span>}
              </div>
              <div className="text-lg font-mono">
                ₹{user.donations.toLocaleString()}
              </div>
            </motion.div>
          ))}
        </div>

        <Link href="/dashboard">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 w-full bg-pink-600 text-white py-2 rounded-lg shadow hover:shadow-pink-400/50 transition-all"
          >
            ⬅ Back to Dashboard
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
