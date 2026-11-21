import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from './pages/Dashboard.jsx';
import Payments from './pages/Payments.jsx';
import Students from './pages/Students.jsx';
import Rooms from "./pages/Rooms.jsx";
import Complaints from "./pages/Complaints.jsx";
import Settings from "./pages/Settings.jsx";
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Dashboard/>
      },
      {
        path:"/students",
        element:<Students/>
      },
      {
        path:"/rooms",
        element:<Rooms/>
      },
      {
        path:"/payments",
        element:<Payments/>
      },
      {
        path:"/complaints",
        element:<Complaints/>
      },
      {
        path:"/settings",
        element:<Settings/>
      }
     
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  <StrictMode>
    <App />
  </StrictMode>
  </RouterProvider>,
)
