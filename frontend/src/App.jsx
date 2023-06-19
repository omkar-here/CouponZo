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
import Register from "./pages/Register";

const router = createBrowserRouter(
  createRoutesFromElements(<>
    <Route exact path="/" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
    </Route>
  </>
    


  )
);

function App() {
  const percentage = 500;
  return <RouterProvider router={router} />;
}

export default App;
