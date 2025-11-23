"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
    color: string;
}

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export const FeatureCard = ({ title, description, icon: Icon, href, color }: FeatureCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <Link href={href}>
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transformStyle: "preserve-3d",
                    transform,
                }}
                className="relative h-96 w-72 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl cursor-pointer group"
            >
                <div
                    style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="absolute inset-4 grid place-content-center rounded-xl bg-black/20 shadow-lg"
                >
                    <Icon size={64} style={{ color }} className="drop-shadow-lg" />
                    <h3 className="mt-4 text-2xl font-bold text-white text-center drop-shadow-md">{title}</h3>
                    <p className="mt-2 text-center text-sm text-white/80 px-4">{description}</p>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
        </Link>
    );
};
