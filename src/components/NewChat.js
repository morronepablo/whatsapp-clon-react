import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./NewChat.css";

const NewChat = ({ user, chatList, show, setShow }) => {
  const [list, setList] = useState([
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Bonieky Lacerda",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Bonieky Lacerda",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Bonieky Lacerda",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Bonieky Lacerda",
    },
  ]);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="newChat" style={{ left: show ? 0 : -415 }}>
      <div className="newChat--head">
        <div onClick={handleClose} className="newChat--backbutton">
          <ArrowBackIcon style={{ color: "#FFFFFF" }} />
        </div>
        <div className="newChat--headtitle">Nueva Conversación</div>
      </div>
      <div className="newChat--list">
        {list.map((item, key) => (
          <div className="newChat--item" key={key}>
            <img className="newChat--itemavatar" src={item.avatar} alt="" />
            <div className="newChat--itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewChat;
