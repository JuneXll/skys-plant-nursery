import React from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import DeliveryMap from '../widgets/DeliveryMap';

const Delivery = () => {
    return(
        <div id="delivery" className='delivery-div cover-container d-flex flex-column justify-content-center align-items-center'>
            <Container>
                <Row className='d-flex justify-content-between'>
                    <Col className='col-xl-8 col-md-6 col-sm-10 col-xs-12 '>
                        <DeliveryMap/>
                    </Col>
                    <Col className='col-xl-4 col-md-6 col-sm-10 col-xs-12 d-flex flex-column justify-content-center align-items-center'>
                        <h1 className='delivery-areas'>Delivery Areas</h1>
                        <ul className='delivery-areas'>
                            <li><h3>Area One</h3></li>
                            <li><h3>Area Two</h3></li>
                            <li><h3>Area Three</h3></li>
                            <li><h3>Area Four</h3></li>
                            <li><h3>Area Five</h3></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Delivery;