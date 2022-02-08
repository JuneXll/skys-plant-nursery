import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../widgets/ContactForm';
import Footer from '../Footer';

const plantsImg = 'https://ik.imagekit.io/junexll/Skys_nursery/MainPlantLineUp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643577379733'

const Contact = () => {
    return (
        <div id="contact-us" >
            <div className='contact-div cover-container d-flex flex-column justify-content-around align-items-center'>
            {/* Contact us form */}
            <Container className="row">
                {/* Contact info */}
                <Container className='flex-column col-md-6 col-xs-12'>
                    <div>
                        <img src={plantsImg} className='plant-lineup-img' alt='plant-line-up'/>
                    </div>
                    <Container className='contact-details'>
                        <h1>Sky's Plant Nursery</h1>
                        <h2>13120 Sw 202 Ave</h2>
                        <h2>Miami, FL 33196</h2>
                        <br/>
                        <h3>Sergio Lacayo</h3>
                        <h4>SkysNursery1@gmail.com</h4>
                        <h4>(786)-238-6737</h4>
                    </Container>
                </Container>
                <Container className='col-md-6 col-xs-12 text-center flex-column my-auto'>
                    <h1 className='mb-3'>Contact Us</h1>
                    {/* Contact us form component */}
                    <ContactForm/>
                </Container>
            </Container>
        </div>
        <Footer/>
        </div>
    )
}

export default Contact;