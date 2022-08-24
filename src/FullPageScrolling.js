import React from "react";
import FullPage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage';

// // Sections
import Home from './components/sections/Home';
import About from './components/sections/About';
// import Inventory from './components/sections/Inventory';
import CarouselInventory from './components/sections/CarouselInventory'
import Delivery from './components/sections/Delivery';
import Contact from './components/sections/Contact';
// import Navigation from './components/Navigation';

const FullPageScrolling = () => {
    return(
        <FullPage>
            <FullpageNavigation/>
            <FullPageSections>
                <FullpageSection >
                    <Home/>
                </FullpageSection>
                <FullpageSection >
                    <About/>
                </FullpageSection>
                <FullpageSection >
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