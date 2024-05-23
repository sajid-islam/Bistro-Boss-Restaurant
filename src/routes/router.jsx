import Root from '../layout/Root'
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from '../pages/Home';
import OurMenu from '../pages/OurMenu';
import OurShop from '../pages/OurShop';
import Login from '../pages/Login';

  const router = createBrowserRouter([
        {
            path:'/',
            element:<Root/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/our-menu',
                    element:<OurMenu/>
                },
                {
                    path:'/our-shop/:categoryId',
                    element:<OurShop/>
                },
                {
                    path:'/login',
                    element:<Login/>
                }
            ]
        }
  ])

  export default router