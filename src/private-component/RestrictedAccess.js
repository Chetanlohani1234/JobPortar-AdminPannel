// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import AuthService from "../services/auth.service"

// export const RestrictedAccess = () => {
//     const auth = AuthService.getCurrentUser();
//     return auth ? <Outlet/>:<Navigate to="/login"/>
// }

import React, { useEffect, useState } from 'react';
import AuthService from "../services/auth.service";

const RestrictedAccess = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = AuthService.getCurrentUser();
        if (!auth) {
            window.location.href = "#/login";
        } else {
            setIsAuthenticated(true);
        }
    }, []);

    return isAuthenticated ? <>{children}</> : null;
};

export default RestrictedAccess;

