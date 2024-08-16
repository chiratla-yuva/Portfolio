import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceDetails = [
    {
        role: "Full-Stack Web Development Using MERN Stack",
        company: "CODEBEAT",
        duration: "May 2024 - Jul 2024"
    },
    {
        role: "Cyber Risk & Regulatory Launchpad",
        company: "PwC Acceleration Centers in India",
        duration: "Feb 2021 - Jun 2024"
    },
];

const Experience = () => {
    return (
        <div className="w-full min-h-screen pt-20 p-4 flex flex-wrap flex-col items-center text-white bg-gray-800" id="experience">
            <h1 className="text-center text-2xl font-bold text-green-500">Experience</h1>
            <hr className="w-1/6 my-2 border-green-500" />
            <VerticalTimeline>
                {ExperienceDetails.map((exp, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#393E46', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #393E46' }}
                        date={exp.duration}
                        iconStyle={{ background: '#00ADB5', color: '#EEEEEE' }}
                        icon={<FaBriefcase />}
                    >
                        <h3 className="vertical-timeline-element-title text-xl font-semibold text-yellow-400">{exp.role}</h3>
                        <h4 className="vertical-timeline-element-subtitle text-md text-white">{exp.company}</h4>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>

            <div className='mt-4'>
                <h1 className="text-center text-2xl font-bold text-green-500">Certificates</h1>
                <hr className="w-1/2 mx-auto my-2 border-green-500" />
                <div className='rounded-3xl w-full min-h-max p-2 flex flex-col items-center gap-2.5'>
                    <div className='bg-gray-700 rounded-3xl w-full min-h-max p-6 flex flex-col items-start'>
                        <a className='text-lg font-normal' href="http://">Meta Front-End Developer</a>
                        <a className='text-lg font-normal' href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/gmf3ypEXBj2wvfQWC_Tata%20Group_mfkxKWeihhRGfwzKw_1713790379421_completion_certificate.pdf">Tata Group - Cybersecurity Analyst Job Simulation</a>
                        <a className='text-lg font-normal' href="https://coursera.org/share/26046507a1a4dc7d8e82b6cf7c5c116b">Foundations of User Experience (UX) Design</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
