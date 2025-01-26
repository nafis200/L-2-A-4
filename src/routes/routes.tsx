
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';

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
        }
      ]
   }
]);

export default router;
