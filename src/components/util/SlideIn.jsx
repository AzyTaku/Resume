import React, { useRef, useState, useEffect } from "react";

const SlideIn = ({
    children,
    className,
    direction = "right", // 'right', 'left', 'top', 'bottom'
    duration = 0.6,
    threshold = 0.1,
    triggerOnce = true,
}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.disconnect();
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            {
                root: null,
                rootMargin: "0px 0px -100px 0px",
                threshold: threshold,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [threshold, triggerOnce]);

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
                return "translateX(100%)";
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
