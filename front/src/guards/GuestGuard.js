import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
// hooks
import useAuth from '../hooks/useAuth';
// routes
import { PATH_ADMIN, PATH_AUTH } from '../routes/paths';

// ----------------------------------------------------------------------

GuestGuard.propTypes = {
    children: PropTypes.node
};

const useCurrentRole = () => {
    const { user } = useAuth();
    const role = user?.role;
    return role;
};

export default function GuestGuard({ children }) {
    const { isAuthenticated } = useAuth();
    const currentRole = useCurrentRole();

    if (isAuthenticated) {
        if (currentRole === 'admin') {
            return <Navigate to={PATH_ADMIN.dashboard} />;
        }
        return <Navigate to={PATH_AUTH} />;
    }

    return <>{children}</>;
}
