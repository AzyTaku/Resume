import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const TypingEffect = ({ text, speed = 200 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const indexRef = useRef(0); // useRef to keep track of index across renders
    const intervalRef = useRef(null);

    useEffect(() => {
        setDisplayedText(''); // Reset displayed text when text changes
        indexRef.current = 0;

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            if (indexRef.current < text.length) {
                setDisplayedText((prev) => prev + text.charAt(indexRef.current));
                indexRef.current += 1;
            } else {
                clearInterval(intervalRef.current);
            }
        }, speed);

        return () => clearInterval(intervalRef.current);
    }, [text, speed]);

    return <span>{displayedText}</span>;
};

const scrollToBottom = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth', // smooth scroll
    });
};


const Hero = ({ setCursorScale, setCursorColor, setCursorText, onScrollToContact }) => {
    return (
        <div className="container mx-auto font-primary h-[100vh]">
            <div className="flex justify-between items-center text-text-primary pt-5 p md:pb-5 font-bold">
                <Link to="/" className="text-xl md:text-3xl cursor-pointer">
                    AzyTaku
                </Link>
                <div className='text-xl md:text-3xl cursor-pointer'
                    onClick={onScrollToContact}
                    onMouseEnter={() => {
                        setCursorScale(2);
                        setCursorColor('bg-white/30 backdrop-blur-xs'); // darker color on hover
                        setCursorText('Connect');
                    }}
                    onMouseLeave={() => {
                        setCursorScale(1); // reset size
                        setCursorColor('bg-secondary/70'); // reset color
                        setCursorText('');
                    }}>
                    Keep in Touch
                </div>
            </div>
            <hr className="border-secondary" />
            <div className="flex flex-col justify-center items-center text-text-primary uppercase tracking-wide h-[50vh] pt-4">
                <Link to={"/"} className="text-[80px] text-center md:text-largec font-bold leading-none  cursor-pointer"
                    onMouseEnter={() => {
                        setCursorScale(4);
                        setCursorColor('bg-white/30 backdrop-blur-xs'); // darker color on hover
                        setCursorText('Hello');
                    }}
                    onMouseLeave={() => {
                        setCursorScale(1); // reset size
                        setCursorColor('bg-secondary/70'); // reset color
                        setCursorText('');
                    }}>
                    Azlan Raban
                </Link>
                <div className="text-2xl sm:text-3xl font-bold pt-4 text-center">
                    <TypingEffect text="Sooftware Engineer & Fullstack Developer" speed={100} />
                    {/* Software Engineer & Fullstack Developer */}
                </div>
            </div>
            <div className="flex mt-10">
                <div className="max-w-[600px] text-md md:text-2xl font-medium text-center justify items-center tracking-tight text-text-primary bg-secondary p-5 rounded-xl ml-auto">
                    Driven software engineer with a passion for building innovative, user-focused digital experiences that make a meaningful impact.
                </div>
            </div>
        </div>
    )
}

export default Hero
