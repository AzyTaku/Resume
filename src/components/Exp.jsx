import React, { useState, useEffect, useRef } from 'react'

const experiences = [
    {
        title: "QA Engineer – Contract - 4 Months",
        company: "Victrix Tech",
        duration: "02/2025 – 06/2025",
        location: "On-Site",
        bullets: [
            "Actively led quality assurance efforts in a dynamic fullstack development environment, collaborating with both frontend and backend teams to align QA strategies with product goals and release timelines.",
            "Designed and implemented comprehensive automated test suites using Jest and Supertest for backend API validation, ensuring data integrity and logic correctness across critical endpoints.",
            "Developed and maintained end-to-end (E2E) testing using Cypress to simulate real user workflows, uncover UI regressions, and validate core user journeys across major browsers and devices.",
            "Took on a dual role as QA and de facto lead, proactively establishing testing standards, improving QA processes, mentoring devs on testing best practices, and ensuring full test coverage during agile sprints.",
            "Integrated all test suites into a GitHub Actions CI/CD pipeline, automating quality checks on every pull request and merge to reduce human error and catch bugs before production.",
            "Utilized tools such as Git for version control, Postman for API debugging and test automation, and MongoDB Compass for validating and querying test data across development and staging environments."
        ]
    },
    {
        title: "Trainee Fullstack Software Engineer",
        company: "Mandadev",
        duration: "07/2024 – 01/2025",
        location: "Remote",
        bullets: [
            "Gained hands-on experience working extensively with the MERN stack (MongoDB, Express.js, React, Node.js), developing, testing, and deploying scalable web applications.",
            "Collaborated closely with a German client to enhance their CRM system, implementing backend API improvements and fine-tuning frontend features to improve usability and performance.",
            "Strengthened frontend development skills using React and Tailwind CSS to build responsive and visually appealing user interfaces aligned with modern UX principles.",
            "Enhanced backend development proficiency in Node.js, focusing on API design, integration, and debugging using tools like Postman and MongoDB Compass.",
            "Applied version control best practices using Git and GitHub, participating in code reviews and continuous integration workflows to maintain code quality and team collaboration.",
            "Deepened understanding of software engineering fundamentals and industry best practices through hands-on coding, peer feedback, and iterative learning."
        ]

    },
    {
        title: "Freelance Full Stack Software Engineer",
        company: "Fiverr",
        duration: "Various Projects",
        location: "Remote",
        bullets: [
            "Worked with international clients through Fiverr to deliver customized software solutions tailored to specific business needs, ensuring seamless integration and optimal application performance.",
            "Collaborated closely with clients to gather requirements and provide end-to-end development, maintenance, and support for web applications with a strong focus on clean, scalable, and maintainable code.",
            "Managed communication across multiple time zones to address client feedback promptly, troubleshoot issues effectively, and implement enhancements that ensured high client satisfaction and successful project delivery."
        ]
    }

];


const Exp = () => {
    // We'll track visibility for each card by index
    const [visibleCards, setVisibleCards] = useState({});
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = entry.target.getAttribute('data-index');
                    if (entry.isIntersecting) {
                        setVisibleCards((prev) => ({ ...prev, [index]: true }));
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            },
            { threshold: 0.1 }
        );

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="container mx-auto font-primary mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className='text-text-primary'>
                    <div className='text-3xl font-bold pt-5 pb-5 pl-5'>
                        EXP
                    </div>
                    <hr className='border-secondary' />
                </div>
            </div>
            <div className="flex flex-col mt-10 space-y-4">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`box-hover w-3/4 h-full rounded p-4 overflow-auto ${index % 2 === 0
                            ? 'bg-secondary self-end text-text-primary'
                            : 'bg-text-primary self-start text-secondary'
                            }`}
                    >
                        <h3 className="text-xl font-bold underline-animate cursor-crosshair">{exp.title}</h3>
                        <p className="text-sm">
                            {exp.company} | {exp.duration} | {exp.location}
                        </p>
                        <ul className="mt-2 list-disc list-inside text-sm space-y-2 tracking-wide">
                            {exp.bullets.map((item, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Exp