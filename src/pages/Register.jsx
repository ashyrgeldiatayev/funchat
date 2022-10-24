import React from 'react'
import '../style.scss'
import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">Funchat</span>
      <span className="title">Register</span>
      <form>
        <input required type="text" placeholder="display name" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <input style={{display:'none'}}type="file" id='file'/>
        <label htmlFor="file">
          <img src={Add} alt="" />
          <span>Add an avatar</span>
        </label>
        <button>Sign up</button>
        {/* {loading && "Uploading and compressing the image please wait..."} */}
        {/* {err && <span>Something went wrong</span>} */}
      </form>
      <p>
        You do have an account? Login
      </p>
    </div>
  </div>
);
};

export default Register