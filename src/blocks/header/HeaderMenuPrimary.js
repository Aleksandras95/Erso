import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';

class HeaderMenuPrimary extends Component {
    constructor( props ) {
        super();
        this.state = {
            over: false,
        };
    };

    handleOver = () => {
        this.setState( { over: ! this.state.over } );
    };

    render() {
        const { over } = this.state;

        return (
            <nav className="menu-primary">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to={ process.env.PUBLIC_URL + "/" } title="Home">Home</Link>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/services" ) || window.location.pathname.includes( "/service-inside" ) ? "current-nav-item" : "" ) }>
                        <Link to={ process.env.PUBLIC_URL + "/services" } title="Services">Services</Link>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/about-us" ) ? "current-nav-item" : "" ) }>
                        <Link to={ process.env.PUBLIC_URL + "/about-us" } title="About us">About us</Link>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/why-us" ) ? "current-nav-item" : "" ) }>
                        <Link to={ process.env.PUBLIC_URL + "/why-us" } title="Why us">Why us</Link>
                    </li>

                    <li onMouseOver={ this.handleOver } onMouseOut={ this.handleOver } className={ "nav-item nav-item-has-children dropdown-hover " + ( window.location.pathname.includes( "/gallery" ) || window.location.pathname.includes( "/gallery-inside" ) ? "current-nav-item" : "" ) + ( this.state.over ? 'show' : '' ) }>
                        <Link to={ process.env.PUBLIC_URL + "/gallery" } title="Gallery">Gallery</Link>

                        <span className="dropdown-toggle dropdown-custom-icon">
                            <span className="dropdown-icon">
                                <i className="fas fa-caret-down"></i>
                            </span>
                        </span>

                        <Fade in={ over } timeout={ 400 }>
                            <ul className="dropdown-menu" style={ { display: 'block' } }>
                                <li>
                                    <Link className="dropdown-item" title="Truck Logistics" to={ process.env.PUBLIC_URL + "/gallery-inside" }>Truck Logistics</Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" title="Ship Logistics" to={ process.env.PUBLIC_URL + "/gallery-inside" }>Ship Logistics</Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" title="Storage Logistics" to={ process.env.PUBLIC_URL + "/gallery-inside" }>Storage Logistics</Link>
                                </li>

                                <li>
                                    <Link className="dropdown-item" title="Plain Logistics" to={ process.env.PUBLIC_URL + "/gallery-inside" }>Plane Logistics</Link>
                                </li>
                            </ul>
                        </Fade>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/reviews" ) ? "current-nav-item" : "" ) }>
                        <Link to={ process.env.PUBLIC_URL + "/reviews" } title="Reviews">Reviews</Link>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/clients" ) ? "current-nav-item" : "" ) }>
                        <Link to={ process.env.PUBLIC_URL + "/clients" } title="Clients">Clients</Link>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/news" ) || window.location.pathname.includes( "/news-single-page" )? "current-nav-item" : "" ) }>
                        <Link to={ process.env.PUBLIC_URL + "/news" } title="News">News</Link>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/contacts" ) ? "current-nav-item" : "" ) }>
                        <Link to={ process.env.PUBLIC_URL + "/contacts" } title="Contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
        );
    };
};

export default HeaderMenuPrimary;
