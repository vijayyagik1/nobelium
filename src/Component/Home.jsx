import LeftSideBar from "../HomeComponent/LeftSideBar";
import React from "react";
import RightSideBar from "../HomeComponent/RightSideBar";
import { useRecoilState } from "recoil";
import Styles from "./Home.module.css";
import MainComponent from "../HomeComponent/MainComponent";
import { isUserLoggedIn } from "../Data/AtomData/Atom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CreateTweet from "../HomeComponent/CreateTweet";
import HomeHeader from "../HomeComponent/HomeHeader";

import TweetModel from "../HomeComponent/TweetModel";

import { getCurrentUser } from "../services/utilities";
import WhoFollow from "../HomeComponent/WhoFollow";


const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isUserLoggedIn);
  const navigate = useNavigate();


  useEffect(() => {
    const currentUser = getCurrentUser()
    setIsLoggedIn(currentUser.isLoggedIn)
    console.log(isLoggedIn)
    if (isLoggedIn === true) {
      fetch("/data.json")
      .then((res) => res.json())
      .then((data) => localStorage.setItem("posts", JSON.stringify(data)))
    }
    else {
      

      navigate("/signIn")

    }
  },[isLoggedIn]);


  let Right = [
    {
      id: 1,
      isNotIntrested: false,
      country: "Sports Trending",
      keyword: "Gautam Gambhir",
      totalKeywords: "8000k Tweets",
    },
    {
      id: 2,
      isNotIntrested: false,
      country: "Trending in India",
      keyword: "#Virat kohli",
      totalKeywords: "6000k Tweets",
    },
    {
      id: 3,
      isNotIntrested: false,
      country: "Trending in Sports",
      keyword: "Telugu",
      totalKeywords: "2560k Tweets",
    },
    {
      id: 4,
      isNotIntrested: true,
      country: "Trending in Politics",
      keyword: "#Pappu",
      totalKeywords: "2000k Tweets",
    },
    {
      id: 5,
      isNotIntrested: false,
      country: "Trending in Sports",
      keyword: "#sachin",
      totalKeywords: "2000k Tweets",
    }
  ];

  return (
    <div className={Styles.container}>
      <div className={Styles.leftDiv}>
        <LeftSideBar />
        <TweetModel/>
      </div>
      <div className={Styles.centerDiv}>
        <HomeHeader />
        <CreateTweet />

        <MainComponent />
      </div>
      <div className={Styles.RightMain}>
        <div><h3>What's Happening</h3></div>
        <div className={Styles.Content}>
          {Right.map((ele) => (
            <RightSideBar Message={ele["country"]} id={ele.id} content={ele.keyword} count={ele.totalKeywords} />
          ))}
        </div>
        <button>Show More</button>
      <WhoFollow/>
      </div>
    </div>
  );
};

export default Home;
