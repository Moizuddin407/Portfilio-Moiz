import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const Themetoggle = ({ setTheme }) => {
  const [theme, setThemeLocal] = useState(localStorage.getItem("theme") || "light");

  const themetoggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setThemeLocal(newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); 
  }, [theme]);

  return (
    <div className="nav_ac" onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
