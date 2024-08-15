import React from 'react'

const Projects = () => {
    return (
        <div className="w-full min-h-screen pt-28 p-6 flex flex-wrap flex-col items-center bg-gray-800" id="projects">
            <h1 className="text-center text-4xl font-bold text-green-500">Projects</h1>
            <hr className="w-1/4 my-4 border-green-500" />
            <div className='bg-gray-700 w-full min-h-max p-5 flex flex-col items-center justify-center rounded-3xl xl:w-1/2'>
                <h1 className='text-xl font-medium lg:text-3xl text-yellow-400'>Full Stack User Management Dashboard</h1>
                <hr className="w-full mx-auto my-4 border-green-500"/>
                <p className='text-md py-2'>Developed a dynamic and responsive user management dashboard enabling administrators to perform CRUD operations on user data. The frontend, built with React.js and Redux, features a form for user data input using React Hook Form, a table for displaying users, pagination, and filtering capabilities. The backend, powered by Node.js and Express.js, includes secure API endpoints with JWT-based authentication, integrates MongoDB for data storage, and employs Joi for input validation. The dashboard ensures a seamless user experience across devices and incorporates essential security measures, error handling, and optional features like form validation and visual feedback.</p>
            </div>
        </div>
    )
}

export default Projects
