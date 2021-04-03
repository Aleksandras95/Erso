import React, { Fragment, Component } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import HomeHeader from '../blocks/header/HomeHeader';
import Footer from '../blocks/footer/Footer';

import PageTitleHome from '../blocks/page-title/PageTitleHome';
import ServicesContent from '../blocks/services/ServicesContent';
import AboutUsPrimary from '../blocks/about/AboutUsPrimary';
import AboutUsMedia from '../blocks/about/AboutUsMedia';
import WhyUsContent from '../blocks/why-us/WhyUsContent';
import GalleryContent from '../blocks/gallery/GalleryContent';
import ReviewsContent from '../blocks/reviews/ReviewsContent';
import ClientsList from '../blocks/clients/ClientsList';
import NewsHome from '../blocks/news/NewsHome';
import ContactsContent from '../blocks/contacts/ContactsContent';

class Home extends Component {
    constructor() {
        super();
        this.state = { isFixed: false };
    };

    changeLogo = () => {
        if ( this._isMounted ) {
                window.addEventListener( 'scroll', () => {
            if ( document.body.classList.contains( 'header-fixed' ) ) {
                this.setState( {
                    isFixed: true
                } );
            } else {
                this.setState( {
                    isFixed: false
                } );
            }
        } );
        }
    
    };

    componentDidMount = () => {
        document.body.classList.add( 'home' );
        document.body.classList.add( 'header-menu-true' );
        document.body.classList.add( 'header-absolute-true' );
        document.body.classList.add( 'header-fixed-true' );
        document.body.classList.add( 'button-clicked-true' );

        this.changeLogo();

        const header = document.getElementById( 'header' );
        const services = document.getElementById( 'services' );
        const that = this;

        window.addEventListener(
            "scroll",
            function( event ) {
                if ( that.isInViewport( services ) ) {
                    document.body.classList.add( 'header-fixed' );
                    header.classList.add( 'animated' );
                    header.classList.add( 'slideInDown' );
                } else {
                    document.body.classList.remove( 'header-fixed' );
                    header.classList.remove( 'animated' );
                    header.classList.remove( 'slideInDown' );
                }
            },
            false
        );
    };

    componentWillUnmount = () => {
        document.body.classList.remove( 'home' );
        document.body.classList.remove( 'header-menu-true' );
        document.body.classList.remove( 'header-absolute-true' );
        document.body.classList.remove( 'header-fixed-true' );
        document.body.classList.remove( 'button-clicked-true' );
    };

    isInViewport = ( services ) => {
        let bounding = services.getBoundingClientRect();

        if ( window.screenTop - bounding.top > -20 ) {
            return true;
        }
    };

    render() {
        return (
            <Fragment>
                <MetaTags>
                    <meta charSet="UTF-8" />
                    <title>Home | Erso - Logistics & Transportation React JS Template</title>

                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
                    <meta name="robots" content="index, follow, noodp" />
                    <meta name="googlebot" content="index, follow" />
                    <meta name="google" content="notranslate" />
                    <meta name="format-detection" content="telephone=no" />
                </MetaTags>

                <Loading />

                <HomeHeader logoColor={ this.state.isFixed ? 'dark' : 'light' } />

                <main id="main" className="site-main">
                    <PageTitleHome />

                    <section id="services" className="block spacer p-top-xl">
                        <div className="wrapper">
                            <div className="title">
                                <h2>
                                    <a title="Services" className="transform-scale-h" href={ process.env.PUBLIC_URL + '/services' }>Services<i className="fas fas-space-l fa-long-arrow-alt-right align-top"></i></a>
                                </h2>
                            </div>

                            <ServicesContent />
                        </div>
                    </section>

                    <section id="about-us" className="block spacer p-top-xl">
                        <div className="wrapper">
                            <div className="row gutter-width-md">
                                <AboutUsPrimary />

                                <AboutUsMedia />
                            </div>
                        </div>
                    </section>

                    <section id="why-us" className="block spacer p-top-xl">
                        <div className="bg-light spacer p-top-lg p-bottom-lg">
                            <div className="wrapper">
                                <div className="title">
                                    <h2>
                                        <a title="Why us" className="transform-scale-h" href={ process.env.PUBLIC_URL + '/why-us' }>Why us<i className="fas fas-space-l fa-long-arrow-alt-right align-top"></i></a>
                                    </h2>
                                </div>
                            </div>

                            <WhyUsContent />
                        </div>
                    </section>

                    <section id="gallery" className="block spacer p-top-xl">
                        <div className="wrapper">
                            <div className="title">
                                <h2>
                                    <a title="Gallery" className="transform-scale-h" href={ process.env.PUBLIC_URL + '/gallery' }>Gallery<i className="fas fas-space-l fa-long-arrow-alt-right align-top"></i></a>
                                </h2>
                            </div>
                        </div>

                        <GalleryContent />
                    </section>

                    <section id="reviews" className="block spacer p-top-xl">
                        <div className="wrapper">
                            <div className="title">
                                <h2>
                                    <a title="Customer reviews" className="transform-scale-h" href={ process.env.PUBLIC_URL + '/reviews' }>Customer reviews<i className="fas fas-space-l fa-long-arrow-alt-right align-top"></i></a>
                                </h2>
                            </div>

                            <ReviewsContent />
                        </div>
                    </section>

                    <section id="clients" className="block spacer p-top-xl">
                        <div className="wrapper">
                            <div className="title">
                                <h2>
                                    <a title="Our clients" className="transform-scale-h" href={ process.env.PUBLIC_URL + '/clients' }>Our clients<i className="fas fas-space-l fa-long-arrow-alt-right align-top"></i></a>
                                </h2>
                            </div>

                            <ClientsList />
                        </div>
                    </section>

                    <section id="news" className="block spacer p-top-xl">
                        <div className="wrapper">
                            <div className="title">
                                <h2>
                                    <a title="Current news" className="transform-scale-h" href={ process.env.PUBLIC_URL + '/news' }>Current news<i className="fas fas-space-l fa-long-arrow-alt-right align-top"></i></a>
                                </h2>
                            </div>

                            <NewsHome />
                        </div>
                    </section>

                    <section id="contacts" className="block spacer p-top-xl">
                        <div className="wrapper">
                            <div className="title">
                                <h2>
                                    <a title="Contacts" className="transform-scale-h" href={ process.env.PUBLIC_URL + '/contacts' }>Contacts<i className="fas fas-space-l fa-long-arrow-alt-right align-top"></i></a>
                                </h2>
                            </div>
                        </div>

                        <ContactsContent />
                    </section>
                </main>

                <Footer />
            </Fragment>
        );
    };
};

export default Home;
