import  React, { useState } from "react";
import FullPage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage';

import 'core-js';
// // Sections
import Home from './components/sections/Home';
import About from './components/sections/About';
// import Inventory from './components/sections/Inventory';
import CarouselInventory from './components/sections/CarouselInventory'
import Delivery from './components/sections/Delivery';
import Contact from './components/sections/Contact';
//import Navigation from './components/Navigation';

const FullPageScrolling = () => {

    const [mainColor, setMainColor] = useState('#afc79e')

   const handleChange = (event) => {
        console.log(event.target)
   }
   
    return(
        <FullPage 
        desktopForceStep={true}
        onChange={handleChange}>
            <FullpageNavigation/>
            <FullPageSections>
                <FullpageSection >
                    <Home/>
                </FullpageSection>
                <FullpageSection style={{height:'80vh'}}>
                    <About/>
                </FullpageSection> 
                
                <FullpageSection  style={{
                    backgroundColor: mainColor,
                    transition: 'background-color 1000ms linear',
                 }}
                onShow={() => {
                    setMainColor({
                    // backgroundColor: '#9aaf8a'
                    backgroundColor: '#grey'
                })
                    console.log(mainColor)
                }}
                onHide={() => {
                    setMainColor({
                    backgroundColor: '#afc79e'
                })
                    console.log(mainColor)
                }}>
                    <CarouselInventory/>
                </FullpageSection>
                <FullpageSection >
                    <Delivery/>
                </FullpageSection>
                <FullpageSection >
                    <Contact/>
                </FullpageSection>
            </FullPageSections>

        </FullPage>
    )
}

export default FullPageScrolling;