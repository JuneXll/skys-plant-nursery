import React from 'react';

const coverLogo = 'https://ik.imagekit.io/junexll/Skys_nursery/MainTLogo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643577372161'

const Home = () => {
    return(
        <div id="home" className='cover cover-container d-flex h-100 flex-column mx-auto align-items-center'>
            <img src={coverLogo} className='cover-logo' alt="Sky's Plant Nursery Logo"/>
        </div>
    )
}

export default Home;