import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Photographers from './pages/Photographers/Photographers.jsx';
import Sellers from './pages/sellers/Sellers.jsx';
import Renters from './pages/Renters/Renters.jsx';
import Wedding from './pages/categories/wedding/Wedding.jsx';
import Graduation from "./pages/categories/graduation/Graduation.jsx";
import Events from './pages/categories/activities/Events.jsx';
import Musicevents from './pages/categories/musicevent/Musicevents.jsx';
import Videography from './pages/categories/videography/Videography.jsx';
import Products from './pages/categories/product/Products.jsx';
import Portfolio from './Components/portfolio/Portfolio.jsx';
import Portrait from './pages/categories/portrait/Portrait.jsx';
import Signin from './pages/signin/Signin.jsx';
import Login from './pages/login/Login.jsx';
import Dashboard from './pages/seller_side/dashboard/Dashboard.jsx';
import Order from './pages/seller_side/order/Order.jsx';
import Notice from './pages/seller_side/notice/Notice.jsx';
import Earning from './pages/seller_side/earning/Earning.jsx';
import About from './pages/about/About.jsx';
import Message from './pages/message/Message.jsx';
import Payment from './pages/payment/Payment.jsx';
import AboutUs from './Components/aboutus/AboutUs.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
  },
  {
    path:"/photographer",
    element: <Photographers />,
  },
  {
    path:"/sellers",
    element: <Sellers />,
  },
  {
    path:"/renters",
    element: <Renters />,
  },

  {
    path:"/wedding",
    element: <Wedding />,
  },
  {
    path:"/graduation",
    element: <Graduation />,
  },
  {
    path:"/events",
    element: <Events />,
  },
  {
    path:"/musicevents",
    element: <Musicevents />,
  },
  {
    path:"/portrait",
    element: <Portrait/>,
  },
  {
    path:"/videography",
    element: <Videography />,
  },
  {
    path:"/product",
    element: <Products />,
  },
  {
    path:"/portfolio",
    element: <Portfolio />,
  },

  {
    path:"/seller",
    element: <Sellers />,
  },
  {
    path:"/renter",
    element: <Renters />,
  },
  {
    path:"/signin",
    element: <Signin />,
  },
  {
    path:"/login",
    element: <Login />,
  },
  {
    path:"/dashboard",
    element: <Dashboard />,
  },
  {
    path:"/order",
    element: <Order />,
  },
  {
    path:"/notice",
    element: <Notice />,
  },
  {
    path:"/earning",
    element: <Earning />,
  },
  {
    path:"/about",
    element: <About />,
  },
  {
    path:"/aboutus",
    element: <AboutUs />,
  },
  {
    path:"/message",
    element: <Message />,
  },
  
  {
    path:"/payments",
    element: <Payment />,
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
