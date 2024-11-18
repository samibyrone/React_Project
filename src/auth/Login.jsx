import React from "react";
import CustomButton from "../reuseables/CustomButton";
import style from '../styles/login.module.css';
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {

    const userLoginDetails = {
        username: "",
        email: "",
        password: "",
    };

    const [loginData, setLoginData] = useState(userLoginDetails)

    function handleChange(event) {
        const [name, value] = event.target
        // setData((prevData) => ({...prevData, [name]:value}));
        setLoginData((prevData) => {
          return {...prevData, [name]: value}
        })
    };

    console.log(loginData)

    return (
    <div>
        <form action="">
          <div>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              className={style.input}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className={style.input}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="input"
              onChange={handleChange}
              required
            />
          </div>
          <CustomButton style={style.btn} type="submit" textContent="Login"/>
        </form>
        <div>
        <span>I don't have any account yet!</span>
        <span><Link to={'/signup'}>Signup</Link></span>
      </div>
    </div>
    );
};

export default Login;