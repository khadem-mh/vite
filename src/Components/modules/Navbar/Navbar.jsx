import React from "react";
import './style.css'
import './media.css'
import DarkMode from "../DarkMode/DarkMode";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoLanguageOutline } from "react-icons/io5";
//
import { SiWebpack } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { GrDevice } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";


export default function Navbar() {

    return (
        <section>
            <nav className="navbar">
                <div className="navbar__left cube-left">
                    <img src="/Images/Logos/vite.png" alt="logo-nav" className="left__logo" />
                    <div className="left__search-box">
                        <FiSearch className="search-box__icon" />
                        <span className="search-box__text">search</span>
                        <span className="search-box__code">Ctrl+K</span>
                    </div>
                </div>
                <div>
                    <ul className="navbar__right cube-right">

                        <li className="right-li"><a href="#">Guide</a></li>
                        <li className="right-li"><a href="#">Config</a></li>
                        <li className="right-li"><a href="#">Plugins</a></li>

                        <li className="right-li">
                            <a href="#">Resources
                                <IoIosArrowDown className="arrow-bottom-li" />
                            </a>
                            <ul className="right-li__sub-menu">
                                <li className="sub-menu__li"><a href="#"> Teame </a></li>
                                <li className="sub-menu__li"><a href="#"> Blogs </a></li>
                                <li className="sub-menu__li"><a href="#"> Releases </a></li>
                                <hr />
                                <li className="sub-menu__li"><a href="#"> Vite Cart </a> </li>
                                <li className="sub-menu__li"><a href="#"> Discard </a> </li>
                                <li className="sub-menu__li"><a href="#"> Github </a> </li>
                                <li className="sub-menu__li"><a href="#"> Relocation </a> </li>
                            </ul>
                        </li>

                        <li className="right-li">
                            <a href="#">Version
                                <IoIosArrowDown className="arrow-bottom-li" />
                            </a>
                            <ul className="right-li__sub-menu">
                                <li className="sub-menu__li"><a href="#">Vite 4.2.0</a></li>
                                <li className="sub-menu__li"><a href="#">Vite 4.9.0</a></li>
                                <li className="sub-menu__li"><a href="#">Vite 5.0.2</a></li>
                            </ul>
                        </li>

                        {/*  */}

                        <li className="right-li lang-parent">
                            <a href="#">
                                <IoLanguageOutline className="lang-choose" />
                                <IoIosArrowDown className="arrow-bottom-li" />
                            </a>
                            <ul className="right-li__sub-menu">
                                <li className="sub-menu__li"><a href="#">En</a></li>
                                <li className="sub-menu__li"><a href="#">Italy</a></li>
                                <li className="sub-menu__li"><a href="#">Fa</a></li>
                                <li className="sub-menu__li"><a href="#">China</a></li>
                            </ul>
                        </li>

                        {/*  */}
                        <li className="right-li right-li__dark-mode">
                            <div className="container-dark-mode">
                                <DarkMode />
                            </div>
                        </li>

                        {/*  */}

                        <li className="right-li right-li__icons">
                            <SiWebpack className="icon-navbar" />
                            <FaXTwitter className="icon-navbar" />
                            <GrDevice className="icon-navbar" />
                            <FaGithub className="icon-navbar" />
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    )
}