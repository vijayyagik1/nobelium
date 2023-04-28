import React from "react";
import style from "./HomeHeader.module.css";

export default function HomeHeader() {
  

  return (
    <div className={style.mainContainer}>
     
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
  );
}
