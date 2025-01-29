
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Allproduct from '../pages/Allproduct';
import SingleProduct from '../pages/SingleProduct';
import Buynow from '../pages/Buynow';
import Verify from '../pages/Verify';

const router = createBrowserRouter([
   {
      path:'/',
      element:<App/>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'allproduct',
            element:<Allproduct/>
        },
        {
            path:`car-detail/:id`,
            element:<SingleProduct/>
        },
        {
            path:`checkout/:id`,
            element:<Buynow/>
        },
        {
            path:'order/verify',
            element:<Verify/>
        }

       
      ]
   }
]);

export default router;
