"use client";

import { FeatureCard } from "@/components/FeatureCard";
import { Wallet, CheckSquare, StickyNote } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 relative z-10"
        >
            {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12 text-center w-full drop-shadow-sm">
                    MultiTasker
                </h1>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
                <FeatureCard
                    title="Money Tracker"
                    description="Manage your finances with ease. Track income, expenses, and savings."
                    icon={Wallet}
                    href="/tracker"
                    color="#3b82f6"
                />
                <FeatureCard
                    title="Todo List"
                    description="Stay organized. Create tasks, set deadlines, and get things done."
                    icon={CheckSquare}
                    href="/todo"
                    color="#10b981"
                />
                <FeatureCard
                    title="Notes"
                    description="Capture your thoughts. Write down ideas, lists, and reminders."
                    icon={StickyNote}
                    href="/notes"
                    color="#f59e0b"
                />
            </div>

            <div className="absolute bottom-4 text-white/50 text-xs">
                © 2025 MultiTasker. All rights reserved.
            </div>
        </motion.div>
    );
}
