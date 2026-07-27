import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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


    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match.");
    }


    try {
      setLoading(true);

      await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });


      alert("Registration successful. Please login.");

      navigate("/login");


    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Registration failed"
      );

    } finally {

      setLoading(false);

    }
  };


  return (

    <div style={styles.container}>

      <div style={styles.card}>

        <h2 style={styles.title}>
          Create Account
        </h2>


        <p style={styles.subtitle}>
          Register to manage your tasks
        </p>


        {error && (
          <div style={styles.error}>
            {error}
          </div>
        )}



        <form onSubmit={handleSubmit}>


          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />



          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />



          <input
            style={styles.input}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />



          <input
            style={styles.input}
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
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
            style={styles.button}
            type="submit"
            disabled={loading}
          >

            {loading ? "Registering..." : "Register"}

          </button>


        </form>



        <p style={styles.bottomText}>

          Already have an account?

          <Link
            to="/login"
            style={styles.link}
          >
            {" "}Login
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
    background:"#fff",
    padding:"35px",
    borderRadius:"15px",
    boxShadow:"0 10px 25px rgba(0,0,0,0.12)"
  },


  title:{
    textAlign:"center",
    marginBottom:"8px",
    color:"#0d6efd"
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
    gap:"8px",
    alignItems:"center",
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
    fontWeight:"600",
    cursor:"pointer"
  },


  error:{
    background:"#ffe5e5",
    color:"#dc3545",
    padding:"10px",
    borderRadius:"8px",
    marginBottom:"15px",
    textAlign:"center"
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


export default Register;