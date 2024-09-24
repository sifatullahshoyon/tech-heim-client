import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import LoadingSpinner from '../Components/Shared/LoadingSpiner/LoadingSpinner';

const PrivateRoute = () => {
    const { user } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <div><LoadingSpinner></LoadingSpinner></div>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={{ from: location }} replace />

};

export default PrivateRoute;