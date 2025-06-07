import React, { useState } from "react";

import "../styles/nav.css";
import { LuBookmark } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

function Nav() {
  const [isSearch, setIsSearch] = useState(false);
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);

  const handleNav = () => {
    setIsBurgerMenu(() => (isBurgerMenu ? false : true));
  };

  return (
    <div className="nav-wrapper">
      <div className="nav-logo-container">
        <h3 className="logo">Travelsy</h3>
      </div>

      <div className="nav-links-container">
        <div className="nav-links">
          <a href="#" className="nav-link">
            Camping
          </a>
          <a href="#" className="nav-link">
            Activities
          </a>
          <a href="#" className="nav-link">
            Equipments
          </a>
          <a href="#" className="nav-link">
            Blogs
          </a>
        </div>

        <div className="profile">
          <butoon className="reservationBtn">
            <p>Reservation</p>
            <LuBookmark />
          </butoon>
          <div className="searchBtn" onClick={() => setIsSearch(!isSearch)}>
            <IoSearch size={19} />
          </div>{" "}
          <div className="userImg">
            <div className="userImg-conatiner">
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="userActivityIndicator"></div>
          </div>
          <div className="dropDownBtn">
            <IoIosArrowDown size={20} />
          </div>
        </div>
      </div>
      <div className={isSearch ? "search-bar isSearch" : "search-bar"}>
        <input type="text" placeholder="Search" />
        <button className="searchbtn" onClick={() => setIsSearch(!isSearch)}>
          <IoSearch size={19} />
        </button>
      </div>

      <div className="nav-burgerMenu">
        <button
          className={!isBurgerMenu ? "burgerBtn" : "burgerBtnAni"}
          onClick={handleNav}></button>
      </div>
      <div
        className={isBurgerMenu ? "nav-mobileMenu" : "nav-mobileMenu  isMenu"}>
        <butoon className="reservationBtn mobile-reserve-btn">
          <p>Reservation</p>
          <LuBookmark />
        </butoon>{" "}
        <p className="mobile-Links">Camping</p>
        <p className="mobile-Links">Activities</p>
        <p className="mobile-Links">Equipment</p>
        <p className="mobile-Links">Blogs</p>
      </div>
    </div>
  );
}

export default Nav;
