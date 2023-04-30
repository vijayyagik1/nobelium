import React, { useState } from "react";
import style from "./WhoFollow.module.css";
import { Button } from "@mui/material";

export default function WhoFollow() {
  const data = [
    {
      img: "https://xsgames.co/randomusers/assets/avatars/male/63.jpg",
      name: "Jack Denial",
      username: "@jackdenial",
      id:"1",
      buttonText:false,
    },
    {
      img: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
      name: "Remo Sins",
      username: "@remosins",
      id:"2",
      buttonText:false,
    },
    {
      img: "https://xsgames.co/randomusers/assets/avatars/female/75.jpg",
      name: "Mia Denial",
      username: "@mia",
      id:"3",
      buttonText:false,

    },
    {
      img: "https://xsgames.co/randomusers/assets/avatars/male/65.jpg",
      name: "Utkarsh",
      username: "@uttu",
      id:"4",
      buttonText:false,

    },
  ];
  // const [buttontext,setButtontext] =useState("Follow")


  const [follow, setFollow] = useState(false);

  const handleToggleFollow=(index)=>{   

data[index].buttonText = !data[index].buttonText
setFollow(data[index].buttonText)
console.log(data[index]);
  }
  console.log("follow",follow);
  console.log("data",data);

  return (
    <div className={style.mainContainer}>
      <h2>Who to follow</h2>
      {data.map((ele,index)=>(<div key={index} className={style.userDiv}>
        <img src={ele.img} />
        <div className={style.userDetail}>
          <h5>{ele.name}</h5>
          <p>{ele.username}</p>
        </div>
        <Button
          onClick={()=>handleToggleFollow(index)}
          variant="contained"
          size="small"
          sx={{
            borderRadius: "2rem",
          }}
        >
          { follow===true && ele.buttonText === true? <span>Following</span>:<span>Follow</span> }
        </Button>
      </div>))
}
      <p className={style.showMore}>Show more</p>
    </div>
  );
}
