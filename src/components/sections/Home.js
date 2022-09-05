import React from 'react';

const coverLogo = 'https://ik.imagekit.io/junexll/Skys_nursery/MainTLogo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643577372161'

const Home = () => {
    return(
        <div id="home" className='cover'>
            {/* Mobile */}
            <img src={coverLogo} className='mobile-cover-logo' alt="Sky's Plant Nursery Logo"/>
            {/* Tablet */}
            <img src={coverLogo} className='tablet-cover-logo' alt="Sky's Plant Nursery Logo"/>
            {/* Desktop */}
            <img src={coverLogo} className='desktop-cover-logo' alt="Sky's Plant Nursery Logo"/>
        </div>
        
    )
}

export default Home;