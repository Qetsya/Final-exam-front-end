import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar.jsx"
import LogInPage from "./pages/LogInPage/LogInPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { routes } from "./components/routes/routes";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Layout>
        <Routes>
          <Route path={routes.logIn} element={<LogInPage />} />
          <Route path={routes.register} element={<RegisterPage />} />
          {/* <Route path={routes.home} element={<HomeView />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App;
