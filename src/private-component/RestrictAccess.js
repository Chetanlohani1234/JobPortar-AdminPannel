// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import AuthService from "../services/auth.service";

// export const RestrictAccess = () => {
//     const auth = AuthService.getCurrentUser()
//     return auth ? <Outlet/>:<Navigate to="/login"/>
// }

import React, { useEffect } from 'react';
import AuthService from "../services/auth.service";

const RestrictAccess = ({ children }) => {
    useEffect(() => {
        const auth = AuthService.getCurrentUser();
        if (!auth) {
            window.location.href = "/login";
        }
    }, []);

    return auth ? <>{children}</> : null;
};

export default RestrictAccess;
