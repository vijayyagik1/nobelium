import React from "react";
import { isUserLoggedIn } from "../Data/AtomData/Atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { Button, TextField  } from "@mui/material";
import style from "./Login.module.css";
import {FaTwitter} from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

const Login = () => {
  const [isLogIn, setIsLogIn] = useRecoilState(isUserLoggedIn);
  const navigate = useNavigate();

  return (
    <div className={style.mainContainer}>
    <div className={style.heading}>
<FaTwitter/>
    <h1>Sign in to Twitter</h1>
    </div>
      <div className={style.apple}>
        <Button variant="outlined" startIcon={<FcGoogle />}>
          Sign in with Google
        </Button>
        <Button variant="outlined"   startIcon={<BsApple />}>
          Sign in with Apple 
        </Button>
      </div>
      <div className={style.sectionDivider}>
       <div><hr/></div>
        <span>or</span>
       <div><hr/></div>
      </div>

      <form className={style.login}>
        <TextField
          id="outlined-basic"
          label="Phone, Email Or UserName"
          variant="outlined"
        />

        <Button variant="contained">Next </Button>
        <Button variant="outlined">Forgot Password? </Button>
      </form>
      <div className={style.switch}>
        <span>Don't Have an Account?</span> &nbsp;
        <span onClick={()=>navigate('/signup')}>Sign Up</span>
      </div>
    </div>
  );
};

export default Login;
