import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Fade from '@material-ui/core/Fade';

class HomeHeaderMenuPrimary extends Component {
    constructor() {
        super();
        this.state = {
            over: false,
            pushed: false
        };

        this.scrollEvent     = this.scrollEvent.bind( this );
        this.set             = this.set.bind( this );
        this.handleOverEnter = this.handleOverEnter.bind( this );
        this.handleOverLeave = this.handleOverLeave.bind( this );
    };

    handleOverEnter() {
        this.setState( { over: true } );
    };

    handleOverLeave() {
        this.setState( { over: false } );
    };

    componentDidMount() {
        window.addEventListener( 'scroll', this.scrollEvent, { passive: true } );
    };

    componentWillUnmount() {
        window.removeEventListener( 'scroll', this.scrollEvent, { passive: true } );
    };

    removeActive() {
        if ( document.querySelector( '.active' ) ) {
            let actives = document.querySelector( '.active' );

            if ( actives !== null ) {
                actives.classList.remove( "active" );
            }
        }
    };

    scrollEvent() {
        let offset       = 76;
        let servicesOfst = document.getElementById( "services" ).offsetTop;
        let aboutUsOfst  = document.getElementById( "about-us" ).offsetTop;
        let whyUsOfst    = document.getElementById( "why-us" ).offsetTop;
        let galleryOfst  = document.getElementById( "gallery" ).offsetTop;
        let reviewsOfst  = document.getElementById( "reviews" ).offsetTop;
        let clientsOfst  = document.getElementById( "clients" ).offsetTop;
        let newsOfst     = document.getElementById( "news" ).offsetTop;
        let contactsOfst = document.getElementById( "contacts" ).offsetTop;

        let menuServices = document.getElementById( "nav-services" );
        let menuAboutUs  = document.getElementById( "nav-about-us" );
        let menuWhyUs    = document.getElementById( "nav-why-us" );
        let menuGallery  = document.getElementById( "nav-gallery" );
        let menuReviews  = document.getElementById( "nav-reviews" );
        let menuClients  = document.getElementById( "nav-clients" );
        let menuNews     = document.getElementById( "nav-news" );
        let menuContacts = document.getElementById( "nav-contacts" );

        if ( ! this.state.pushed ) {
            if ( window.scrollY < servicesOfst ) {
                this.removeActive();
            }

            if ( window.scrollY + offset > servicesOfst ) {
                this.removeActive();
                menuServices.classList.add( 'active' );
            }

            if ( window.scrollY + offset > aboutUsOfst ) {
                this.removeActive();
                menuAboutUs.classList.add( 'active' );
            }

            if ( window.scrollY + offset > whyUsOfst ) {
                this.removeActive();
                menuWhyUs.classList.add( 'active' );
            }

            if ( window.scrollY + offset > galleryOfst ) {
                this.removeActive();
                menuGallery.classList.add( 'active' );
            }

            if ( window.scrollY + offset > reviewsOfst ) {
                this.removeActive();
                menuReviews.classList.add( 'active' );
            }

            if ( window.scrollY + offset > clientsOfst ) {
                this.removeActive();
                menuClients.classList.add( 'active' );
            }

            if ( window.scrollY + offset > newsOfst ) {
                this.removeActive();
                menuNews.classList.add( 'active' );
            }

            if ( window.scrollY + offset > contactsOfst ) {
                this.removeActive();
                menuContacts.classList.add( 'active' );
            }
        }
    };

    handleClick( e ) {
        this.setState( { pushed: true } )
        this.removeActive();

        let active = e.target;
        active.parentNode.classList.add( "active" );

        setTimeout( this.set, 800 );
    };

    set() {
        this.setState( { pushed: false } )
    };

    render() {
        const { over } = this.state;

        return (
            <nav className="menu-primary">
                <ul className="nav">
                    <li className="nav-item" id="nav-services">
                        <Link to="services" title="Services" href="#services" onClick={ ( e ) => this.handleClick( e ) }>Services</Link>
                    </li>

                    <li className="nav-item" id="nav-about-us">
                        <Link to="about-us" title="About us" onClick={ ( e ) => this.handleClick( e ) } href="#about-us">About us</Link>
                    </li>

                    <li className="nav-item" id="nav-why-us">
                        <Link to="why-us" title="Why us" onClick={ ( e ) => this.handleClick( e ) } href="#why-us">Why us</Link>
                    </li>

                    <li onMouseOver={ this.handleOverEnter } onMouseOut={ this.handleOverLeave } id="nav-gallery" className={ "nav-item nav-item-has-children dropdown-hover " + ( this.state.over ? 'show' : '' ) }>
                        <Link to="gallery" title="Gallery" onClick={ ( e ) => this.handleClick( e ) } href="#gallery">Gallery</Link>

                        <span className="dropdown-toggle dropdown-custom-icon">
                            <span className="dropdown-icon">
                                <i className="fas fa-caret-down"></i>
                            </span>
                        </span>

                        <Fade in={ over } timeout={ 400 }>
                            <ul className="dropdown-menu" style={ { display: "block" } }>
                                <li>
                                    <a className="dropdown-item" title="Truck Logistics" href={ process.env.PUBLIC_URL + '/gallery-inside' }>Truck Logistics</a>
                                </li>

                                <li>
                                    <a className="dropdown-item" title="Ship Logistics" href={ process.env.PUBLIC_URL + '/gallery-inside' }>Ship Logistics</a>
                                </li>

                                <li>
                                    <a className="dropdown-item" title="Storage Logistics" href={ process.env.PUBLIC_URL + '/gallery-inside' }>Storage Logistics</a>
                                </li>

                                <li>
                                    <a className="dropdown-item" title="Plain Logistics" href={ process.env.PUBLIC_URL + '/gallery-inside' }>Plane Logistics</a>
                                </li>
                            </ul>
                        </Fade>
                    </li>

                    <li className="nav-item" id="nav-reviews">
                        <Link to="reviews" title="Reviews" onClick={ ( e ) => this.handleClick( e ) } href="#reviews">Reviews</Link>
                    </li>

                    <li className="nav-item" id="nav-clients">
                        <Link to="clients" title="Clients" onClick={ ( e ) => this.handleClick( e ) } href="#clients">Clients</Link>
                    </li>

                    <li className="nav-item" id="nav-news">
                        <Link to="news" title="News" onClick={ ( e ) => this.handleClick( e ) } href="#news">News</Link>
                    </li>

                    <li className="nav-item" id="nav-contacts">
                        <Link to="contacts" title="Contacts" onClick={ ( e ) => this.handleClick( e ) } href="#contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
        );
    };
};

export default HomeHeaderMenuPrimary;
