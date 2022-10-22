import React from 'react';
import './HeroImg.css';


const HeroImg = () => {
  return (
    <div className="heroImg">
        <h1>Pic<span>And</span>Edit</h1>
        <img 
            src={process.env.PUBLIC_URL+"./images/PicAndEdit.png"}
            alt='PicAndEdit_logo'
        />
    </div>
  )
}


export default HeroImg;