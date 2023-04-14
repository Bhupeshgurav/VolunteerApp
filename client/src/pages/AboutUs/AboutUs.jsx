import React from 'react';
import './aboutus.css';
// import Founder1 from './founder1.png';
// import Founder2 from './founder2.png';

function AboutUs() {
    return (
        <div className="about-us-container">
            <h2>About SocialSpark</h2>
            <p>
                SocialSpark is a platform dedicated to connecting individuals and organizations with social service events in their communities. Our mission is to make it easy and convenient for people to give back to their communities and make a positive impact on the world.
            </p>
            <p>
                Our slogan is "Changing the world, one event at a time" and we truly believe in the power of volunteerism to make a difference.
            </p>
            <div className="founders-container">
                <div className="founder">
                
                    <h3>Bhupesh</h3>
                    <p>Co-founder & CEO</p>
                </div>
                <div className="founder">
                    <img alt="Founder 2" />
                    <h3>Dhrumil</h3>
                    <p>Co-founder & COO</p>
                </div>
                <div className="founder">
                    <img alt="Founder 1" />
                    <h3>Shrey</h3>
                    <p>Co-founder & CEO</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
