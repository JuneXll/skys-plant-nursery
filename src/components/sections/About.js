import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap'

const iconImg = 'https://ik.imagekit.io/junexll/Skys_nursery/CirclePlant.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643577365435'

const About = () => {
    return(
        <div id="about" className='about-div cover-container d-flex flex-column justify-content-center align-items-center'>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col className='col-xl-5 col-md-6 col-sm-10 col-xs-12 '>
                        <img src={iconImg} className='plant-icon-img' alt='plant-icon'/>
                    </Col>
                    <Col className='col-xl-7 col-md-6 col-sm-10 col-xs-12 d-flex flex-column justify-content-center'>
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div>
                            <h2>Business Hours:</h2>
                            <Table 
                                className="table table-borderless" style={{width:'350px'}}
                                responsive="md"
                                size='sm'>
                                <tbody class="table">
                                    <tr>
                                        <td>Monday</td>
                                        <td>9:00 AM - 5:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td>9:00 AM - 5:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td>9:00 AM - 5:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td>9:00 AM - 5:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td>9:00 AM - 5:00 PM</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;