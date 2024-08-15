import React from 'react'

const Education = () => {
    return (
        <div className="w-full min-h-screen pt-28 p-6 flex flex-wrap flex-col items-center text-white bg-gray-800" id="education">
            <h1 className="text-center text-4xl font-bold text-green-500">Education</h1>
            <hr className="w-1/4 my-4 border-green-500" />
            <div className='rounded-3xl w-full min-h-max p-6 flex flex-col items-center gap-2.5'>
                <div className='bg-gray-700 rounded-3xl w-9/12 min-h-max p-4 flex flex-col items-center sm:w-full'>
                    <h3 className='text-xl font-semibold'>B.Tech - CSE(Cyber Security)</h3>
                    <h4 className='text-lg'>GITAM University</h4>
                    <h4 className=''>Visakhapatnam</h4>
                    <h5 className=''>2021 - 2025</h5>
                </div>
                <div className='bg-gray-700 rounded-3xl w-9/12 min-h-max p-4 flex flex-col items-center sm:w-full'>
                    <h3 className='text-xl font-semibold'>Intermediate M.P.C</h3>
                    <h4 className='text-lg'>Sri Chaitanya Junior College</h4>
                    <h4 className=''>Kakinada</h4>
                    <h5 className=''>2019 - 2021</h5>
                </div>
                <div className='bg-gray-700 rounded-3xl w-9/12 min-h-max p-4 flex flex-col items-center sm:w-full'>
                    <h3 className='text-xl font-semibold'>SSC</h3>
                    <h4 className='text-lg'>Sri Chaitanya Techno School</h4>
                    <h4 className=''>Kakinada</h4>
                    <h5 className=''>2018 - 2019</h5>
                </div>
            </div>
        </div>
    )
}

export default Education
