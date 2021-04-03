import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from '@material-ui/core';

class FooterMenu extends Component {
    constructor( props ) {
        super();
        this.state = {
            visible: false
        };

        this.handleClick = this.handleClick.bind( this );
    };

    handleClick() {
        this.setState( { visible: ! this.state.visible } );
    };

    render() {
        return (
            <nav className="menu-primary">
                <ul className="nav">
                    <li className={"nav-item " + ( this.props.location.pathname ===  window.location.pathname && this.props.location.pathname === process.env.PUBLIC_URL + "/"  ? "current-nav-item" : "" ) }>
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

                    <li className={ "nav-item nav-item-has-children dropdown-child-click-effect " + ( window.location.pathname.includes( "/gallery" ) || window.location.pathname.includes( "/gallery-inside" ) ? "current-nav-item" : "" )  + ( this.state.visible ? ' show' : '' ) }>
                        <Link to={ process.env.PUBLIC_URL + "/gallery" } title="Gallery">Gallery</Link>

                        <span onClick={ this.handleClick } className="dropdown-toggle dropdown-custom-icon" style={ { color: '#ffffff' } }>
                            <span className="dropdown-icon">
                                <i className="fas fa-caret-down footer-icon"></i>
                            </span>
                        </span>

                        <Collapse in={ this.state.visible } className="footer-collapse" timeout={ 400 } style={ { width: '230px' } }>
                            <ul className="footer-dropdown" style={ { display: 'block' } }>
                                <li>
                                    <Link title="Truck Logistics" to={ process.env.PUBLIC_URL + "/gallery-inside" }>Truck Logistics</Link>
                                </li>

                                <li>
                                    <Link title="Ship Logistics" to={ process.env.PUBLIC_URL + "/gallery-inside" }>Ship Logistics</Link>
                                </li>

                                <li>
                                    <Link title="Storage Logistics" to={ process.env.PUBLIC_URL + "/gallery-inside" }>Storage Logistics</Link>
                                </li>

                                <li>
                                    <Link title="Plain Logistics" to={ process.env.PUBLIC_URL + "/gallery-inside" }>Plane Logistics</Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/reviews" ) ? "current-nav-item" : "" ) }>
                        <Link to={ process.env.PUBLIC_URL + "/reviews" } title="Reviews">Reviews</Link>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/clients" ) ? "current-nav-item" : "" ) }>
                        <Link to={ process.env.PUBLIC_URL + "/clients" } title="Clients">Clients</Link>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/news" ) || window.location.pathname.includes( "/news-single-page" ) ? "current-nav-item" : "" ) }>
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

export default withRouter(FooterMenu);
