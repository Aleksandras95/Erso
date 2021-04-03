import React from 'react';

import HeaderLogo from '../../blocks/logo/HeaderLogo';
import MenuModal from '../../components/modal/MenuModal';
import HomeHeaderMenuPrimary from './HomeHeaderMenuPrimary';
import HeaderShortCodeModal from '../../components/modal/HeaderShortCodeModal';
import SearchModal from '../../components/modal/SearchModal';

const HomeHeader = ({ logoColor }) => {
    return (
        <header id="header" className="site-header">
            <div className="wrapper d-flex justify-content-between">
                <div className="header-left align-self-center">
                    <HeaderLogo logoColor={ logoColor } />
                </div>

                <div className="header-center align-self-center">
                    <div className="menu d-flex justify-content-center">
                        <HomeHeaderMenuPrimary />
                    </div>
                </div>

                <div className="header-right d-flex justify-content-end">
                    <div className="search-toggle align-self-center">
                        <SearchModal />
                    </div>

                    <div className="actions align-self-center">
                        <div className="d-flex">
                            <div className="action align-self-center">
                                <HeaderShortCodeModal />
                            </div>
                        </div>
                    </div>

                    <MenuModal />
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;
