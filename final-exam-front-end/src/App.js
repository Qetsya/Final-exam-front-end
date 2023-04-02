import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar.jsx";
import LogInPage from "./pages/LogInPage/LogInPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import { routes } from "./components/routes/routes";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const authenticate = () => {
    setIsAuthenticated(true);
    navigate("/home");
  };
  return (
    <div>
      <Navbar />
      <Layout>
        <Routes>
          <Route
            path={routes.logIn}
            element={
              <LogInPage
                authenticate={authenticate}
              />
            }
          />
          <Route path={routes.register} element={<RegisterPage />} />
          <Route path={routes.home} element={<HomePage isAuthenticated={isAuthenticated}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
