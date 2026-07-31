import React from "react";

import "./toggle.css";
const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="main-container">
      <div className="toggle-container">
        <input
          className="toggle"
          type="checkbox"
          id="check"
          checked={isChecked}
          onChange={handleChange}
        />
        <label className="test" htmlFor="check">
          &nbsp;&nbsp;<span class="material-symbols-outlined">light_mode</span>
          &nbsp; | &nbsp;<i class="fa-solid fa-moon"></i>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
