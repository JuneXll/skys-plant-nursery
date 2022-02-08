import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const logo = 'https://ik.imagekit.io/junexll/Skys_nursery/EggwhiteT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643577386918'

const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    },
    {
        code: 'es',
        name: 'Español',
        country_code: 'es'
    }
]

const Navigation = () => {
    //World icon for language dropdown
    const worldIcon = (<i className="fas fa-globe" style={{color:"#f8f9f0"}} role='menu' aria-label='Language Menu'></i>)

    // //Set language of page when use clicks on language options or by cookie
    let cookie = document.cookie
        .split(';')
        .map(cookie=> cookie.split('='))
        .reduce((accumulator, [key,value]) => 
            ({ ...accumulator, [key.trim()]:decodeURIComponent(value) }),
            {});
    let langCookie = cookie.i18next;
    const [lang, setLang] = useState(langCookie);
    const { t } = useTranslation();

    return (
    
        <Navbar expand='md' fixed='top' className="nav-bar">
            <Navbar.Brand href='#home' className='d-line my-1 mx-3' aria-labelledby="Sky's Plant Nursery">
                    <img src={logo} className="nav-logo" alt="Sky's Plant Nursery Logo"></img>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll'/>
            <Navbar.Collapse className='justify-content-around'>
                <Nav.Link href="#about" aria-labelledby='About Us'>
                    {t('nav_about')}
                </Nav.Link>
                <Nav.Link href="#inventory" aria-labelledby='Inventory'>
                    {t('nav_inventory')}
                </Nav.Link>
                <Nav.Link href="#delivery" aria-labelledby='Delivery'>
                    {t('nav_delivery')}
                </Nav.Link>
                <Nav.Link href="#contact-us" aria-labelledby='Contact Us'>
                    {t('nav_contact_us')}
                </Nav.Link>
                <NavDropdown title={worldIcon} style={{color:"#f8f9f0"}}>
                    {languages.map(({code, name, country_code})=>(
                        <NavDropdown.Item 
                            key={country_code} 
                            onClick={(e) =>{
                                i18next.changeLanguage(code)
                                setLang(e.currentTarget.innerHTML)}}
                                disabled={name === lang}
                                aria-label={`Language: ${name}`}
                                role='menuitem'
                                >
                                {name}
                        </NavDropdown.Item>
                    ))}
                </NavDropdown>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;