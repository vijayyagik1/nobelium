import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import styles from "./Register.module.css";
import { Button, TextField } from "@mui/material";
import { Days, Month, Year } from "../Data/AtomData/data";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [isInput, setIsInput] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={styles.mainContainer}>
      <div className={styles.heading}>
        <FaTwitter />
        <h1>Join Twitter Today</h1>
      </div>

      {isInput ? (
        <form className={styles.Register}>
          <TextField
            id="outlined-basic"
            label="Phone, Email Or UserName"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            type="email"
            label="Email"
            variant="outlined"
          />
          <TextField
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <div className={styles.Calender}>
            <select>
              <option>Day</option>
              {Days.map((ele) => (
                <option>{ele}</option>
              ))}
            </select>

            <select>
              <option>Month</option>
              {Month.map((ele) => (
                <option>{ele}</option>
              ))}
            </select>

            <select>
              <option>Year</option>
              {Year.map((ele) => (
                <option>{ele}</option>
              ))}
            </select>
          </div>

          <Button variant="contained">Register</Button>
        </form>
      ) : (
        <div className={styles.Inside}>
          <div className={styles.apple}>
            <Button variant="outlined" startIcon={<FcGoogle />}>
              Sign in with Google
            </Button>
            <Button variant="outlined" startIcon={<BsApple />}>
              Sign in with Apple
            </Button>
          </div>
          <div className={styles.sectionDivider}>
            <div>
              <hr />
            </div>
            <span>or</span>
            <div>
              <hr />
            </div>
          </div>
          <Button variant="contained" onClick={() => setIsInput(!isInput)}>
            Create account
          </Button>
          <div className={styles.createAccount}>
            <span>
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </span>
          </div>
        </div>
      )}

      <div className={styles.switch}>
        <span>Already Have an Account?</span> &nbsp;
        <span onClick={() => navigate("/signin")}>Sign In</span>
      </div>
    </div>
  );
};

export default Register;
