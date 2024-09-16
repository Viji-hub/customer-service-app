import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './components/ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Services from './components/Services';
import RequestList from './components/RequestList';
import Login from './components/Login';
import Body from './components/Body';
import Contact from './components/Contact';
import Locate from './components/Locate';
import User from './components/User';
import ProtectedRoutes from './components/ProtectedRoutes';

const routerConfig = createBrowserRouter([
  {
    path : '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path : '/',
        element: <Body/>
      },
      {
        path : '/contact',
        element: <Contact/>
      },
      {
        path : '/locate',
        element: <Locate/>
      },
      {
        element: <ProtectedRoutes/>,
        children: [
          {
            path : '/services',
            element: <Services/>
          },
          {
            path : '/requests',
            element: <RequestList/>
          }
        ]
      },
      {
        path : '/login',
        element: <Login/>,
        children: [
          {
            path : 'user',
            element: <User/>
          }
        ]
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routerConfig}/>
);

