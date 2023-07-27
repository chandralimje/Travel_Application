import React, {useState} from "react";
import "./navbar.css"
import { MdOutlineTravelExplore } from "react-icons/md";
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"

const Navbar = () => {

  const [active, setActive] = useState('navbar')

  const showNav = () => {
    setActive("navbar activeNavbar")
  }
  
  const removeNav = () => {
    setActive("navbar")
  }

  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" /> Travel.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navlist flex">
            <li className="navitem">
              <a href="#" className="navlink">
                Home
              </a>
            </li>

            <li className="navitem">
              <a href="#" className="navlink">
                Packages
              </a>
            </li>

            <li className="navitem">
              <a href="#" className="navlink">
                Shop
              </a>
            </li>

            <li className="navitem">
              <a href="#" className="navlink">
                About
              </a>
            </li>

            <li className="navitem">
              <a href="#" className="navlink">
                Pages
              </a>
            </li>

            <li className="navitem">
              <a href="#" className="navlink">
                News
              </a>
            </li>

            <li className="navitem">
              <a href="#" className="navlink">
                Contact
              </a>
            </li>

            <button className="btn">
                <a href="#">Book Now</a>
            </button>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
          <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon"/>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
