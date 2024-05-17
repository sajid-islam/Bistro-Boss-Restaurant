import Root from '../layout/Root'
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from '../pages/Home';

  const router = createBrowserRouter([
        {
            path:'/',
            element:<Root/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                }
            ]
        }
  ])

  export default router