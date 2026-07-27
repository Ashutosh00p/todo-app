import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {

  const { token, loading } = useContext(AuthContext);

  const location = useLocation();



  if (loading) {

    return (

      <div style={styles.loaderContainer}>

        <div style={styles.loaderCard}>

          <div style={styles.spinner}></div>

          <h3>
            Checking Authentication...
          </h3>

          <p>
            Please wait
          </p>

        </div>

      </div>

    );

  }



  if (!token) {

    return (

      <Navigate

        to="/login"

        replace

        state={{ from: location }}

      />

    );

  }



  return children;

};



const styles = {


loaderContainer:{

  height:"100vh",

  display:"flex",

  justifyContent:"center",

  alignItems:"center",

  background:"#f4f7fb"

},



loaderCard:{

  background:"#fff",

  padding:"35px",

  borderRadius:"15px",

  textAlign:"center",

  boxShadow:
    "0 10px 25px rgba(0,0,0,0.12)"

},



spinner:{

  width:"40px",

  height:"40px",

  border:"4px solid #ddd",

  borderTop:"4px solid #0d6efd",

  borderRadius:"50%",

  margin:"0 auto 20px"

}


};



export default ProtectedRoute;