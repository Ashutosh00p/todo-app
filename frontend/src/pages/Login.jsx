import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const handleChange = (e) => {
    setError("");

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!formData.email || !formData.password) {
      return setError("Please fill all fields.");
    }


    try {

      setLoading(true);


      const res = await loginUser(formData);


      login(
        res.data.user,
        res.data.token
      );


      navigate("/dashboard");


    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Login failed"
      );

    } finally {

      setLoading(false);

    }
  };


  return (

    <div style={styles.container}>

      <div style={styles.card}>


        <h2 style={styles.title}>
          Welcome Back
        </h2>


        <p style={styles.subtitle}>
          Login to manage your tasks
        </p>



        {error && (

          <div style={styles.error}>
            {error}
          </div>

        )}



        <form onSubmit={handleSubmit}>


          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />



          <input
            style={styles.input}
            type={
              showPassword
                ? "text"
                : "password"
            }
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />



          <label style={styles.checkbox}>

            <input
              type="checkbox"
              checked={showPassword}
              onChange={() =>
                setShowPassword(!showPassword)
              }
            />

            <span>
              Show Password
            </span>

          </label>



          <button
            type="submit"
            disabled={loading}
            style={{
              ...styles.button,
              opacity: loading ? 0.7 : 1,
              cursor: loading
                ? "not-allowed"
                : "pointer",
            }}
          >

            {
              loading
                ? "Logging in..."
                : "Login"
            }

          </button>


        </form>



        <p style={styles.bottomText}>

          Don't have an account?

          <Link
            to="/register"
            style={styles.link}
          >
            {" "}Register
          </Link>

        </p>


      </div>

    </div>

  );
};



const styles = {


  container:{
    minHeight:"90vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background:"#f4f7fb"
  },


  card:{
    width:"400px",
    background:"#ffffff",
    padding:"35px",
    borderRadius:"15px",
    boxShadow:"0 10px 25px rgba(0,0,0,0.12)"
  },


  title:{
    textAlign:"center",
    color:"#0d6efd",
    marginBottom:"8px"
  },


  subtitle:{
    textAlign:"center",
    color:"#666",
    marginBottom:"25px"
  },


  input:{
    width:"100%",
    padding:"12px",
    marginBottom:"15px",
    border:"1px solid #ddd",
    borderRadius:"8px",
    fontSize:"15px",
    boxSizing:"border-box"
  },


  checkbox:{
    display:"flex",
    alignItems:"center",
    gap:"8px",
    marginBottom:"20px",
    cursor:"pointer"
  },


  button:{
    width:"100%",
    padding:"12px",
    background:"#0d6efd",
    color:"#fff",
    border:"none",
    borderRadius:"8px",
    fontSize:"16px",
    fontWeight:"600"
  },


  error:{
    background:"#ffe5e5",
    color:"#dc3545",
    padding:"10px",
    borderRadius:"8px",
    textAlign:"center",
    marginBottom:"15px"
  },


  bottomText:{
    textAlign:"center",
    marginTop:"20px"
  },


  link:{
    color:"#0d6efd",
    textDecoration:"none",
    fontWeight:"600"
  }

};


export default Login;