import React, { useState, useEffect } from "react";
import { SolarFire } from "../../assets";

const AnimatedPage = ({ children }) => {
    const [reveal, setReveal] = useState(false);
    const [highlightAnim, setHighlightAnim] = useState(false);

    useEffect(() => {
        // Start the highlight animation immediately
        setHighlightAnim(true);

        // After the highlight animation (~2.5s), start the overlay hide animation
        const timer = setTimeout(() => {
            setReveal(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="overflow-hidden relative min-h-screen">
            {/* Page content */}
            <div
                className={`transition-opacity duration-[1s] ${reveal ? "opacity-100" : "opacity-0"}`}>
                {children}
            </div>

            {/* Preloader overlay */}
            <div
                className={`fixed inset-0 bg-primary/90 backdrop-blur-sm z-50 flex items-center justify-center transition-transform duration-[1000ms] ease-in-out
          ${reveal ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}>
                <h1 className="text-text-primary font-mono text-6xl font-bold select-none relative overflow-hidden whitespace-nowrap px-4">
                    <img
                        src={SolarFire}
                        alt="Fire"
                        className="w-20 h-20 inline-block mr-4" />
                    {/* Text with sliding highlight */}
                    <span className="relative z-10 font-mono">Azlan Raban</span>

                    {/* Sliding highlight background */}
                    <span
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60 opacity-30
              transform -translate-x-full rounded
              ${highlightAnim ? "animate-slide-highlight" : ""}`} style={{ width: "100%" }} />
                </h1>
            </div>

            {/* Tailwind custom animation keyframes */}
            <style jsx>
                {`@keyframes slide-highlight {
          0% {
            transform: translateX(-100%);
            opacity: 0.3;
          }
          100% {
            transform: translateX(100%);
            opacity: 0.7;
          }
        }
        .animate-slide-highlight {
          animation: slide-highlight 0.9s ease-in-out forwards;
        }`}
            </style>
        </div>
    );
};

export default AnimatedPage;
