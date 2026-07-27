import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.errorCode}>
          404
        </h1>

        <h2 style={styles.title}>
          Page Not Found
        </h2>


        <p style={styles.message}>
          Sorry, the page you are looking for doesn't exist.
        </p>


        <Link
          to="/dashboard"
          style={styles.button}
        >
          Go to Dashboard
        </Link>

      </div>

    </div>
  );
};


const styles = {

  container:{
    minHeight:"80vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"#f4f7fb"
  },


  card:{
    textAlign:"center",
    background:"#fff",
    padding:"40px",
    borderRadius:"15px",
    boxShadow:"0 10px 25px rgba(0,0,0,0.12)"
  },


  errorCode:{
    fontSize:"90px",
    margin:"0",
    color:"#dc3545",
    fontWeight:"800"
  },


  title:{
    fontSize:"28px",
    margin:"10px 0"
  },


  message:{
    color:"#666",
    marginBottom:"25px",
    fontSize:"16px"
  },


  button:{
    display:"inline-block",
    padding:"12px 25px",
    background:"#0d6efd",
    color:"#fff",
    textDecoration:"none",
    borderRadius:"8px",
    fontWeight:"600",
    transition:"0.3s"
  }

};


export default NotFound;