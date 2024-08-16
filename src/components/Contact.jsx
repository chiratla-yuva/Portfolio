import React from 'react'
import GmailIcon from '../assets/gmail.png'
import Linkedin from '../assets/linkedin.svg'
import Github from '../assets/github.svg'

const Contact = () => {
    return (
        <div className="bg-gray-600 w-full min-h-max p-4 flex flex-wrap flex-col items-center" id="contact">
            <h1 className="text-center text-4xl font-bold text-green-500">Contact Me</h1>
            <hr className="w-1/3 my-4 border-green-500" />
            <div className='flex flex-col items-center justify-center py-2 '>
                <div className='flex justify-between items-center gap-5 mb-2 '>
                    <a href="https://www.linkedin.com/in/yuvachiratla/">
                        <img src={Linkedin} alt="Linkedin" className='w-12 h-12'/>
                    </a>
                    <a href="https://github.com/chiratla-yuva">
                        <img src={Github} alt="Github" className='w-12 h-12'/>
                    </a>
                    <a href="mailto:yuvachiratla@gmail.com">
                        <img src={GmailIcon} alt="Gmail" className='w-12 h-12'/>
                    </a>
                </div>
                <div className='mt-3'>
                    <h4 className='text-lg font-semibold text-center text-black'>Thanks for Visiting &#x1F642;</h4>
                </div>
            </div>
        </div>
    )
}

export default Contact
