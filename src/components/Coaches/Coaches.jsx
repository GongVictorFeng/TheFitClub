import React from "react";
import './Coaches.css';
import { useState } from "react";
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { coachData } from "../../data/coachData";
import {Link} from "react-scroll";
const Coaches = () => {

    const [selected,setSelected] =useState(0);
    const tLength=coachData.length;

    return (
        <div className="Coaches">
        <div className="left-c">
                <img src={coachData[selected].image} alt="" />
                <div className="arrows">
                    <img onClick={()=>{
                        selected===0
                        ? setSelected(tLength-1): setSelected((prev)=>prev-1);
                    }} 
                    src={leftArrow} alt="" />
                    <img onClick={()=>{
                        selected===tLength-1
                        ? setSelected(0): setSelected((prev)=>prev+1);
                    }}
                    src={rightArrow} alt="" />
                </div>

                <div className="right-c">
                <span>Staff</span>
                <span className="stroke-text">Our</span>
                <span>excellent coaches</span>
                <span>
                    {coachData[selected].review}
                </span>
                <span>
                    <span style={{color: 'var(--orange)'}}>
                        {coachData[selected].name}
                    </span>
                </span>
                <div className="CoachButton">
                    <Link to='Join' spy={true} smooth={true} className='link-c'>
                        <buttons className="btn">Be A Coach</buttons>
                    </Link>
                </div>
            </div>
        </div>

        </div>
      );
}
 
export default Coaches;