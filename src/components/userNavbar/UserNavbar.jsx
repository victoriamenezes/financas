import React from 'react';
import "./userNavbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";
import CommonAvatar from '../common/commonAvatar';
import CommonBadge from '../common/commonBadge';
import CommonMail from '../common/commonMail';

const UserNavbar = () => {
  return (
  <div className="user-navbar">
    <div className="user-wrapper">
      <div className="user-search">
        <input type="text" placeholder="Buscar" />
        <SearchOutlinedIcon />
      </div>
      <div className="items">
        <div className="item">
          <CommonBadge />
        </div>
        <div className="item">
          <CommonMail />
        </div>
        <div className="item">
          <CommonAvatar />
        </div>
      </div>
    </div>
  </div>
);
};

export default UserNavbar
