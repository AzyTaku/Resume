import React, { useState, useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';
import { Hero, Exp, Tech, Contact, Footer, Projects, About } from '../components';
import AnimatedPage from '../components/util/AnimatedPage';
import CustomCursor from '../components/util/CustomCursor';

const Home = () => {
    const contactRef = useRef(null);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springX = useSpring(mouseX, { stiffness: 500, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 500, damping: 30 });

    const [cursorScale, setCursorScale] = useState(1);
    const [cursorColor, setCursorColor] = useState('bg-secondary/70');
    const [cursorText, setCursorText] = useState('');

    React.useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="bg-primary relative p-5 sm:p-0">
            <CustomCursor
                springX={springX}
                springY={springY}
                cursorScale={cursorScale}
                cursorColor={cursorColor}
                cursorText={cursorText}
            />
            <AnimatedPage>
                <Hero
                    onScrollToContact={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
                    setCursorScale={setCursorScale}
                    setCursorColor={setCursorColor}
                    setCursorText={setCursorText}
                />
                <Exp />
                <About
                    setCursorScale={setCursorScale}
                    setCursorColor={setCursorColor}
                    setCursorText={setCursorText}
                />
                <Projects />
                <Tech
                    setCursorScale={setCursorScale}
                    setCursorColor={setCursorColor}
                    setCursorText={setCursorText}
                />
                <Contact
                    ref={contactRef}
                    setCursorScale={setCursorScale}
                    setCursorColor={setCursorColor}
                    setCursorText={setCursorText}
                />
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
