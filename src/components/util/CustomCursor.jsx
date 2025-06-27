import React from 'react';
import { motion } from 'framer-motion';

const CustomCursor = ({
    springX,
    springY,
    cursorScale,
    cursorColor,
    cursorText,
}) => {
    return (
        <motion.div
            style={{
                translateX: springX,
                translateY: springY,
                scale: cursorScale,
                transformOrigin: 'center',
            }}
            className={`pointer-events-none fixed top-0 left-0 w-10 h-10 rounded-full hidden lg:flex items-center justify-center select-none ${cursorColor} backdrop-blur-md z-[100]`}
        >
            {cursorText && (
                <span className="text-xs sm:text-[8px] px-2 py-1 rounded font-light text-center">
                    {cursorText}
                </span>
            )}
        </motion.div>
    );
};

export default CustomCursor;
