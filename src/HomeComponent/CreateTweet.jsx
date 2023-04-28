import React from "react";
import style from "./CreateTweet.module.css";

import {
  FaRegImage,
  FaRegListAlt,
  FaRegSmile,
  FaCalendarCheck,
} from "react-icons/fa";
const CreateTweet = () => {
  return (
    <div className={style.create}>
      <div className={style.create__first}>
        <div className={style.create__img}>
          <img src="https://media.gettyimages.com/id/146107054/photo/tom-cruise-attends-the-european-premiere-of-rock-of-ages-at-odeon-leicester-square-on-june-10.jpg?s=612x612&w=gi&k=20&c=AJO9rYLeOxGjJdX6gcJV3i0jr-CTBDOfl6H3t5HRMJY=" alt="profile img" />
        </div>
        <div className={style.create__input}>
          <textarea
          
            type="text"
            className={style.create__control}
            placeholder="What's happing?"
          />
        </div>
      </div>
      <div className={style.create__second}>
        <div className={style.create__icons}>
          <FaRegImage className={style.ic} />
          <FaRegListAlt className= {style.ic}/>
          <FaRegSmile className={style.ic} />
          <FaCalendarCheck className={style.ic} />
        </div>
        <div className={style.create__btn}>
          <a href="">Tweet</a>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;