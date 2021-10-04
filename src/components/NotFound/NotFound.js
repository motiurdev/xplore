import React from 'react';
import notFoundImage from '../../image/not_found.svg'

const NotFound = () => {
    return (
        <div className="container py-5">
            {/* not found page */}
            <div className="mx-auto">
                <img src={notFoundImage} alt="" width="600" className="d-block mx-auto" />
                <h1 className="py-3 text-center header-title">Page not found-404</h1>
            </div>
        </div>
    );
};

export default NotFound;