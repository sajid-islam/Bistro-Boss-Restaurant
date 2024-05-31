import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types'

const AdminRoute = ({children}) => {
    const {user,loading}=useAuth()
    const{ isAdmin ,isPending}=useAdmin()
    const location = useLocation()

    if (loading  || isPending) {
        return <div className='h-screen w-full flex justify-center items-center'>
            <span className="loading loading-spinner text-warning"></span>
        </div>
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default AdminRoute;
AdminRoute.propTypes = {
    children: PropTypes.node
}