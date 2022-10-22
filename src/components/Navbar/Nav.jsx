import React from 'react';
import "./Nav.css";
import HeroImg from '../HeroImg/HeroImg';


const Nav = () => {
  return (
    <nav>

      <div>
        <HeroImg />
      </div>
      <div className="navBtns">
        <button className="btn0">Home</button>
        <button className="btn1">Create</button>
        <button className="btn2">Brand ur Biz</button>
      </div>

    </nav>
  )
}


export default Nav;