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
  const [authenticatedUserId, setAuthenticatedUserId] = useState(null);
  const navigate = useNavigate();

  const authenticate = (userId) => {
    setAuthenticatedUserId(userId);
    navigate(routes.home);
  };

  const logoutUser = () => {
    setAuthenticatedUserId(null);
  }

  return (
    <div>
      <Navbar isAuthenticated={authenticatedUserId} />
      <Layout>
        <Routes>
          <Route
            path={routes.login}
            element={
              <LogInPage
                authenticate={authenticate}
              />
            }
          />
          <Route path={routes.register} element={<RegisterPage />} />
          <Route index path={routes.home} element={<HomePage isAuthenticated={authenticatedUserId} logoutUser={logoutUser} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
