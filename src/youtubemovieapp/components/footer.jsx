import React from "react";
import "./footer.css";


export const Footer = () => {
  return (
    <footer className="footer-container">
      <div></div>
      <a className="back-to-top" href="#top-of-page">
        <div className="top-link">
          <p>Top</p>
          <i class="fa-solid fa-angles-up"></i>
        </div>
      </a>
      <div className="title">
        <p>Movie Magic Ltd</p>
      </div>
    </footer>
  );
};
