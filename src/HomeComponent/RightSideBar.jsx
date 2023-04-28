import React from 'react';
import Styles from "./RightSideBar.module.css";

const RightSideBar = (props) => {
  return (
    <div className={Styles.RightMain}>
      <div className={Styles.Upper}>
        <h4>{props.Message} Trending</h4>
        <button>...</button>
      </div>
      <div className={Styles.Content}>
        <span>{props.content}</span><br/>
        <span>{Math.floor(Math.random()* (5000) + 5000)} tweets</span>
      </div>
    </div>
  )
}

export default RightSideBar
