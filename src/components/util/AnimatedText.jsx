import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text, className }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // stop observing after animation triggered once
                }
            },
            {
                rootMargin: "-100px", // trigger a bit before fully visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const words = text.split(" ");

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            aria-label={text}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            style={{ display: "flex", flexWrap: "wrap" }}
        >
            {words.map((word, wordIndex) => (
                <motion.span
                    key={wordIndex}
                    style={{ display: "inline-block", marginRight: "0.5em" }}
                >
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={`${wordIndex}-${charIndex}`}
                            variants={letterVariants}
                            style={{ display: "inline-block" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedText;
