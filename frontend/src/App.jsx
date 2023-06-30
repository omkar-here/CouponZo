import {
  createBrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import RootLayout from "./Layouts/RootLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoutes from "./Components/ProtectedRoute";
import { useState } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Route>
     
    </>
  )
);

function App() {
  const percentage = 500;
  const [auth,setAuth]=useState();
  return <RouterProvider router={router} />;
}

export default App;
