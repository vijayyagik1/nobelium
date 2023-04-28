import React from "react";
import CreateTweet from "./CreateTweet";
import style from "./HomeHeader.module.css";
import { Button } from "@mui/material";

export default function HomeHeader() {
  const styles = {
    textTransform: "none",
    color: "black",
    backgroundColor: "white",
    borderRadius: "none",
    fontSize: "larger",
    borderBottom: "0.3rem solid black",
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.wrapperDiv}>
        <h2 className={style.headName}>Home</h2>
        <div className={style.toggleBtn}>
          <div>
            <p>For you</p>
          </div>
          <div>
            <p>Following</p>
          </div>
        </div>
      </div>
     
    </div>
  );
}
