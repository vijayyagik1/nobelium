import React from "react";
import styles from "./Main.module.css";
import { userData, postIcons } from "../Data/AtomData/data";
import { Button } from "@mui/material";
import { FaRegComment } from 'react-icons/fa'
import { MdSync, MdPoll } from 'react-icons/md'
import {FiShare} from 'react-icons/fi'
import {BsHeart} from 'react-icons/bs'
import { useState } from "react";
import { useEffect } from "react";

export default function MainComponent() {
    const [likes, setLikes] = useState(0)
   
    function handleLikeClick(id) {
        setLikes(likes + 1)
        const currentUser = userData.find((ele)=>ele.id===id)
        if (likes % 2 == 0) {
            currentUser.liked=true
            currentUser.likes += 1
        }
        else {
            currentUser.liked=false
            currentUser.likes -= 1
        }
    }
  return (
      <div className={styles.mainWrapper}>
          {userData.map((user) => (
               <div className={styles.container}>
               <div className={styles.header}>
                 <img
                   src="https://images.pexels.com/photos/8778455/pexels-photo-8778455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                   alt="user img"
                 />
                 <div>
                           <h5>{user.first_name}&nbsp;<span>{user.email}</span></h5>
                   <br />
                   <span>{user.post_text}</span>
                 </div>
               </div>
               <div className={styles.post}>
                 <img src="https://images.pexels.com/photos/11734180/pexels-photo-11734180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                   </div>
                   <div className={styles.btnDiv}>
                       <Button variant="text" startIcon={<FaRegComment/>} id={styles.commentBtn} >{user.comment}</Button>
                       <Button id={styles.retweetBtn} startIcon={<MdSync/>}>{user.shares}</Button>
                      <Button onClick={() => handleLikeClick(user.id)}
                          
                          id={styles.likesBtn} startIcon={<BsHeart style={user.liked ? { color: 'deeppink' } : {}}/>}>{user.likes}</Button>
                       <Button id={styles.trendingBtn} startIcon={<MdPoll/>}>{user.trending}</Button>
                       <Button id={styles.shareBtn} startIcon={<FiShare/>}></Button>
                   </div>
             </div>
          ))}
   </div>
  );
}
