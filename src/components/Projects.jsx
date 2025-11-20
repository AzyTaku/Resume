import React from 'react'
import AnimatedText from './util/AnimatedText'

const Projects = () => {
    return (
        <div className="container mx-auto font-primary mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className='text-text-primary'>
                    <div className='text-2xl md:text-3xl font-bold pt-5 pb-5 p md:pl-5 uppercase'>
                        {/* Projects & Education */}
                        <AnimatedText text="Projects & Education" />
                    </div>
                    <hr className='border-secondary' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-10 p md:px-10 font-primary gap-10'>
                <div className="flex flex-col space-y-8">
                    <h2 className="text-2xl font-bold text-text-primary uppercase underline decoration-secondary">
                        {/* Projects */}
                        <AnimatedText text="Projects" />
                    </h2>

                    <div className="flex flex-col space-y-1">
                        <h3 className="text-xl font-semibold text-text-primary">
                            Todo Shit
                        </h3>
                        <p className="text-lg font-bold text-secondary">
                            Lorem Ipsum text will be here
                        </p>
                        <p className="text-lg font-bold text-text-primary">
                            Technologies: ReactJS, Tailwindcss
                        </p>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <h3 className="text-xl font-semibold text-text-primary">
                            Project Two
                        </h3>
                        <p className="text-lg font-bold text-secondary">
                            Description for project two goes here.
                        </p>
                        <p className="text-lg font-bold text-text-primary">
                            Technologies: Next.js, Chakra UI
                        </p>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <h3 className="text-xl font-semibold text-text-primary">
                            Project Three
                        </h3>
                        <p className="text-lg font-bold text-secondary">
                            Description for project three goes here.
                        </p>
                        <p className="text-lg font-bold text-text-primary">
                            Technologies: Node.js, Express, MongoDB
                        </p>
                    </div>
                </div>

                <div className="flex flex-col space-y-8">
                    <h2 className="text-2xl font-bold text-text-primary uppercase underline decoration-secondary">
                        {/* Education */}
                        <AnimatedText text="Education" />
                    </h2>

                    <div className="flex flex-col space-y-1">
                        <h3 className="text-xl font-semibold text-text-primary">
                            HND in Software Engineering
                        </h3>
                        <p className="text-lg font-bold text-secondary">
                            Cardiff Metropolitan University - ICBT Campus
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-text-primary uppercase  decoration-secondary">
                        {/* Extra + Other */}
                        <AnimatedText text="Extra & Other" />
                    </h2>
                    <div className="flex flex-col space-y-1">
                        <h3 className="text-xl font-semibold text-text-primary">
                            AnimeLK - Event Assistant & Developer
                        </h3>
                        <p className="text-lg font-bold text-secondary">
                            Assist in Event Hosting and Development of their Web Applications
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects