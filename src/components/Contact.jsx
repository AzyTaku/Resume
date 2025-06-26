import React, { forwardRef } from 'react';
import { github, insta, linkedin, info } from '../assets';

const Contact = forwardRef((props, ref) => (
    <div
        ref={ref}
        className="container mx-auto h-[30vh] md:h-[80vh] flex flex-col justify-center items-start md:items-center text-text-primary"
    >
        <div className="text-[60px] md:text-lesslargec uppercase font-primary font-extrabold text-start md:text-center leading-none">
            Say Hello!
        </div>

        <div className="grid grid-cols-4 gap-6 mt-8">
            <img
                src={github}
                alt="GitHub"
                className="w-12 h-12 md:w-20 md:h-20 cursor-pointer filter invert-0 hover:invert transition duration-300"
            />
            <img
                src={insta}
                alt="Instagram"
                className="w-12 h-12 md:w-20 md:h-20 cursor-pointer filter invert-0 hover:invert transition duration-300"
            />
            <img
                src={linkedin}
                alt="LinkedIn"
                className="w-12 h-12 md:w-20 md:h-20 cursor-pointer filter invert-0 hover:invert transition duration-300"
            />
            <img
                src={info}
                alt="Info"
                className="w-12 h-12 md:w-20 md:h-20 cursor-pointer filter invert-0 hover:invert transition duration-300"
            />
        </div>

        {/* <hr className="border-1 border-secondary w-full mt-20" /> */}
    </div>
));

export default Contact;
