import React, { useState } from "react";
import style from "../styles/signup.module.css";

const SignUp = () => {

    const userDetails = {
        username: "",
        email: "",
        password: "",
    };

    const [data, setData] = useState(userDetails)

    function handleChange(event) {
        const [name, value] = event.target
        setData((prevData) => {
            
        })
    }

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
      </form>
    </div>
  );
};

export default SignUp;
