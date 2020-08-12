import React, { Fragment } from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <Fragment>
            <div className="pa2">
                <input
                    className="pa3 ba o-50"
                    type='search'
                    placeholder='search names'
                    onChange={searchChange}
                />
            </div>
        </Fragment>
    );
}
export default SearchBox;