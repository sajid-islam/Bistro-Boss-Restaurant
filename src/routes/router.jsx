import Root from '../layout/Root'
import {
    createBrowserRouter
} from "react-router-dom";
import Home from '../pages/Home';
import OurMenu from '../pages/OurMenu';
import OurShop from '../pages/OurShop';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart'
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard/Dashboard';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/our-menu',
                element: <OurMenu />
            },
            {
                path: '/our-shop/:categoryId',
                element: <OurShop />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'cart',
                element: <PrivateRoute><Cart /></PrivateRoute>
            }
        ]
    }
])

export default router