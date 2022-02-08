import React from 'react';

const logo = 'https://ik.imagekit.io/junexll/Skys_nursery/EggwhiteT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643577386918'

const Footer = () => {
    return(
        <div className='footer d-flex justify-content-between align-items-center px-4'>
            <small>Copyright ©2021 Sky's Plant Nursery</small>
            <a href='#home'>
                <img src={logo} className="nav-logo" alt="Sky's Plant Nursery Logo"></img>
            </a>
            
        </div>
    )
}

export default Footer;