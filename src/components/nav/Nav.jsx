import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";
import { BsListCheck } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div className="nav__container">
      <nav className="nav_items">
        <a
          href="#home"
          onClick={() => setActiveNav("#home")}
          className={activeNav === "#home" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>

        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>

        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BsBriefcase />
        </a>

        <a
          href="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <IoImageOutline />
        </a>

        <a
          href="#skills"
          onClick={() => setActiveNav("#skills")}
          className={activeNav === "#skills" ? "active" : ""}
        >
          <BsListCheck />
        </a>
        
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <AiOutlineMessage />
        </a>
      </nav>
    </div>
  )
}

export default Nav;
