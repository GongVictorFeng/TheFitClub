import React from "react";
import Header from "../Header/Header";
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {Link} from "react-scroll";
const Hero = () => {
    return ( 
        <div className="hero">
            <div className="left-h">
                <Header/>
{/* The best ad */}
                <div className="the-best-ad">
                    <div></div>
                    <span>The best fitness club in the town</span>
                </div>

{/* Hero heading */}
            <div className="hero-text">
                <div><span className="stroke-text">
                    Shape </span><span>Your</span></div>
                <div><span>Ideal body</span></div>
                <div>
                    <span>
                    In here we will help you to shape and build your ideal body 
                    and live up your life to fullest  
                    </span>
                </div>
                </div>

                {/* figures */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coachs</span>
                        </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                        </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                        </div>
                </div>

                {/* Hero button */}
                <div className="hero-buttons">
                    <Link to='Programs' spy={true} smooth={true} className='link-k'>
                        <buttons className="btn">Get Started</buttons>
                    </Link>
                    
                    <Link to='Coaches' spy={true} smooth={true} className='link-l'>
                        <buttons className="btn">Learn More</buttons>
                    </Link>
                    
                </div>
            </div>
            <div className="right-h">
                <Link to='Join' spy={true} smooth={true} className='link-j'>
                    <button className="btn">Join Now</button>
                </Link>
               

                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span><span>116 bpm</span>
                </div>

                <img src={hero_image} alt="" className="hero-image" />
                <img src={hero_image_back} alt="" className="hero-image-back" />

                {/* calories */}
                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;