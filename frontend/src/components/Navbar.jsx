import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>

      <Link
        to={token ? "/dashboard" : "/"}
        style={styles.logo}
      >
        Todo App
      </Link>


      <div style={styles.menu}>

        {token ? (
          <>
            <NavLink
              to="/dashboard"
              style={styles.link}
            >
              Dashboard
            </NavLink>


            <NavLink
              to="/tasks"
              style={styles.link}
            >
              Tasks
            </NavLink>


            <span style={styles.welcome}>
              Welcome, {user?.name || "User"}
            </span>


            <button
              onClick={handleLogout}
              style={styles.logout}
            >
              Logout
            </button>

          </>
        ) : (
          <>
            <NavLink
              to="/login"
              style={styles.link}
            >
              Login
            </NavLink>


            <NavLink
              to="/register"
              style={styles.link}
            >
              Register
            </NavLink>
          </>
        )}

      </div>

    </nav>
  );
};


const styles = {

  navbar:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"15px 40px",
    background:"#0d6efd",
    color:"#fff",
    boxShadow:"0 3px 10px rgba(0,0,0,0.2)"
  },


  logo:{
    color:"#fff",
    textDecoration:"none",
    fontSize:"26px",
    fontWeight:"bold"
  },


  menu:{
    display:"flex",
    alignItems:"center",
    gap:"20px"
  },


  link:{
    color:"#fff",
    textDecoration:"none",
    fontSize:"16px"
  },


  welcome:{
    color:"#fff"
  },


  logout:{
    background:"#dc3545",
    color:"#fff",
    border:"none",
    padding:"8px 16px",
    borderRadius:"6px",
    cursor:"pointer"
  }

};


export default Navbar;