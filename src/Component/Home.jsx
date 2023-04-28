
import LeftSideBar from '../HomeComponent/LeftSideBar'
import React from "react";
import RightSideBar from "../HomeComponent/RightSideBar";
import { useRecoilState } from "recoil";
import { isShowing } from "../Data/AtomData/Atom";
import Styles from "./Home.module.css";
import MainComponent from '../HomeComponent/MainComponent'
import { isUserLoggedIn } from '../Data/AtomData/Atom'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Twittes from "./HomeComponent/Twittes";


const Home = () => {
 const [isShow, setIsShow] = useRecoilState(isShowing);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isUserLoggedIn)
  const navigate = useNavigate()
  useEffect(() => {
    if(isLoggedIn=== false){
    navigate('/signin')
    }
  },[])
  let Right = [];

  if (isShow == true) {
    Right = [
      {
        id: 1,
        "Title ": "bibendum",
        Content: "luctus",
      },
      {
        id: 2,
        "Title ": "dolor",
        Content: "diam",
      },
      {
        id: 3,
        "Title ": "ac",
        Content: "scelerisque",
      },
      {
        id: 4,
        "Title ": "lacus",
        Content: "ante",
      },
      {
        id: 5,
        "Title ": "ultricies eu",
        Content: "quis",
      },
      {
        id: 6,
        "Title ": "diam",
        Content: "semper",
      },
      {
        id: 7,
        "Title ": "tortor",
        Content: "duis",
      },
      {
        id: 8,
        "Title ": "augue",
        Content: "vestibulum",
      },
      {
        id: 9,
        "Title ": "auctor gravida",
        Content: "vestibulum",
      },
      {
        id: 10,
        "Title ": "cursus",
        Content: "porttitor",
      },
      {
        id: 11,
        "Title ": "ultrices",
        Content: "primis",
      },
      {
        id: 12,
        "Title ": "in hac",
        Content: "quam",
      },
      {
        id: 13,
        "Title ": "luctus",
        Content: "lorem",
      },
      {
        id: 14,
        "Title ": "quis",
        Content: "volutpat",
      },
      {
        id: 15,
        "Title ": "vivamus",
        Content: "mi",
      },
      {
        id: 16,
        "Title ": "fermentum",
        Content: "mus",
      },
      {
        id: 17,
        "Title ": "tristique fusce",
        Content: "quis",
      },
      {
        id: 18,
        "Title ": "pretium",
        Content: "turpis",
      },
      {
        id: 19,
        "Title ": "suspendisse",
        Content: "ante",
      },
      {
        id: 20,
        "Title ": "in",
        Content: "nulla",
      },
      {
        id: 21,
        "Title ": "ac",
        Content: "augue",
      },
      {
        id: 22,
        "Title ": "in sapien",
        Content: "lectus",
      },
      {
        id: 23,
        "Title ": "fusce",
        Content: "morbi",
      },
      {
        id: 24,
        "Title ": "euismod",
        Content: "pellentesque",
      },
      {
        id: 25,
        "Title ": "odio",
        Content: "eget",
      },
      {
        id: 26,
        "Title ": "ac",
        Content: "erat",
      },
      {
        id: 27,
        "Title ": "lacinia eget",
        Content: "ut",
      },
      {
        id: 28,
        "Title ": "id massa",
        Content: "in",
      },
      {
        id: 29,
        "Title ": "potenti",
        Content: "pellentesque",
      },
      {
        id: 30,
        "Title ": "quis odio",
        Content: "dictumst",
      },
      {
        id: 31,
        "Title ": "augue vestibulum",
        Content: "volutpat",
      },
      {
        id: 32,
        "Title ": "eros",
        Content: "pretium",
      },
      {
        id: 33,
        "Title ": "in",
        Content: "nunc",
      },
      {
        id: 34,
        "Title ": "ut nunc",
        Content: "id",
      },
      {
        id: 35,
        "Title ": "turpis enim",
        Content: "luctus",
      },
      {
        id: 36,
        "Title ": "magna",
        Content: "ut",
      },
      {
        id: 37,
        "Title ": "consectetuer adipiscing",
        Content: "vulputate",
      },
      {
        id: 38,
        "Title ": "et",
        Content: "mus",
      },
      {
        id: 39,
        "Title ": "tristique",
        Content: "eget",
      },
      {
        id: 40,
        "Title ": "sed",
        Content: "semper",
      },
      {
        id: 41,
        "Title ": "id mauris",
        Content: "suspendisse",
      },
      {
        id: 42,
        "Title ": "potenti",
        Content: "in",
      },
      {
        id: 43,
        "Title ": "ac",
        Content: "natoque",
      },
      {
        id: 44,
        "Title ": "neque",
        Content: "diam",
      },
      {
        id: 45,
        "Title ": "lectus in",
        Content: "nisi",
      },
      {
        id: 46,
        "Title ": "in quam",
        Content: "id",
      },
      {
        id: 47,
        "Title ": "imperdiet",
        Content: "mattis",
      },
      {
        id: 48,
        "Title ": "donec",
        Content: "eget",
      },
      {
        id: 49,
        "Title ": "rutrum nulla",
        Content: "phasellus",
      },
      {
        id: 50,
        "Title ": "pede",
        Content: "eu",
      },
    ];
  } else {
    Right = [
      {
        id: 1,
        "Title ": "bibendum",
        Content: "luctus",
      },
      {
        id: 2,
        "Title ": "dolor",
        Content: "diam",
      },
      {
        id: 3,
        "Title ": "ac",
        Content: "scelerisque",
      },
      {
        id: 4,
        "Title ": "lacus",
        Content: "ante",
      },
    ];
  }


  return (

    <div>

      
      

    <div className={Styles.mainWrapper}>
    
      
      <div className={Styles.container}>
      <LeftSideBar/>
      
      <Twittes />
      <MainComponent/>
      <div className={Styles.RightMain}>
        <h3>What's Happening</h3>
        {Right.map((ele) => (
          <RightSideBar Message={ele["Title "]} content={ele.Content} />
        ))}
        <button onClick={()=> setIsShow(!isShow)}>Show More</button>
      </div>
     </div>

    </div>
  );
};

export default Home;
