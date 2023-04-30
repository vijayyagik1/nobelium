import LeftSideBar from "../HomeComponent/LeftSideBar";
import React,{useState} from "react";
import RightSideBar from "../HomeComponent/RightSideBar";
import { useRecoilState } from "recoil";
import Styles from "./Home.module.css";
import MainComponent from "../HomeComponent/MainComponent";
import { isUserLoggedIn } from "../Data/AtomData/Atom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CreateTweet from "../HomeComponent/CreateTweet";
import HomeHeader from "../HomeComponent/HomeHeader";
import { getCurrentUser } from "../services/utilities";
import SearchBar from "../HomeComponent/SearchBar"

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isUserLoggedIn);
  const navigate = useNavigate();

  const currentUser = getCurrentUser()
  useEffect(() => {
    if (currentUser.isLoggedIn === false) {
      navigate("/signin");
    }
    else {
      fetch('http://localhost:3000/MOCK_DATA (1).json')
      .then((res) => res.json())
      .then((data) => localStorage.setItem('posts', JSON.stringify(data)))
    }
  },[]);


  return (
    <div className={Styles.container}>
      <div className={Styles.leftDiv}>
        <LeftSideBar />
      </div>
      <div className={Styles.centerDiv}>
        <HomeHeader />
        {/* <CreateTweet /> */}

        <MainComponent />
      </div>
      <div  className={Styles.RMain}>
      <div><SearchBar/></div>
      <div className={Styles.RightMain}>
        <div className={Styles.Content}>
          <RightSideBar/>
        </div>
      </div></div>
    </div>
  );
};

export default Home;
