import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Countries from './components/Countries/Countries';
import Contact from './components/Contact/Contact';
import Country from './components/Countries/Country/Country';
import CountryDetails from './components/Countries/CountryDetails/CountryDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Countries></Countries>,
      },
      {
        path:'/country',
        element:<Country></Country>,
      },
      {
        path:'/country/:id',
        element:<CountryDetails></CountryDetails>,
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
