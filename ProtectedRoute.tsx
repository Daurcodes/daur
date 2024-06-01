import * as React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

interface ProtectedRouteProps {
    component: React.ComponentType<any>;
    [key: string]: any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
    const token = useAppSelector((state) => state.user.token);
    const location = useLocation();

    return token ? (
        <Component {...rest} />
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};

export default ProtectedRoute;
