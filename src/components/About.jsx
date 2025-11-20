import React, { useEffect, useState, useRef } from 'react';
import image from '../assets/Images/me22.jpg'

const CounterItem = ({ label, target }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                    observer.disconnect(); // stop observing once started
                }
            },
            {
                threshold: 0.5, // trigger when 50% visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 30);

        const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(counter);
            }
            setCount(Math.floor(start));
        }, 30);

        return () => clearInterval(counter);
    }, [hasStarted, target]);

    return (
        <div ref={ref} className="flex flex-col items-center">
            <div className="text-4xl md:text-5xl font-extrabold text-text-primary">
                {count}+
            </div>
            <div className="text-lg font-semibold text-text-secondary mt-1">
                {label}
            </div>
        </div>
    );
};

const About = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="text-text-primary">
                    <div className="text-3xl font-bold pt-5 pb-5 pl-5 font-primary">
                        About
                    </div>
                    <hr className="border-secondary" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 p md:p-10">
                <div className="flex top-1 self-start h-full w-full">
                    <img
                        src={image}
                        alt="About Image"
                        className="h-full w-full rounded"
                    />
                </div>

                <div className="space-y-6 text-text-primary p sm:p-10">
                    <div>
                        I'm a full-stack software engineer with a strong focus on the MERN stack, passionate about building clean, scalable web applications. I’ve collaborated with international clients, contributed to CRM systems, and developed features using technologies like React, Node.js, Tailwind CSS, and MongoDB. I’ve also worked as a QA Engineer, where I gained hands-on experience with automated testing, bug tracking, and ensuring software quality across various projects. I enjoy solving real-world problems through tech, especially when it comes to enhancing user experience and optimizing performance.
                    </div>
                    <div>
                        Outside of development, I’m deeply involved in community and event-driven spaces. As an Event Coordinator and team member at AnimeLK, I’ve helped organize and host large-scale events such as the annual Anime Cosplay Competition, raffles, and interactive contests. I’ve collaborated with artists and creators to market and sell merchandise while engaging niche audiences through targeted strategies. I’m also an active member of Tabletop_sl, participating in bi-monthly gaming events and occasionally hosting sessions—coordinating RSVPs, welcoming newcomers, and fostering an inclusive, organized environment. Earlier on, I served as President of my school’s English Literature Club, where I led events like English Day and literary competitions, gaining valuable experience in public engagement, teamwork, and leadership. These roles have helped me build strong communication, coordination, and community-building skills that I carry into both my professional and personal life.
                    </div>
                    {/* Counting staaaaarrrs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <CounterItem label="Age" target={22} />
                        <CounterItem label="Projects Eaten" target={10} />
                        <CounterItem label="Coffees Had" target={9999} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
