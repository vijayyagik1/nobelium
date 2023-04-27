import React from 'react'
import { isUserLoggedIn } from '../Data/AtomData/Atom'
import { useRecoilState } from 'recoil'
import Login from './Login'
import MainComponent from '../HomeComponent/MainComponent'
const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isUserLoggedIn)
  return (

    <div>
      {/* {isLoggedIn ?
        <div>
          I am Home
          <MainComponent/>
          </div>:<Login />} */}
     <MainComponent/>
    </div>
  )
}

export default Home
