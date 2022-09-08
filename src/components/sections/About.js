import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap'

const iconImg = 'https://ik.imagekit.io/junexll/Skys_nursery/CirclePlant.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643577365435'

// const [ imgWidth, setImgWidth ] = useState('');

// const windowSize = () => {
//     if(window.innerWidth < 480) {
//         setImgWidth()
//     }
// }

const About = () => {

    console.log(window.innerWidth);

    return(
        <div id="about" className='about-div'>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col className='col-lg-6 col-md-10 col-sm-12 d-flex justify-content-center align-items-center'>
                    {
                        window.innerWidth <= 575 ? <img src={iconImg} style={{display:'none'}} alt='plant-icon'/> : <img src={iconImg} style={{width:'50%'}} alt='plant-icon'/>
                    }
                    </Col>
                    <Col className='col-lg-6 col-md-10 col-sm-12 d-flex flex-column justify-content-center p-2'>
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div>
                            <h2>Business Hours:</h2>
                            <Table 
                                className="table table-borderless" style={{width:'300px'}}
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