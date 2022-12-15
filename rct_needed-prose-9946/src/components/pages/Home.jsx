import React from "react";
import First_picture from "../Homecomponents/picture";
import LimitedCom from "../Homecomponents/Limitedcom";
import Logos from "../Homecomponents/Logos";
import Boxx from "../Homecomponents/Boxx";
import LivingRoom from "../Homecomponents/LivingRoom";
import BeautifulBox from "../Homecomponents/BeautifulBox";
import BeautifulBed from "../Homecomponents/beautifulBed";

import Footer from "../Homecomponents/footer";

const Home = () => {

    return(
        <>
        <div> Home </div>

        <div><First_picture /></div>
        
        <div> <LimitedCom /> </div>

        <div> <Boxx /></div>

        <div> <Logos /> </div>

        <div> <LivingRoom /> </div>

        <div> <BeautifulBox /> </div>
        <div> <BeautifulBed/> </div>


        <div> < Footer /></div>

        </>

    ) 
    
}

export default Home;
