import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";

import Loading from "../blocks/loading/Loading";
import Header from "../blocks/header/Header";
import Footer from "../blocks/footer/Footer";

import PageTitleCommon from "../blocks/page-title/PageTitleCommon";
import AboutUsPrimary from "../blocks/about/AboutUsPrimary";
import AboutUsMedia from "../blocks/about/AboutUsMedia";
import AboutUsSecondary from "../blocks/about/AboutUsSecondary";

const About = () => {
    useEffect( () => {
        document.body.classList.add( 'page' );
        document.body.classList.add( 'header-menu-true' );

        return () => {
            document.body.classList.remove( 'page' );
            document.body.classList.remove( 'header-menu-true' );
        }
    }, [] );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>About us | Erso - Logistics & Transportation React JS Template</title>

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

            <Header logoColor="dark" />

            <main id="main" className="site-main">
                <PageTitleCommon title="About us" />

                <section id="page-content" className="block spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div className="clearfix">
                                <div id="about-us">
                                    <div className="row gutter-width-md">
                                        <AboutUsPrimary />

                                        <AboutUsMedia />
                                    </div>

                                    <AboutUsSecondary />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </Fragment>
    );
};

export default About;
