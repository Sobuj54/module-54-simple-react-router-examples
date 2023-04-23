import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About/About.jsx';
import Contact from './component/Contact/Contact.jsx';
import ErrorPage from './component/Error/ErrorPage.jsx';
import Home from './component/Home/Home.jsx';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <App></App>,
//     errorElement: <ErrorPage></ErrorPage>
//   },
//   {
//     path: '/about',
//     element: <About></About>,
//     errorElement: <ErrorPage></ErrorPage>
//   },
//   {
//     path: '/contact',
//     element : <Contact></Contact>,
//     errorElement: <ErrorPage></ErrorPage>
//   }
// ])

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path: '/about',
        element: <About></About>
      },
      {
        path : '/contact',
        element: <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
