import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Profil from './Components/Profil.jsx';
import App_lock from './App_lock.jsx';
import Posts from './Components/Posts.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App_lock />,
    children: [
      {
        path: "/",
        element: <Home />
      }, 
      {
        path: "/Home",
        element: <Home />
      },
      {
        path: "/profil",
        element: <Profil />,
        children: [
          {
            path: "",
            element: <Posts />
          },
          {
            path: "posts",
            element: <Posts />
          }
        ]
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
