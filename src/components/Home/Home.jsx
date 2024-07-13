import React, { useEffect, useState } from 'react';
import Logo from '../../assets/profile.jpg';

const Home = () => {
    const [wish, setWish] = useState('');

    useEffect(() => {
        const date = new Date();
        const hour = date.getHours();
        let currentWish;

        if (hour < 12) {
            currentWish = 'Good Morning,';
        } else if (hour < 18) {
            currentWish = 'Good Afternoon,';
        } else {
            currentWish = 'Good Evening,';
        }
        setWish(currentWish);
    }, []);

    return (
        <div className="w-full h-screen flex flex-wrap items-center justify-evenly text-white bg-gray-800" id="home">
            <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Hi <span className="text-yellow-400">{wish}</span></h2>
                <h1 className="text-xl md:text-2xl lg:text-5xl">I am <span className="text-green-400 font-medium">Chiratla.</span><br/>Yuva Sai Manikanta</h1>
            </div>
            <div className="profile">
                <img src={Logo} alt="Profile Pic" className="w-48 md:w-56 lg:w-72 rounded-full" />
            </div>
        </div>
    );
};

export default Home;
