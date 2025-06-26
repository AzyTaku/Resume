import React, { useState, useEffect } from 'react';
import { SolarFire } from "../../assets"

const AnimatedPage = ({ children }) => {
    const [reveal, setReveal] = useState(false);

    useEffect(() => {
        setReveal(true);
    }, []);

    return (
        <div className="overflow-hidden">
            <div>{children}</div>

            <div
                className={`
          fixed inset-0 bg-black z-50 flex items-center justify-center transform transition-transform duration-[2000ms] ease-in-out
          ${reveal ? '-translate-y-full' : 'translate-y-0'}
        `}
            >
                <h1 className="text-text-primary font-primary text-6xl font-bold select-none">
                    <img src={SolarFire} alt="Fire" className='w-20 h-20 inline-block' />
                    Welcome
                </h1>
            </div>
        </div>
    );
};

export default AnimatedPage;
