import React, { useEffect } from 'react';
import Aboutus from "../Components/Aboutus";
import Detail from "../Components/Detail";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Main from '../Components/Main';
import Service from "../Components/Service";

const Home = () => {
    useEffect(()=>{
        window.scroll(0,0);
    },[])
    return (
        <div>
            <Navbar />
            <Main />
            <Aboutus />
            <Service />
            <Detail />
            <Footer />
           
        </div>
    )
}

export default Home
