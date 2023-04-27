import React, { useState } from "react";
import { isUserLoggedIn } from "../Data/AtomData/Atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import style from "./Login.module.css";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

const Login = () => {
  const [isLogIn, setIsLogIn] = useRecoilState(isUserLoggedIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function getData() {
    const users = localStorage.getItem("users");
    if (users) {
      try {
        return JSON.parse(users);
      } catch {
        return [];
      }
    }
    return [];
  }

  const handleLogin = () => {
    const userData = getData()
    const currentUser = userData.find((data) => data.email === email);
    if (currentUser.password === password) {
      alert("Login successful");
      navigate("/");
    } else if (!currentUser) {
      alert("User Not Found");
    }
  };
  console.log(email, password);

  return (
    <div className={style.mainContainer}>
      <div className={style.heading}>
        <FaTwitter />
        <h1>Sign in to Twitter</h1>
      </div>
      <div className={style.apple}>
        <Button variant="outlined" startIcon={<FcGoogle />}>
          Sign in with Google
        </Button>
        <Button variant="outlined" startIcon={<BsApple />}>
          Sign in with Apple
        </Button>
      </div>
      <div className={style.sectionDivider}>
        <div>
          <hr />
        </div>
        <b>or</b>
        <div>
          <hr />
        </div>
      </div>

      <form className={style.login}>
        <TextField
          id="outlined-basic"
          label="Phone, email Or username"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          onClick={handleLogin}
          sx={{ backgroundColor: "black", fontWeight: "bold" }}
          variant="contained"
        >
          Log In{" "}
        </Button>
        <Button variant="outlined">Forgot Password? </Button>
      </form>
      <div className={style.switch}>
        <span>Don't Have an Account?</span> &nbsp;
        <span onClick={() => navigate("/signup")}>Sign Up</span>
      </div>
    </div>
  );
};

export default Login;
