import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Carousel from './Carousel';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <Footer/>
        </div>
    );
};

export default Home;