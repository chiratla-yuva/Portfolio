import React from 'react'

const Experience = () => {
    return (
        <div className="w-full min-h-screen pt-16 p-6 flex flex-col items-center justify-evenly bg-gray-800" id="experience">
            <div className='flex flex-col items-center'>
                <h1 className="text-center text-4xl font-bold text-green-500">Experience</h1>
                <hr className="w-1/2 mx-auto my-4 border-green-500" />
                <div className='rounded-3xl w-full min-h-max flex flex-col items-center gap-2'>
                    <div className='bg-gray-700 rounded-3xl w-full min-h-max p-6 flex flex-col items-center'>
                        <h3 className='text-xl font-normal'>Full-Stack Web Development Using MERN Stack</h3>
                        <h4 className='text-md'>CODEBEAT</h4>
                        <h5 className='text-md'>May 2024 - Jul 2024</h5>
                    </div>
                    <div className='bg-gray-700 rounded-3xl w-full min-h-max p-6 flex flex-col items-center'>
                        <h3 className='text-xl font-normal'>Cyber Risk & Regulatory Launchpad</h3>
                        <h4 className='text-md'>PwC Acceleration Centers in India</h4>
                        <h5 className='text-md'>Feb 2021 - Jun 2024</h5>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-center text-4xl font-bold text-green-500">Certificates</h1>
                <hr className="w-1/2 mx-auto my-4 border-green-500" />
                <div className='rounded-3xl w-full min-h-max p-2 flex flex-col items-center gap-2.5'>
                    <div className='bg-gray-700 rounded-3xl w-full min-h-max p-6 flex flex-col items-start'>
                        <a className='text-lg font-normal' href="http://">Meta Front-End Developer</a>
                        <a className='text-lg font-normal' href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/gmf3ypEXBj2wvfQWC_Tata%20Group_mfkxKWeihhRGfwzKw_1713790379421_completion_certificate.pdf">Tata Group - Cybersecurity Analyst Job Simulation</a>
                        <a className='text-lg font-normal' href="https://coursera.org/share/26046507a1a4dc7d8e82b6cf7c5c116b">Foundations of User Experience (UX) Design</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience