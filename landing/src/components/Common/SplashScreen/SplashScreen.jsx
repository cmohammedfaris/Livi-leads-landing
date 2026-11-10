"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { SmallLogo } from "../../../assets/Logo/AllLogo";
import { useTheme } from "@/context/ThemeContext";

const SplashScreen = ({ onDone }) => {
    const { isDarkMode } = useTheme();

    useEffect(() => {
        // Fallback for native timeout or onDone
        const timer = setTimeout(() => {
            if (onDone) onDone();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onDone]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-darkprimary overflow-hidden"
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1, 1.2], opacity: [0, 0.15, 0] }}
                    transition={{ duration: 3, times: [0, 0.5, 1], repeat: Infinity, ease: "easeOut" }}
                    className="absolute w-[300px] h-[300px] border-[40px] border-primary/20 rounded-full"
                />
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.2, 1.5], opacity: [0, 0.1, 0] }}
                    transition={{ duration: 3, delay: 1, times: [0, 0.6, 1], repeat: Infinity, ease: "easeOut" }}
                    className="absolute w-[450px] h-[450px] border-[60px] border-accent/10 rounded-full"
                />
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.5, 2], opacity: [0, 0.05, 0] }}
                    transition={{ duration: 3, delay: 2, times: [0, 0.7, 1], repeat: Infinity, ease: "easeOut" }}
                    className="absolute w-[600px] h-[600px] border-[80px] border-primary/5 rounded-full"
                />
            </div>

            <div className="relative flex items-center justify-center w-full h-full">
                <motion.div
                    initial={{ scale: 0, borderRadius: "50%", rotate: 0 }}
                    animate={{
                        scale: [0, 1, 1.5, 1, 1.2, 0],
                        borderRadius: ["50%", "50%", "24%", "32%", "40%", "50%"],
                        rotate: [0, 0, 45, 0, 0, 0],
                        opacity: [1, 1, 1, 1, 0.5, 0]
                    }}
                    transition={{
                        duration: 3,
                        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                        ease: "easeInOut"
                    }}
                    className="absolute w-24 h-24 bg-gradient-to-br from-primary via-accent to-primary shadow-2xl shadow-primary/30"
                />

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 0] }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="absolute w-4 h-4 bg-primary rounded-full z-20"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 2, ease: "backOut" }}
                    className="relative z-10 flex flex-col items-center justify-center h-full"
                >
                    <div className="relative flex items-center justify-center">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"
                        />
                        <SmallLogo
                            size={80}
                            className="relative z-10"
                            color_primary={isDarkMode ? "#FAFAFA" : "#5B04C5"}
                            color_secondary={!isDarkMode ? "#FAFAFA" : "#5B04C5"}
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SplashScreen;
