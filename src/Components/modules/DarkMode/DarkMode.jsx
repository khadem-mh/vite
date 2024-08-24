import React, { useState } from "react";
import './DarkMode.css'
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

export default function DarkMode() {

    const [darkMode, setDarkMode] = useState(false);

    const handleCheckboxChange = () => setDarkMode(!darkMode);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <input
                type="checkbox"
                className="checkbox"
                id="checkbox"
                onChange={handleCheckboxChange}
            />
            <label htmlFor="checkbox" className="checkbox-label">
                <IoMoonOutline className="fas fa-moon" />
                <MdOutlineWbSunny className="fas fa-sun" />
                <span className="ball"></span>
            </label>
        </div>
    )
}