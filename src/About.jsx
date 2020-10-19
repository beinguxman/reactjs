import React from "react";
import Commom from "./Commom";
import homeimg from '../src/images/web1.jpeg';

const About = () => {
    return (
        <>
            <Commom name="Welcome to About Page"
                imgsrc={homeimg}
                visit="/contact"
                btname="Contact Now"
                name1="Thanks for Reaching Us" />
        </>

    );

};
export default About; 