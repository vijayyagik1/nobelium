import { useState } from "react";
import {LogIn} from '../component/login'
import {SignUp} from '../component/signup'
import '../CSS/component3.css'

export function Component3() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <span style={{color:'gray'}}>{isLogin ? "Log in your account" : "Sign Up to create a new account"}</span>
      <form className="formArea">
        <div className="inputArea">
          {isLogin ? (
            <LogIn/>
          ) : (
            <SignUp/>
          )}
        </div>

        <button className="btn2" type="submit">{isLogin ? "Login" : "SignUp"}</button>
        
      </form>
        <hr style={{width: '80%'}}/>
      <div className="toggleDiv">
      <span>{isLogin ? "Need an account?" : "Already have an account?"}</span>
      <span
        onClick={toggleForm}
        style={{ cursor: "pointer", color: 'blue', fontWeight: 'bold', marginLeft: 5 }}
      >
        {isLogin ? "Sign up" : "Log in"}
      </span>
      </div>
    </div>
  );
}