import React from "react";
import { NavLink } from "react-router-dom";
// import web from '../src/images/img1.jpg';
import homeimg2 from '../src/images/web2.jpg';
import Commom from "./Commom";

const Home = () =>{
    return(
        <>
       <Commom name="FullFill Your Dream Thinking With " 
            imgsrc={homeimg2} 
            visit="/service"
            btname="Enroll Now" 
            name1="We're working with this since 2018"/>
        </>
    );
};
export default Home;