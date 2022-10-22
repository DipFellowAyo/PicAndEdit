import React from 'react';
import HeroImg from '../HeroImg/HeroImg';
import "./Footer.css";

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <footer>
        <HeroImg />
        <p>PicAndEdit makes it easier for both individuals and businesses to have a central point from where they can create exciting image transformations with one click. <br/> Here, you can create without any huge creativity process. Our <b style={{fontSize: '1.3rem'}}>PicsArt</b> APIs will do the hardwork for you.</p>
        <p>Copyright © {currentYear}</p>
    </footer>
  )
}

export default Footer;