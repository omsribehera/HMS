/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import { Context } from '../main';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefaults();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/user/login", {
        email, password, confirmPassword, role: "Patient"
      }, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={'/'} />
  }

  return (
    <>
      <div className="container form-component login-form">
        <h2>Sign In</h2>
        <p>Please Login To Continue</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti eum sint cum adipisci? Alias, dignissimos?</p>
        <form onSubmit={handleLogin}>
          <input type='text'
            value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
          <input type='password'
            value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
          <input type='password'
            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' />

          <div style={{ gap: "10px", justifyContent: 'flex-end', flexDirection: 'row' }}>
            <p style={{ marginBottom: "0px" }}>Not Registered?</p>
            <Link to={"/register"} style={{ textDecoration: 'none', alignItems: 'center' }}>Register Now</Link>
          </div>
          <div style={{ justifyContent: 'center', alignItems: 'center' }}>
            <button type='submit'>LogIn</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default Login