import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";
const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header_container">
        <div className="main__header_left">
          <h4>#100DaysOFWorkOut</h4>
          <h1>Join The Legend Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eum
            voluptas aut veritatis iusto distinctio error ipsa debitis harum
            repellendus?
          </p>
          <Link to="/plans" className="btn lg">
            Get Started 
          </Link>
        </div>
        <div className="main__header_right">
          <div className="main__header_circle"></div>
          <div className="main__header_image">
            <img src={Image} alt="Main Header Logo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
