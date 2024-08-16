import React, { useEffect, useState } from 'react';
import Logo from '../assets/profile.jpg';

const Home = () => {
    const [wish, setWish] = useState('');
    useEffect(() => {
        const date = new Date();
        const hour = date.getHours();
        let currentWish;

        if (hour >= 1 && hour <= 11) {
            currentWish = 'Good Morning,';
        } else if (hour >= 12 && hour <= 15) {
            currentWish = 'Good Afternoon,';
        } else if (hour >= 16 && hour <= 19) {
            currentWish = 'Good Evening,';
        } else {
            currentWish = 'Good Night,';
        }
        setWish(currentWish);
    }, []);

    return (
        <div className="w-full h-screen flex flex-col-reverse md:flex-row items-center justify-center text-white bg-gray-800 gap-12" id="home">
            <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl mb-2">
                    Hi <span className="text-yellow-400">{wish}</span>
                </h2>
                <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
                    I am <span className="text-green-400 font-medium">Chiratla.</span><br />
                    Yuva Sai Manikanta
                </h1>
            </div>
            <div className="flex-shrink-0">
                <img src={Logo} alt="Profile Pic" className="w-56 md:w-56 lg:w-72 rounded-full" />
            </div>
        </div>
    );
};

export default Home;
