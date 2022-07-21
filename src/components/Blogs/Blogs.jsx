import React from "react";
import './Blogs.css'
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { Link } from 'react-router-dom';
const Blogs = () => {

    const [selected,setSelected] =useState(0);
    const tLength=testimonialsData.length;

    return ( 
        <div className="Blogs">
            <div className="left-b">
                <span>Blogs</span>
                <span className="stroke-text">communication</span>
                <span>and sharing</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{color: 'var(--orange)'}}>
                        {testimonialsData[selected].name}
                    </span>
                     -- {testimonialsData[selected].status}
                </span>
                <div className="blogsButton">
                        <Link to='/Create' className="link-b">
                            <buttons className="btn">New Blogs</buttons>
                        </Link>

                </div>
            </div>
            <div className="right-b">
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />
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
            </div>
        </div>
     );
}
 
export default Blogs;