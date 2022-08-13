import Carousel from 'react-bootstrap/Carousel';
import {Col, Row}  from 'react-bootstrap';
import PlantCard from './PlantCard';
import { inventoryList } from '../../inventoryData/inventoryList';

const CarouselFunction = () => {
  return (
    <div>
      <Carousel className='carousel-padding' >
        {inventoryList.map((plant)=>{
            return (
              <Carousel.Item interval={5000}>
                <div>
                  <Row>
                    <Col><PlantCard {...plant}/></Col>
                    <Col><PlantCard {...plant}/></Col>
                    <Col><PlantCard {...plant}/></Col>
                    <Col><PlantCard {...plant}/></Col>
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