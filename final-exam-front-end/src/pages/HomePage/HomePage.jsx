import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { getUser } from "../../services/getUser";
import { routes } from "../../components/routes/routes";
import UserDetails from "./components/UserDetails";

import { AiOutlineHourglass } from "react-icons/ai";
import styles from "../../components/form.module.css";

const HomePage = ({ isAuthenticated, logoutUser }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(routes.login, { replace: true });
    } else {
      handleLoad();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoad = async () => {
    setLoading(true);
    const user = await getUser(isAuthenticated);
    setUser(user);
    setLoading(false);
  };

  const logout = () => {
    logoutUser();
  };

  if (loading) {
    return (
      <div className={styles.root}>
        <AiOutlineHourglass className={styles.home_loading} />
      </div>
    );
  }

  return <UserDetails user={user} onLogout={logout} />;
};

export default HomePage;
