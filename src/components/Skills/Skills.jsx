import React from 'react';

const skillsData = [
    { name: 'C', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'SQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg' },
    { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Github', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
    { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Node', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' }
];

const Skills = () => {
    return (
        <div className="w-full min-h-screen pt-20 p-6 flex flex-wrap flex-col items-center bg-gray-800" id="skills">
            <h1 className="text-center text-4xl font-bold text-green-500">Skills</h1>
            <hr className="w-1/3 my-4 border-green-500" />
            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
                {skillsData.map((skill, index) => (
                    <div key={index} className="w-24 lg:w-32 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/8 p-4 bg-gray-700 border-2 border-green-500 rounded-lg shadow-md flex flex-col items-center text-black">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center mb-4">
                            <img src={skill.src} alt={skill.name} className="max-h-full max-w-full" />
                        </div>
                        <h4 className="text-lg font-semibold text-green-400">{skill.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
