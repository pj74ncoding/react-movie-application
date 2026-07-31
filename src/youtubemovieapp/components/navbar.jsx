import React, { useEffect, useState } from "react";
import "./navbar.css";
import "./toggle";
import Toggle from "./toggle";

export const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  useEffect(() => {
    const toggleSection = document.getElementById("toggle-section");
    if (theme == "dark") {
      toggleSection.classList.add("dark");
    } else {
      toggleSection.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    const toggleSection = document.getElementById("toggle-section");
    toggleSection.classList.toggle("dark");
    setIsDark(!isDark);
  }

  return (

    <nav className="navbar" id="top-of-page" >
      <h1 className="font-effect-neon navbar-heading">
        Movie Magic
      </h1>

      <div className="navbar-links">
        <a href="#popular">
          <i
            className="fa-solid fa-fire-flame-curved"
            style={{ color: "rgb(230, 178, 60)" }}
          ></i>
          &nbsp;&nbsp;Popular
        </a>
        <a href="#top_rated">
          <i
            className="fa-solid fa-trophy"
            style={{ color: "rgb(230, 178, 60)" }}
          ></i>
          &nbsp;&nbsp;Top Rated
        </a>
        <a href="#upcoming">
          &nbsp;&nbsp;
          <i
            className="fa-solid fa-calendar-plus"
            style={{ color: "rgb(230, 178, 60)" }}
          ></i>
          &nbsp;&nbsp;Upcoming
        </a>
        <div>
          <Toggle isChecked={isDark} handleChange={toggleTheme} />
        </div>
      </div>
    </nav>

  );
};
