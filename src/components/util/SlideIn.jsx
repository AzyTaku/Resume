import React, { useRef, useState, useEffect } from "react";

const SlideIn = ({
    children,
    className,
    direction = "right", // 'right', 'left', 'top', 'bottom'
    duration = 0.6, // in seconds
    threshold = 0.1, // trigger when 10% visible
    triggerOnce = true, // animate only once, or every time it enters/leaves view
}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.disconnect(); // Stop observing after it becomes visible once
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false); // If not triggerOnce, reset visibility when it leaves view
                }
            },
            {
                root: null, // default is the viewport
                rootMargin: "0px 0px -100px 0px", // triggers 100px before element fully enters viewport
                threshold: threshold,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [threshold, triggerOnce]); // Re-run effect if threshold or triggerOnce changes

    // Determine the initial transform based on direction
    const getInitialTransform = () => {
        switch (direction) {
            case "right":
                return "translateX(100%)";
            case "left":
                return "translateX(-100%)";
            case "top":
                return "translateY(-100%)";
            case "bottom":
                return "translateY(100%)";
            default:
                return "translateX(100%)"; // Fallback to right
        }
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                transform: isVisible ? "translate(0, 0)" : getInitialTransform(),
                opacity: isVisible ? 1 : 0,
                transition: `transform ${duration}s ease-out, opacity ${duration}s ease-out`,
            }}
        >
            {children}
        </div>
    );
};

export default SlideIn;
