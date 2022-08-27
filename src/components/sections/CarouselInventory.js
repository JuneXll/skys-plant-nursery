import React from 'react';
import CarouselFunction from '../widgets/CarouselFunction';

const CarouselInventory = () => {
    return(
        <div id="inventory" className='carousel-inventory-div'>
            <h1 className='pb-3'>Inventory</h1>
            <p className='pb-5'>Call for more information about pricing and availability.</p>
                <CarouselFunction/>
        </div>
    )
}

export default CarouselInventory;