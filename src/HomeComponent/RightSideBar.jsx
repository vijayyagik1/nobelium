import React, { useState } from "react";
import Styles from "./RightSideBar.module.css";
import { Button, Popover, Typography } from "@mui/material";
import { CgSmileSad } from "react-icons/cg";


export default function RightSideBar(props) {
  const [isPopUp, setIsPopoUp] = useState(null);

  function openPopUp(e) {
    setIsPopoUp(e.currentTarget);
  }

  return (
    <div className={Styles.Main}>
      <div className={Styles.Contents}>
        <h4>{props.Message}</h4>
        <strong>{props.content}</strong>
        <br />
        <span>{props.count}</span>
      </div>
      <div className={Styles.butt1}>
        <Button
          color="secondary"
          style={{ color: "solid-black" }}
          onClick={openPopUp}
        >
          ...
        </Button>
        <Popover
        sx={{position:"relative", left:"10px"}}
          open={Boolean(isPopUp)}
          anchorEl={isPopUp}
          anchorOrigin={{
            vertical: "left",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "left",
            horizontal: "left",
          }}
          onClose={()=>setIsPopoUp(null)}
        >
          <Typography 
          sx={{color:"red"}}
          variant="h6"> <span><CgSmileSad />Not Interested in this</span></Typography>
          <Typography variant="h6"> <span><CgSmileSad />This trend is harmful or spammy</span></Typography>
        </Popover>
      </div>
    </div>
  );
}
