import React from 'react';
import Profile from '../../assets/profile.jpg';
import backgroundImage from '../../assets/bg-1.jpg';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="max-w-md p-10 bg-white bg-opacity-25 rounded-lg flex flex-col items-center">
                <img src={Profile} alt="Yuva Sai" className="w-48 h-48 rounded-full" />
                <h1 className="text-3xl font-bold text-center text-black mt-4">Chiratla. <br />Yuva Sai Manikanta</h1>
                <div className="mt-6 space-y-4">
                    <Link className="block w-64 text-center bg-white text-black py-2 rounded-full font-bold transition hover:bg-blue-500 hover:text-white" to="/portfolio">Portfolio Website</Link>
                    <a className="block w-64 text-center bg-white text-black py-2 rounded-full font-bold transition hover:bg-blue-500 hover:text-white" href="http://">Resume</a>
                    <a className="block w-64 text-center bg-white text-black py-2 rounded-full font-bold transition hover:bg-blue-500 hover:text-white" href="https://www.linkedin.com/in/yuvachiratla/">LinkedIn</a>
                    <a className="block w-64 text-center bg-white text-black py-2 rounded-full font-bold transition hover:bg-blue-500 hover:text-white" href="https://github.com/chiratla-yuva">GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default Landing;
