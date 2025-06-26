import React from 'react';
import Slider from 'react-slick';
import {
    JavaScript, Java, Python, C, CPlusPlus, CSS3, HTML5, ReactIcon, Nodejs,
    TailwindCSS, Express, MongoDB, Figma, Docker, Git,
} from '../assets';
import AnimatedText from './util/AnimatedText';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const skillIcons = [
    { name: 'JavaScript', src: JavaScript },
    { name: 'Java', src: Java },
    { name: 'Python', src: Python },
    { name: 'C', src: C },
    { name: 'C++', src: CPlusPlus },
    { name: 'CSS3', src: CSS3 },
    { name: 'HTML5', src: HTML5 },
    { name: 'React', src: ReactIcon },
    { name: 'Node.js', src: Nodejs },
    { name: 'Tailwind CSS', src: TailwindCSS },
    { name: 'Express.js', src: Express },
    { name: 'MongoDB', src: MongoDB },
    { name: 'Figma', src: Figma },
    { name: 'Docker', src: Docker },
    { name: 'Git', src: Git },
];

const Tech = ({ setCursorScale, setCursorColor, setCursorText }) => {
    const settings = {
        infinite: true,
        slidesToShow: 8,          // Number of visible slides at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,         // No delay between scrolls for continuous effect
        speed: 3000,              // Duration of one full scroll animation (ms)
        cssEase: 'linear',        // Linear easing for smooth continuous scroll
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="container mx-auto font-primary mt-10 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="text-text-primary">
                    <div className="text-3xl font-bold pt-5 pb-5 pl-5 font-primary uppercase">
                        {/* Tech */}
                        <AnimatedText text="Tech" />
                    </div>
                    <hr className="border-secondary" />
                </div>
            </div>

            {/* React Slick Slider */}
            <div className="mt-10 hidden md:block">
                <Slider {...settings}>
                    {skillIcons.map((icon, i) => (
                        <div
                            key={i}
                            className="cursor-pointer flex justify-center items-center"
                            onMouseEnter={() => {
                                setCursorScale(2);
                                setCursorColor('bg-white/30 backdrop-blur-xs');
                                setCursorText(icon.name);
                            }}
                            onMouseLeave={() => {
                                setCursorScale(1);
                                setCursorColor('bg-secondary/70');
                                setCursorText('');
                            }}
                        >
                            <img
                                src={icon.src}
                                alt={icon.name}
                                className="w-20 h-20 object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="md:hidden grid grid-cols-4 gap-2 p md:p-4">
                {skillIcons.map((icon, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 rounded shadow cursor-pointer hover:bg-gray-100"
                        title={icon.name}
                    >
                        <img
                            src={icon.src}
                            alt={icon.name}
                            className="w-12 h-12 object-contain mb-2"
                            loading="lazy"
                        />
                        <span className="text-xs text-center text-text-primary">{icon.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tech;
