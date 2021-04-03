import React from 'react';

const LanguageSelector = ( props ) => {
    return (
        <li className={ `lang-item ${ props.className }` }>
            <a title={ props.title } href={ process.env.PUBLIC_URL + '/' }>
                { props.title }
            </a>
        </li>
    );
};

export default LanguageSelector;
