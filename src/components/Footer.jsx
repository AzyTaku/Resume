import React from 'react'
import AnimatedText from './util/AnimatedText';

const Footer = ({ setCursorScale, setCursorColor, setCursorText }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // smooth scroll
        });
    };
    return (
        <div className='container mx-auto h--full flex flex-col mt-10'>
            <div
                onClick={scrollToTop}
                className="self-end font-bold font-primary mb-2 text-text-primary text-lg md:text-2xl cursor-pointer underline-animate"
                role="button"
                tabIndex={0}
                onMouseEnter={() => {
                    setCursorScale(2);
                    setCursorColor('bg-white/30 backdrop-blur-xs'); // darker color on hover
                    setCursorText('UP');
                }}
                onMouseLeave={() => {
                    setCursorScale(1); // reset size
                    setCursorColor('bg-secondary/70'); // reset color
                    setCursorText('');
                }}>
                Back to Top
            </div>
            <hr className="border-1 border-secondary w-full" />
            <div className='flex flex-col items-center text-[50px] md:text-largec font-primary uppercase text-text-primary cursor-pointer font-bold'
                onClick={scrollToTop}
                onMouseEnter={() => {
                    setCursorScale(4);
                    setCursorColor('bg-white/30 backdrop-blur-xs'); // darker color on hover
                    setCursorText('Ciao');
                }}
                onMouseLeave={() => {
                    setCursorScale(1); // reset size
                    setCursorColor('bg-secondary/70'); // reset color
                    setCursorText('');
                }}>
                {/* Azlan Raban */}
                <AnimatedText text="Azlan Raban" />
            </div>
        </div >
    )
}

export default Footer