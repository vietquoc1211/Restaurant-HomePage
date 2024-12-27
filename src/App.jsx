
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Signin from './Components/Signin/Signin';
import Signup from './Components/SignUp/Signup';
import Contact from './Components/Contact/Contact';
import Order from './Components/Order/Order';
import CheckOut from './Components/CheckOut/Checkout';
import LikeOrder from './Components/LikeOrder/LikeOrder';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectRouter/ProtectRouter';

let Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,children: [
      { path: "", element: <Home/> }, 
      { path: "home", element: <Home /> },
      { path: "menu", element: <Menu /> },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "contact", element: (<ProtectedRoute><Contact/></ProtectedRoute>) },
      { path: "order", element: (<ProtectedRoute><Order/></ProtectedRoute>) },
      { path: "checkout", element: (<ProtectedRoute><CheckOut/></ProtectedRoute>) },
      { path: "likeorder", element: (<ProtectedRoute><LikeOrder/></ProtectedRoute>) },
    ]
  },
]);

export default function App() {
  return <RouterProvider router={Routes} />;
}

