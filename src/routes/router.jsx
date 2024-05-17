import Root from '../layout/Root'
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from '../pages/Home';
import OurMenu from '../pages/OurMenu';

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
                }
            ]
        }
  ])

  export default router