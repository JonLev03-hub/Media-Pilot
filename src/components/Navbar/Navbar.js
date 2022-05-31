import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
import icon from "./Hamberger.png";
import DropDown from "../DropDown/DropDown";
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className={Styles.nav}>
      <h1 className={Styles.title}>Media Pilot</h1>
      {(toggleMenu || screenWidth > 1060) && (
        <>
          <div className={Styles.backdrop} onClick={toggleNav}></div>
          <ul className={Styles.list}>
            <li className={Styles.items}>
              <Link to="/" className={Styles.items}>
                About Us
              </Link>
            </li>
            <li className={Styles.items}>
              <Link to="/pricing" className={Styles.items}>
                Pricing
              </Link>
            </li>
            <li className={Styles.items}>
              <DropDown>
                <Link className={Styles.items} to="/Services">
                  Services
                </Link>
                <ul>
                  <li>Post Scheduling</li>
                  <li>Post Time Suggestions</li>
                  <li>Hashtag suggestions</li>
                  <li>Repost Suggestion</li>
                  <li>Account Analytics</li>
                  <li>Ad Management</li>
                </ul>
              </DropDown>
            </li>
            <li className={Styles.items}>
              <DropDown>
                <Link className={Styles.items} to="/Resources">
                  Resources
                </Link>
                <ul>
                  <li>FAQ</li>
                  <li>Contact</li>
                </ul>
              </DropDown>
            </li>
            <li>
              <a className={Styles.login}>Create Free Account</a>
            </li>
          </ul>
        </>
      )}
      <button onClick={toggleNav} className={Styles.hambergerBtn}>
        <img className={Styles.img} src={icon} alt="Menu" />
      </button>
    </nav>
  );
}
