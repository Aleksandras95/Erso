import React from 'react';

const AboutUsPrimary = () => {
    return (
        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 align-self-center">
            <div className="title">
                <h2>
                    <a title="About us" className="transform-scale-h" href={ `${ process.env.PUBLIC_URL + "/about-us" }` }>
                        About us<i className="fas fas-space-l fa-long-arrow-alt-right align-top"></i>
                    </a>
                </h2>
            </div>

            <div className="text">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
            </div>

            <div className="list-group list-group-horizontal spacer m-top-lg m-bottom-lg-media-xl style-default">
                <div className="list-group-item">
                    <h4 className="text-secondary">03</h4>
                    <p>Countries</p>
                </div>

                <div className="list-group-item">
                    <h4 className="text-secondary">25</h4>
                    <p>Offices</p>
                </div>

                <div className="list-group-item">
                    <h4 className="text-secondary">154</h4>
                    <p>Employees</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPrimary;
