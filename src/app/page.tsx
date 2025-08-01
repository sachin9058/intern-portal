'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0f0c29] bg-gradient-to-br from-[#302b63] to-[#24243e] p-4 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-[0_0_30px_#00ffe0] max-w-md w-full text-white"
      >
        <h1 className="text-4xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
          🚀 Intern Portal
        </h1>
        <p className="text-center mb-8 text-gray-300">Your gateway to the dashboard</p>

        <Link href="/dashboard">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px #0ff' }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-6 rounded-full font-semibold bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-lg hover:shadow-xl transition-all"
          >
            Enter Dashboard
          </motion.button>
        </Link>
      </motion.div>
    </main>
  );
}
