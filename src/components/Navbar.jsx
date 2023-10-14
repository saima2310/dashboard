import React from "react";
import { VscArrowSwap } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import avatar from "../assets/avatarImage.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="avatar">
        <img src={avatar} />
        <div className="info">
          <h4 className="title">Jane Doe</h4>
          <h4 className="status">Online</h4>
        </div>
      </div>
      <div className="quick">
        <button>
          <VscArrowSwap />
          QuickTransaction
        </button>
      </div>
      <div className="navbar__info">
        <IoMdNotificationsOutline />
        <FiMail />
        <div className="search__bar">
          <input type="text" placeholder="Search" />
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
