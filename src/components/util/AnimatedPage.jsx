import React, { useState, useEffect } from "react";
import { SolarFire } from "../../assets";

const AnimatedPage = ({ children }) => {
    const [reveal, setReveal] = useState(false);
    const [highlightAnim, setHighlightAnim] = useState(false);

    useEffect(() => {
        setHighlightAnim(true);

        const timer = setTimeout(() => {
            setReveal(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="overflow-hidden relative min-h-screen">
            <div
                className={`transition-opacity duration-[1s] ${reveal ? "opacity-100" : "opacity-0"}`}>
                {children}
            </div>

            <div
                className={`fixed inset-0 bg-primary/90 backdrop-blur-sm z-50 flex items-center justify-center transition-transform duration-[1000ms] ease-in-out
          ${reveal ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}>
                <h1 className="text-text-primary font-mono text-xl md:text-4xl font-bold select-none relative overflow-hidden whitespace-nowrap px-4">
                    <img
                        src={SolarFire}
                        alt="Fire"
                        className="w-10 h-10 md:w-20 md:h-20 inline-block mr-4" />
                    <span className="relative z-10 font-mono">Azlan Raban</span>

                    <span
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r from-secondary/50 via-secondary/90 to-secondary opacity-30
              transform -translate-x-full rounded
              ${highlightAnim ? "animate-slide-highlight" : ""}`} style={{ width: "100%" }} />
                </h1>
            </div>
        </div>
    );
};

export default AnimatedPage;
