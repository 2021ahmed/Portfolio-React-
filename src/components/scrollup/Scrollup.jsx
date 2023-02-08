import React from 'react'
import "./scrollup.css";
import { Link } from "react-scroll";
const Scrollup = () => {
    window.addEventListener("scroll",()=>{
        const scrollUp=document.querySelector(".scrollup");
        if (window.scrollY>=500) {
            scrollUp.classList.add("show")
        }
        else{
            scrollUp.classList.remove("show")

        }

    })
    const home="home";
    return (
        <div className="scrollup">
 <Link
              to={home}
              smooth={true}
              duration={1500}
            >
                <i className="uil uil-arrow-up"></i>
            </Link>

        </div>
    )
}
export default Scrollup
