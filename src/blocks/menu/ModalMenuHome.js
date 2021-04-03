import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Collapse } from '@material-ui/core';

const ModalMenuHome = () => {
    const [open, setOpen] = useState( false );

    const handleClick = () => {
        setOpen( ( prev ) => ! prev );
    };

    const modalOff = () => {
        let e = document.getElementById('close-modal')

        if ( e ) {
            e.click();
        }
    };

    return (
        <nav className="menu-primary">
            <ul className="list-unstyled">
                <li className="nav-item">
                    <Link to="services" spy={ true } smooth={ true } duration={ 300 } onClick={ modalOff } title="Services" href="#">Services</Link>
                </li>

                <li className="nav-item">
                    <Link to="about-us" spy={ true } smooth={ true } duration={ 300 } onClick={ modalOff } title="About us" href="#">About us</Link>
                </li>

                <li className="nav-item">
                    <Link to="why-us" spy={ true } smooth={ true } duration={ 300 } onClick={ modalOff } title="Why us" href="#">Why us</Link>
                </li>

                <li className={"nav-item nav-item-has-children dropdown-child-click-effect " + ( open ?  "show" : '' ) }>
                    <Link to="gallery" spy={ true } smooth={ true } duration={ 300 } onClick={ modalOff } title="Gallery" href="#">Gallery</Link>

                    <span onClick={ handleClick } className="dropdown-toggle dropdown-custom-icon" style={ { color: '#414258' } }>
                        <span className="dropdown-icon">
                            <i className="fas fa-caret-down"></i>
                        </span>
                    </span>

                    <Collapse in={ open } timeout={ 400 }>
                        <ul className="dropdown-menu" style={ { display: "block" } }>
                            <li>
                                <a title="Truck Logistics" href={ process.env.PUBLIC_URL + "/gallery-inside" }>Truck Logistics</a>
                            </li>

                            <li>
                                <a title="Ship Logistics" href={ process.env.PUBLIC_URL + "/gallery-inside" }>Ship Logistics</a>
                            </li>

                            <li>
                                <a title="Storage Logistics" href={ process.env.PUBLIC_URL + "/gallery-inside" }>Storage Logistics</a>
                            </li>

                            <li>
                                <a title="Plain Logistics" href={ process.env.PUBLIC_URL + "/gallery-inside" }>Plane Logistics</a>
                            </li>
                        </ul>
                    </Collapse>
                </li>

                <li className="nav-item">
                    <Link to="reviews" spy={ true } smooth={ true } duration={ 300 } onClick={ modalOff } title="Reviews" href="#">Reviews</Link>
                </li>

                <li className="nav-item">
                    <Link to="clients" spy={ true } smooth={ true } duration={ 300 } onClick={ modalOff } title="Clients" href="#">Clients</Link>
                </li>

                <li className="nav-item">
                    <Link to="news" spy={ true } smooth={ true } duration={ 300 } onClick={ modalOff } title="News" href="#">News</Link>
                </li>

                <li className="nav-item">
                    <Link to="contacts" spy={ true } smooth={ true } duration={ 300 } onClick={ modalOff } title="Contacts" href="#">Contacts</Link>
                </li>
            </ul>
        </nav>
    );
};

export default ModalMenuHome;
