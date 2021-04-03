import React, { Component } from 'react';

import LanguageSelector from '../../components/button/LanguageSelector';

class PageTitleHome extends Component {
    constructor() {
        super();
        this.state = {
            lang: 'En',
        };

        this.onChangeValue = this.onChangeValue.bind( this );
    };

    onChangeValue( event ) {
        this.setState( {
            lang: event.target.title,
        } );
    };

    render() {
        return (
            <section id="page-title" className="block" style={ { backgroundImage: `url( ${ require( '../../assets/img/demo/01_img.jpg' ) } )` } }>
                <div className="wrapper h-100">
                    <div className="d-flex justify-content-between position-relative h-100">
                        <div className="align-self-center">
                            <div className="title">
                                <h1>Welcome to Erso <br/>Logistics Company</h1>
                            </div>

                            <p className="spacer p-top-lg mb-0">Global logistics and transportation services via sea, land and air.<br/>We will protect you from risk and guarantee liability.</p>
                        </div>

                        <div className="lang-position">
                            <nav className="languages">
                                <ul className="nav" onClick={ this.onChangeValue }>
                                    <LanguageSelector title="En" className={ this.state.lang === 'En' ? 'current-lang' : '' } />
                                    <LanguageSelector title="Ru" className={ this.state.lang === 'Ru' ? 'current-lang' : '' } />
                                    <LanguageSelector title="Lt" className={ this.state.lang === 'Lt' ? 'current-lang' : '' } />
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="page-title-bg-color"></div>
            </section>
        );
    };
};

export default PageTitleHome;
