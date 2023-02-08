import React, { useState } from "react";
import  Alldata from "./Alldata";
import "./portfolio.css";
import Image3 from "../../assets/work3.jpg";
import Image4 from "../../assets/work4.jpg";
import Image5 from "../../assets/work5.jpg";

const Portfolio = () => {
  const [port, setport] = useState(1);
  const portnumber = (index) => {
    setport(index);
  };
  return (
    <div className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most projects</span>

      <div className="portfolio__container container grid">
        <div className="portfolio__tabs">
          <button
            className={port === 1 ? "button-active" : "portolio__tabs-button"}
            onClick={() => {
              setport(1);
            }}
          >
            All
          </button>

          <button
            onClick={() => {
              setport(2);
            }}
            className={port === 2 ? "button-active" : "portolio__tabs-button"}
          >
            Web
          </button>
          <button
            onClick={() => {
              setport(3);
            }}
            className={port === 3 ? "button-active" : "portolio__tabs-button"}
          >
            Design
          </button>
          <button
            onClick={() => {
              setport(4);
            }}
            className={port === 4 ? "button-active" : "portolio__tabs-button"}
          >
            React
          </button>
        </div>
        <div className={port===1?"portfolio__all-show":"portfolio__all-hide"}>
          < Alldata/>
        </div>
            {/* web */}
            <div className={port===2?"portfolio__design-show":"portfolio__design-hide"}>
           <div className="box">
               <div><img src={Image3} alt=""/></div>  
               <h4 className="title__project">Web app</h4> 
               <h5> <a href=""> Demo</a> </h5>            
           </div>
           <div className="box">
               <div><img src={Image4} alt=""/></div>  
               <h4 className="title__project" >Weather app</h4> 
               <h5> <a href=""> Demo</a> </h5>            
           </div>
           </div>
              {/* Design */}
              <div className={port===3?"portfolio__design-show":"portfolio__design-hide"}>
           <div className="box">
               <div><img src={Image3} alt=""/></div>  
               <h4 className="title__project">Web app</h4> 
               <h5> <a href=""> Demo</a> </h5>            
           </div>
           <div className="box">
               <div><img src={Image4} alt=""/></div>  
               <h4 className="title__project">Web app</h4> 
               <h5> <a href=""> Demo</a> </h5>            
           </div>
           </div>
                {/* React  */}
              <div className={port===4?"portfolio__design-show":"portfolio__design-hide"}>
           <div className="box">
               <div><img src={Image3} alt=""/></div>  
               <h4 className="title__project">Web app</h4> 
               <h5> <a href=""> Demo</a> </h5>            
           </div>
           <div className="box">
               <div><img src={Image4} alt=""/></div>  
               <h4 className="title__project" >Weather app</h4> 
               <h5> <a href=""> Demo</a> </h5>            
           </div>
           <div className="box">
               <div><img src={Image5} alt=""/></div>  
               <h4 className="title__project">E-ecomrce shop (React)</h4> 
               <h5> <a href=""> Demo</a> </h5>            
           </div>
           <div className="box">
               <div><img src={Image4} alt=""/></div>  
               <h4 className="title__project">Weather app</h4> 
               <h5> <a href=""> Demo</a> </h5>            
           </div>
           </div>
          
      
      </div>
    </div>
  );
};

export default Portfolio;
