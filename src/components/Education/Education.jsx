import React from 'react'

const Education = () => {
    return (
        <div className="w-full min-h-screen pt-28 p-6 flex flex-wrap flex-col items-center text-white bg-gray-800" id="education">
            <h1 className="text-center text-4xl font-bold text-green-500">Education</h1>
            <hr className="w-1/3 my-4 border-green-500" />
            <div className='rounded-3xl w-full min-h-max p-6 flex flex-col items-center gap-2.5'>
                <div className='bg-gray-700 rounded-3xl w-full min-h-max p-6 flex flex-col items-center'>
                    <h3 className='text-xl font-semibold'>UG</h3>
                    <h3 className=''>B.Tech - CSE (Cyber Security)</h3>
                    <h4 className=''>GITAM University, Visakhapatnam</h4>
                    <h5 className=''>2021 - 2025</h5>
                </div>
                <div className='bg-gray-700 rounded-3xl w-full min-h-max p-6 flex flex-col items-center'>
                    <h3 className='text-xl font-semibold'>Intermediate</h3>
                    <h3 className=''>Maths Physics Chemistry</h3>
                    <h4 className=''>Sri Chaitanya Junior College, Kakinada</h4>
                    <h5 className=''>2019 - 2021</h5>
                </div>
                <div className='bg-gray-700 rounded-3xl w-full min-h-max p-6 flex flex-col items-center'>
                    <h3 className='text-xl font-semibold'>SSC</h3>
                    <h4 className=''>Sri Chaitanya Techno School, Kakinada</h4>
                    <h5 className=''>2018 - 2019</h5>
                </div>
            </div>
        </div>
    )
}

export default Education
