import React from "react";

import ButtonSearch from "../../components/button/ButtonSearch";

const SearchForm = () => {
    return (
        <form className="search-form" role="search" method="get" action={ process.env.PUBLIC_URL + '/search-results' }>
            <div className="search input-group">
                <input className="form-control form-control-lg" type="text" placeholder="Type something to search" name="s" />

                <div className="input-group-append">
                    <ButtonSearch/>
                </div>
            </div>
        </form>
    );
};

export default SearchForm;
