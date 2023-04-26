import React from 'react'
import { isUserLoggedIn } from '../Data/AtomData/Atom'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'


const Login = () => {
const [isLogIn, setIsLogIn] = useRecoilState(isUserLoggedIn);
const navigate = useNavigate();

  return (
    <div>
      I am Login
    </div>
  )
}

export default Login
