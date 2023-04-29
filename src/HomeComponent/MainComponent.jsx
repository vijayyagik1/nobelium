import React from "react";
import styles from "./Main.module.css";
import { getCurrentUser, getPosts } from "../services/utilities";
import { Button } from "@mui/material";
import { FaRegComment } from 'react-icons/fa'
import { MdSync, MdPoll } from 'react-icons/md'
import {FiShare} from 'react-icons/fi'
import {BsHeart} from 'react-icons/bs'
import { useState } from "react";
import {AiFillHeart} from "react-icons/ai"

export default function MainComponent() {
    const [likes, setLikes] = useState(0)
   const posts = getPosts()
    function handleLikeClick(index) {
        setLikes(likes + 1)
        const currentPostIndex = posts.findIndex((ele)=>ele.id===index)
        if (posts[currentPostIndex].isLiked===false){
            
        posts[currentPostIndex].likes += 1
          posts[currentPostIndex].isLiked=true
        }
        else {
          posts[currentPostIndex].likes -= 1
          posts[currentPostIndex].isLiked=false
        }
      localStorage.setItem("posts", JSON.stringify(posts))
    }
  return (
      <div className={styles.mainWrapper}>
          {posts.map((user) => (
               <div className={styles.container}>
               <div className={styles.header}>
                 <img
                  src={user.profilePic}
                   alt="user img"
                 />
                 <div>
                           <h5>{user.first_name}&nbsp;<span>{user.email}</span></h5>
                   <br />
                   <span>{user.post_text}</span>
                 </div>
               </div>
               <div className={styles.post}>
                 <img src={user.postPic} />
                   </div>
                   <div className={styles.btnDiv}>
                       <Button variant="text" startIcon={<FaRegComment/>} id={styles.commentBtn} >{user.comment}</Button>
                       <Button id={styles.retweetBtn} startIcon={<MdSync/>}>{user.shares}</Button>
                      <Button onClick={() => handleLikeClick(user.id)}
                          
                          id={styles.likesBtn} startIcon={user.isLiked?(<AiFillHeart size={24} style={{color:'deeppink'}}/>):(<BsHeart/>)}>{user.likes}</Button>
                       <Button id={styles.trendingBtn} startIcon={<MdPoll/>}>{user.trending}</Button>
                       <Button id={styles.shareBtn} startIcon={<FiShare/>}></Button>
                   </div>
             </div>
          ))}
   </div>
  );
}
