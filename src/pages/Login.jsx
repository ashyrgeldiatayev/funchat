import React from 'react'
import '../style.scss'
import Add from "../img/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">Funchat</span>
      <span className="title">Login</span>
      <form>
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button>Sign in</button>
        {/* {loading && "Uploading and compressing the image please wait..."} */}
        {/* {err && <span>Something went wrong</span>} */}
      </form>
      <p>
        You don't have an account? Register
      </p>
    </div>
  </div>
);
};

export default Login