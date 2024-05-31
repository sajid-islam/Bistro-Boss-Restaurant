import PropTypes from 'prop-types'
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <div className='h-screen w-full flex justify-center items-center'>
            <span className="loading loading-spinner text-warning"></span>
        </div>
    }
    if(user){
        return children;
    }

    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
}