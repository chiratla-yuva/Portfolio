import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const EducationDetails = [
    {
        institution: "Gitam University, Visakhapatnam",
        degree: "B.Tech CSE (Cyber Security)",
        duration: "2021-2025",
        grade: "70%"
    },
    {
        institution: "Sri Chaitanya Junior College, Kakinada",
        degree: "Intermediate MPC",
        duration: "2019-2021",
        grade: "82%"
    },
    {
        institution: "Sri Chaitanya (EM) High School, Kakinada",
        degree: "SSC",
        duration: "2018-2019",
        grade: "90%"
    },
];

const Education = () => {
    return (
        <div className="w-full min-h-screen pt-20 p-4 flex flex-wrap flex-col items-center text-white bg-gray-800" id="education">
            <h1 className="text-center text-4xl font-bold text-green-500">Education</h1>
            <hr className="w-1/6 my-4 border-green-500" />
            <VerticalTimeline>
                {EducationDetails.map((edu, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#393E46', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #393E46' }}
                        date={edu.duration}
                        iconStyle={{ background: '#00ADB5', color: '#EEEEEE' }}
                        icon={<FaGraduationCap />}
                    >
                        <h3 className="vertical-timeline-element-title text-xl font-semibold text-yellow-400">{edu.degree}</h3>
                        <h4 className="vertical-timeline-element-subtitle text-md text-white">{edu.institution}</h4>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}

export default Education;
