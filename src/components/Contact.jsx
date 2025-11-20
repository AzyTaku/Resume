import React, { forwardRef } from 'react';
import { github, insta, linkedin, info } from '../assets';
import { Link } from 'react-router';
import AnimatedText from './util/AnimatedText';


const Contact = forwardRef(({ setCursorScale, setCursorColor, setCursorText }, ref) => (
    <div
        ref={ref}
        className="container mx-auto h-[30vh] md:h-[80vh] flex flex-col justify-center items-center text-text-primary"
    >
        <div className="text-[45px] md:text-lesslargec uppercase font-primary font-extrabold text-center leading-none">
            {/* Say Hello! */}
            <AnimatedText text="Say Hello!" />
        </div>

        <div className="grid grid-cols-4 gap-6 mt-8">
            <Link to="https://github.com/AzyTaku/" target='_blank' rel='noopener noreferrer'
                onMouseEnter={() => {
                    setCursorScale(2);
                    setCursorColor('bg-white/30 backdrop-blur-xs');
                    setCursorText('GITHUB');
                }}
                onMouseLeave={() => {
                    setCursorScale(1);
                    setCursorColor('bg-secondary/70');
                    setCursorText('');
                }}>
                <img
                    src={github}
                    alt="GitHub"
                    className="w-10 h-10 md:w-20 md:h-20 cursor-pointer filter invert-0 hover:invert transition duration-300"
                />
            </Link>
            <Link to="https://www.instagram.com/azy_taku/" target="_blank" rel="noopener noreferrer"
                onMouseEnter={() => {
                    setCursorScale(2);
                    setCursorColor('bg-white/30 backdrop-blur-xs p-6');
                    setCursorText('INSTAGRAM');
                }}
                onMouseLeave={() => {
                    setCursorScale(1);
                    setCursorColor('bg-secondary/70');
                    setCursorText('');
                }}>
                <img
                    src={insta}
                    alt="Instagram"
                    className="w-10 h-10 md:w-20 md:h-20 cursor-pointer filter invert-0 hover:invert transition duration-300"
                />
            </Link>
            <Link to="https://www.linkedin.com/in/azlan-raban-2248991b9/" target="_blank" rel="noopener noreferrer"
                onMouseEnter={() => {
                    setCursorScale(2);
                    setCursorColor('bg-white/30 backdrop-blur-xs');
                    setCursorText('LINKEDIN');
                }}
                onMouseLeave={() => {
                    setCursorScale(1);
                    setCursorColor('bg-secondary/70');
                    setCursorText('');
                }}>
                <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-10 h-10 md:w-20 md:h-20 cursor-pointer filter invert-0 hover:invert transition duration-300"
                />
            </Link>
            <Link to="http://azlanraban.netlify.app/" target="_blank" rel="noopener noreferrer"
                onMouseEnter={() => {
                    setCursorScale(2);
                    setCursorColor('bg-white/30 backdrop-blur-xs p-6');
                    setCursorText('PERSONAL SITE');
                }}
                onMouseLeave={() => {
                    setCursorScale(1);
                    setCursorColor('bg-secondary/70');
                    setCursorText('');
                }}>
                <img
                    src={info}
                    alt="Info"
                    className="w-10 h-10 md:w-20 md:h-20 cursor-pointer filter invert-0 hover:invert transition duration-300"
                />
            </Link>
        </div>

        {/* <hr className="border-1 border-secondary w-full mt-20" /> */}
    </div >
));

export default Contact;
