import {
  createBrowserRouter, 
  Routes,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import { useState } from "react";
import "./App.css";
import "./Styles/styles.css";
import RootLayout from './Layouts/RootLayout';
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route  exact path="" element={<RootLayout />}>
      <Route index element={<Dashboard />}>
      </Route>
    </Route>
  )


)

function App() {
  const percentage = 500;
  return (
   <RouterProvider router={router}/>
  );
}

export default App;

