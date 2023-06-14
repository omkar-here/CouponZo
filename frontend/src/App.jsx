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
import Landing from "./pages/Landing";

import "./App.css";
import "./Styles/styles.css";
import RootLayout from "./Layouts/RootLayout";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
  { path: "/land", element: <Landing /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  const percentage = 500;
  return <RouterProvider router={router} />;
}

export default App;
