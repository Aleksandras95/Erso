import React, { Component } from 'react';
import Isotope from 'isotope-layout';

import ServicesContentData from '../../data/services/servicesContentItems.json';

class ServicesContent extends Component {
    componentDidMount() {
        var grid = document.querySelector( '.service-items' );
        var iso  = new Isotope( grid, {
            itemSelector: '.service-item',
            masonry: {
                itemSelector: '.service-item',
                transitionDuration: 0,
                stagger: 0
            }
        } );

        iso.layout()
    };

    render() {
        return (
            <div className="service-items clearfix type-1">
                { ServicesContentData && ServicesContentData.map( ( item, key ) => {
                    return (
                        <a key={ key } title={ item.title } className="service-item" href={ process.env.PUBLIC_URL + item.link }>
                            <div className="service-content">
                                <div className="service-content-sec">
                                    <div className="text">
                                        <h5 className="service-title">{ item.title }</h5>
                                        <p>{ item.description }</p>
                                    </div>

                                    <div className="button no-space">
                                        <p className="p-small bold transform-scale-h">Read more<i className="fas fas-space-l fa-long-arrow-alt-right align-middle"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="img object-fit">
                                <div className="object-fit-cover">
                                    <img src={ item.imgSrc } alt={ item.title } />
                                </div>
                            </div>

                            <div className="img-bg-color"></div>
                        </a>
                    );
                } ) }
            </div>
        );
    };
};

export default ServicesContent;
