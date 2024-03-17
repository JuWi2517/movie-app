import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from './auth';

function PrivateRoute({ children }) {
    let location = useLocation();

    return (
        isAuthenticated() ? children : <Navigate to="/" state={{ from: location }} />
    );
}

export default PrivateRoute;