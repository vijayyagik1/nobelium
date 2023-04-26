import React from 'react'
import {FaTwitter} from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import styles from "./Register.module.css"
import { Button, TextField  } from "@mui/material";

const Register = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.heading}>
        <FaTwitter />
        <h1>Join Twitter Today</h1>
      </div>
      <div className={styles.apple}>
        <Button variant="outlined" startIcon={<FcGoogle />}>
          Sign in with Google
        </Button>
        <Button variant="outlined"   startIcon={<BsApple />}>
          Sign in with Apple 
        </Button>
      </div>
      <div className={styles.sectionDivider}>
       <div><hr/></div>
        <span>or</span>
       <div><hr/></div>
      </div>
      <div className={styles.createAccount}>
      <Button variant="contained" >
          Create account
        </Button>
        <span>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</span>
      </div>
    </div>
  )
}

export default Register
