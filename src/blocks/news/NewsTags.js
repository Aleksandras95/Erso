import React from 'react';

const NewsTags = () => {
    return (
        <div className="tags">
            <p>
                <span className="tags-title">Tags:</span>
                <a title="Art" href={ process.env.PUBLIC_URL + '/news' }>Logistic</a>
                <a title="Culture" href={ process.env.PUBLIC_URL + '/news' }>Transportation</a>
                <a title="Capital" href={ process.env.PUBLIC_URL + '/news' }>Storage</a>
            </p>
        </div>
    );
};

export default NewsTags;
