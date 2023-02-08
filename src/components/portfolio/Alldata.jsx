import React from 'react';
import Image1 from "../../assets/work1.jpg";
import Image2 from "../../assets/work2.jpg";
import Image3 from "../../assets/work3.jpg";
import Image4 from "../../assets/work4.jpg";

const Alldata = () => {
    return (
       <div className="portfolio__all-data">
           <div className="box">
               <div><img src={Image1} alt=""/></div>  
               <h4 className="title__project">Web design <br/>(e-commerce pizza) </h4> 
               <h5> <a href="https://2021ahmed.github.io/shop1/#" target="_blank"> Demo</a><i className="uil uil-arrow-right services__button-icon"></i> </h5>            
           </div>
           <div className="box">
               <div><img src={Image2} alt=""/></div>  
               <h4 className="title__project">E-ecomrce shop</h4> 
               <h5> <a href=""> Demo</a><i className="uil uil-arrow-right services__button-icon"></i> </h5>            
           </div>
           <div className="box">
               <div><img src={Image3} alt=""/></div>  
               <h4  className="title__project">E-ecomrce shop</h4> 
               <h5> <a href=""> Demo</a><i className="uil uil-arrow-right services__button-icon"></i> </h5>            
           </div>
           <div className="box">
               <div><img src={Image4} alt=""/></div>  
               <h4  className="title__project">Portfolio (JS Vanilia)</h4> 
               <h5> <a href=""> Demo</a><i className="uil uil-arrow-right services__button-icon"></i> </h5>            
           </div>
           <div className="box">
               <div><img src={Image2} alt=""/></div>  
               <h4  className="title__project">Portfolio (JS Vanilia)</h4> 
               <h5> <a href=""> Demo</a><i className="uil uil-arrow-right services__button-icon"></i> </h5>            
           </div>
           <div className="box">
               <div><img src={Image4} alt=""/></div>  
               <h4  className="title__project">Portfolio (JS Vanilia)</h4> 
               <h5> <a href=""> Demo</a><i className="uil uil-arrow-right services__button-icon"></i> </h5>            
           </div>
       </div>
    )
}

export default Alldata
