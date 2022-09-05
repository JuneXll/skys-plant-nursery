import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Col, Row}  from 'react-bootstrap';
import PlantCard from './PlantCard';
import { inventoryList } from '../../inventoryData/inventoryList';
//import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider';

const CarouselFunction = () => {

  const [index, setIndex] = useState(0);
  
  return (
    <div>
      <Carousel className='carousel-padding' >
        {inventoryList.map((plant, index)=>{
          // console.log(index)
            return (
              <Carousel.Item interval={5000}>
                <div>
                  <Row>
                    <Col><PlantCard key={()=> setIndex(index+1)} {...plant}/></Col>
                    <Col><PlantCard key={()=> setIndex(index+2)} {...plant}/></Col>
                  </Row>
                </div>
              </Carousel.Item>
            )
          })}
      </Carousel>
    </div>
   
  );
}

export default CarouselFunction;