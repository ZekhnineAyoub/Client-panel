import React from 'react';
import './PageNotFound.css'

import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <h1 className="center">Page Not Found 404</h1>
            <Link  to='/'> back to home</Link>
        </div>
    );
};

export default PageNotFound;