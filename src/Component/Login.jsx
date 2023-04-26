import React from "react";
import { isUserLoggedIn } from "../Data/AtomData/Atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import style from "./Login.module.css";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import {RxCross2} from 'react-icons/rx'
const Login = () => {
  const [isLogIn, setIsLogIn] = useRecoilState(isUserLoggedIn);
  const navigate = useNavigate();

  return (
    <div className={style.mainContainer}>
      <div className={style.heading}>
        <RxCross2 size={20}  />
        <FaTwitter  />
       
      </div>
      
      <div className={style.apple}>
      <span style={{fontWeight: "bolder"}}>Sign in to Twitter</span>
        <Button variant="outlined" startIcon={<FcGoogle />}>
          Sign in with Google
        </Button>
        <Button variant="outlined" startIcon={<BsApple />}>
          Sign in with Apple
        </Button>
      </div>
      <div className={style.sectionDivider}>
        <div>
          <hr style={{borderTop: "1px gray"}} />
        </div>
        <span>or</span>
        <div>
          <hr style={{borderTop:"gray"}} />
        </div>
      </div>

      <form className={style.login}>
        <TextField
          id="outlined-basic"
          label="Phone, email address, or username"
          variant="outlined"
        />
        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />

        <Button
          sx={{ backgroundColor: "black", fontWeight: "bold" }}
          variant="contained"
        >
          Log In
        </Button>
        <Button variant="outlined"
       >Forgot Password? </Button>
      </form>
      <div className={style.switch}>
        <span>Don't have an account?</span> &nbsp;
        <span onClick={() => navigate("/signup")}>Sign Up</span>
      </div>
    </div>
  );
};

export default Login;
