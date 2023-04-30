import React, { useState } from "react";
import style from "./LeftSideBar.module.css";
import { CgMoreO } from "react-icons/cg";
import { BiHomeCircle } from "react-icons/bi";
import { Button } from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FaTwitter from "@mui/icons-material/Twitter";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { FiMoreHorizontal } from "react-icons/fi";
import { getCurrentUser } from "../services/utilities";
import { useNavigate } from "react-router-dom";

export default function LeftSideBar() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const currentUser = getCurrentUser();

  const data = [
    {
      icon: <BiHomeCircle />,
      name: "Home",
    },
    {
      icon: <TagIcon sx={{ fontSize: 40 }} />,
      name: "Explore",
    },
    {
      icon: <NotificationsNoneIcon sx={{ fontSize: 40 }} />,
      name: "Notifications",
    },
    {
      icon: <MailOutlineIcon />,
      name: "Messages",
    },
    {
      icon: <BookmarkBorderIcon sx={{ fontSize: 40 }} />,
      name: "Bookmarks",
    },
    {
      icon: <FaTwitter sx={{ fontSize: 40 }} />,
      name: "Twitter Blue",
    },
    {
      icon: <PermIdentityIcon sx={{ fontSize: 40 }} />,
      name: "Profile",
    },
    {
      icon: <CgMoreO />,
      name: "More",
    },
  ];

  const logoutBtnVisible = () => {
    setIsVisible(!isVisible);
    console.log("Logout");
  };
  function handleLogOut() {
    alert("Are you sure you want to Logout?");
    currentUser.isLoggedIn = false;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    navigate("/signIn");
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.sideBarBtnGroup}>
        <FaTwitter
          sx={{
            margin: "8px",
            fontSize: "3.5rem",
            borderRadius: "50%",
            padding: "5px",
            "&:hover": {
              backgroundColor: "rgba(204, 201, 201, 0.486)",
            },
          }}
          className={style.mainIcon}
        />
        {data.map((ele, index) => (
          <Button
            title={window.screen.width > 840 ? ele.name : ""}
            size="large"
            className={style.sideBarBtn}
            key={index}
            variant="text"
            sx={{
              color: "black",
              borderRadius: "3rem",
              fontWeight: "500",
              // backgroundColor: "black",
              fontSize: "1.3rem",
              textTransform: "none",
              gap: "1rem",
              padding: "0.6rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              "&:hover": {
                backgroundColor: "rgba(204, 201, 201, 0.486)",
              },
            }}
            startIcon={ele.icon}
          >
            {ele.name}
          </Button>
        ))}

        <Button
          className={style.tweetBtn}
          sx={{
            fontSize: "1.2rem",
            textTransform: "none",
            borderRadius: "3rem",
            width: "16rem",
            height: "3.7rem",
            marginTop: "0.5rem",
            // marginLeft: "-2rem",
            // position:"relative",
            // left: "-1rem",
            backgroundColor: "rgb(29, 155, 240)",
          }}
          variant="contained"
        >
          Tweet{" "}
        </Button>
      </div>

      {/*Logout button user when am clicked then use logged out */}
      <div
        style={isVisible ? {} : { display: "none" }}
        className={style.logoutPopup}
      >
        <hr />
        <div>
          <p>Add an existing account </p>
        </div>
        <div>
          <p onClick={handleLogOut}> Log out {currentUser.email}</p>
        </div>
      </div>

      <div onClick={logoutBtnVisible} className={style.userDiv}>
        <PermIdentityIcon
          sx={{
            height: "3rem",
            width: "3rem",
          }}
        />
        <span>{currentUser.name}</span>
        <span>{currentUser.email}</span>
        <FiMoreHorizontal />
      </div>
    </div>
  );
}
