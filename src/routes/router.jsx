import Root from '../layout/Root'
import {
    createBrowserRouter
} from "react-router-dom";
import Home from '../pages/Home';
import OurMenu from '../pages/OurMenu';
import OurShop from '../pages/OurShop';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Dashboard/Cart'
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard/Dashboard';
import AllUsers from '../pages/Dashboard/AllUsers';
import AdminRoute from './AdminRoute';
import AddItem from '../pages/Dashboard/AddItem';
import ManageItem from '../pages/Dashboard/ManageItem';
import UpdateItem from '../pages/Dashboard/UpdateItem';
import Payment from '../pages/Dashboard/Payment';
import PaymentHistory from '../pages/Dashboard/PaymentHistory';
import UserHome from '../pages/Dashboard/UserHome';
import AdminHome from '../pages/Dashboard/AdminHome';

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
                path: '/ourMenu',
                element: <OurMenu />
            },
            {
                path: '/ourShop/:categoryId',
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
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            //normal user route
            {
                path: 'cart',
                element: <PrivateRoute><Cart /></PrivateRoute>
            },
            {
                path:'payment',
                element:<Payment/>
            },
            {
                path:'paymentHistory',
                element:<PaymentHistory/>
            },
            {
                path:'userHome',
                element:<UserHome/>
            },

            //admin route
            {
                path:'allUsers',
                element:<AdminRoute><AllUsers/></AdminRoute>
            },
            {
                path:'addItem',
                element:<AdminRoute><AddItem/></AdminRoute>
            },
            {
                path:'manageItems',
                element:<AdminRoute><ManageItem/></AdminRoute>
            },
            {
                path:'updateItem/:id',
                element:<AdminRoute><UpdateItem/></AdminRoute>
            },
            {
                path:'adminHome',
                element:<AdminRoute><AdminHome/></AdminRoute>
            }
        ]
    }
])

export default router