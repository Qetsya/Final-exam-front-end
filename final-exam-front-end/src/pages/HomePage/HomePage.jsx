import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  console.log(`HOME isAuthenticated`, isAuthenticated)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, []);

  return <div>HOME PAGE</div>;
};

export default HomePage;
