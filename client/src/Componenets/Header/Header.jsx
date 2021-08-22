import { Avatar } from "@material-ui/core";
import {  ArrowDropDown, Notifications, SearchOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Header.scss";
function Header() {
    const [isScrooled, setisScrooled] = useState(false)
    window.onscroll = () => {
        setisScrooled(window.pageYOffset === 0 ? false:true);
        return  () => window.onscroll = null
    }
  return (
    <div className={isScrooled? "header scrolled":"header"}>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
          <span>Home Page</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Populer </span>
          <span>MyList</span>
        </div>
              <div className="right">
                  <SearchOutlined  className="header__icons"/>
                  <span>KID</span>
                  <Notifications className="header__icons"/>
                  <Avatar className="img" />
                  <div className="header__profile">
                      <ArrowDropDown className="header__icons" />
                      <div className="option">
                          <span>settings</span>
                          <span>logout</span>
                      </div>
                  </div>
                
        </div>
      </div>
    </div>
  );
}

export default Header;
