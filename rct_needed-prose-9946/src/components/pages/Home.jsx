import React from "react";
import Firstpicture from "../Homecomponents/picture";
import LimitedCom from "../Homecomponents/Limitedcom";
import Logos from "../Homecomponents/Logos";
import Boxx from "../Homecomponents/Boxx";
import LivingRoom from "../Homecomponents/LivingRoom";
import BeautifulBox from "../Homecomponents/BeautifulBox";
import BeautifulBed from "../Homecomponents/beautifulBed";
import IndiaLogo from "../Homecomponents/IndiaLogo";
import Navbar from "../Navbar";
import SavingCombo from "../Homecomponents/SavingCompo";
import OverStockCompo from "../Homecomponents/OverStockCompo";
import WeStyle from "../Homecomponents/WeStyle";
import TrendingSearch from "../Homecomponents/TrendingSearch";
import Footer from "../Homecomponents/footer";
const Home = () => {

    return(
        <>
        {/* <div> <IndiaLogo /> </div>

        <div> <Navbar /> </div> */}

       
        <div> <Firstpicture /> </div>
        
        <div> <LimitedCom /> </div>

        <div> <Boxx /></div>

        <div> <Logos /> </div>

        <div> <LivingRoom /> </div>

        <div> <BeautifulBox /> </div>
        <div> <BeautifulBed/> </div>
        <div> <SavingCombo /> </div>
        <div><OverStockCompo/></div>
        <div> <WeStyle/> </div>
        <div> <TrendingSearch /> </div>

        <div> < Footer /></div>

       

      



        </>

    ) 
    
}

export default Home;
