import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Hero, Exp, Tech, Contact, Footer, Projects, About } from '../components';
import AnimatedPage from '../components/util/AnimatedPage';

const Home = () => {

    const contactRef = useRef(null);
    // Motion values for cursor position
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth spring animation for cursor position
    const springX = useSpring(mouseX, { stiffness: 500, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 500, damping: 30 });

    // Cursor appearance state
    const [cursorScale, setCursorScale] = useState(1);
    const [cursorColor, setCursorColor] = useState('bg-secondary/70');
    const [cursorText, setCursorText] = useState('');

    // Track mouse movement and update motion values
    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="bg-primary relative p-5 sm:p-0">
            <motion.div
                style={{
                    translateX: springX,
                    translateY: springY,
                    scale: cursorScale,
                    transformOrigin: 'center',
                }}
                className={`pointer-events-none fixed top-0 left-0 w-10 h-10 rounded-full hidden lg:flex items-center justify-center select-none transition-colors duration-300 ${cursorColor} backdrop-blur-md z-[100]`}>
                {cursorText && (
                    <span className="text-xs sm:text-[8px] px-2 py-1 rounded font-light">
                        {cursorText}
                    </span>
                )}
            </motion.div>
            <AnimatedPage>
                <Hero onScrollToContact={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
                    setCursorScale={setCursorScale}
                    setCursorColor={setCursorColor}
                    setCursorText={setCursorText}
                />
                <Exp />
                <About />
                <Projects />
                <Tech
                    setCursorScale={setCursorScale}
                    setCursorColor={setCursorColor}
                    setCursorText={setCursorText}
                />
                <Contact ref={contactRef} />
                <Footer
                    setCursorScale={setCursorScale}
                    setCursorColor={setCursorColor}
                    setCursorText={setCursorText}
                />
            </AnimatedPage>
        </div>
    );
};

export default Home;
