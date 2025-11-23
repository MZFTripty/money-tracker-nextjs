"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [isStarting, setIsStarting] = useState(false);

  const handleStart = () => {
    setIsStarting(true);
    setTimeout(() => {
      router.push("/home");
    }, 1500); // wait for curtain animation to finish
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-200 to-violet-100 flex items-center justify-center overflow-hidden">
      {/* Curtain layers */}
      <AnimatePresence>
        {isStarting && (
          <>
            {/* Left curtain */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              exit={{ x: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-red-600 to-red-200 z-50"
            />

            {/* Right curtain */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              exit={{ x: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-r from-red-200 to-red-600 z-50"
            />
          </>
        )}
      </AnimatePresence>

      {/* Main Frame */}
      <AnimatePresence>
        {!isStarting && (
          <motion.div
            key="frame"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-r from-green-100 to-yellow-200 shadow-xl rounded-3xl p-10 text-center max-w-2xl w-full border border-gray-100 z-10"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-gray-800 mb-3"
            >
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-violet-600">
                MultiTasker
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 mb-8"
            >
              Manage your life effortlessly. Track finances, tasks, and notes in
              one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                onClick={handleStart}
                className="px-6 py-6 text-lg font-semibold rounded-2xl bg-gradient-to-r from-blue-700 to-pink-500 text-white shadow-md hover:scale-105 transition-transform"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Optional floating footer text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3, y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 text-gray-500 text-sm"
      >
        � Do more, stress less
      </motion.div>
    </div>
  );
}
