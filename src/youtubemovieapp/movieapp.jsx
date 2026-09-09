import { useState } from "react";
import { Navbar } from "./components/navbar";
import Movielist from "./movielist/movielist";
import { Footer } from "./components/footer";

import "../App.css";

export const YoutubeMovieApp = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("ERROR API NOT FOUND!!");
  return (
    <div className="app" id="toggle-section">
      <Navbar />
      <Movielist
        type="popular"
        title="Popular"
        setIsDisplayedDisplayed={setIsDisplayed}
      />
      <Movielist
        type="top_rated"
        title="Top Rated"
        setIsDisplayed={setIsDisplayed}
      />
      <Movielist
        type="upcoming"
        title="Upcoming"
        setisDisplayed={setIsDisplayed}
      />

      {isDisplayed && (
        <div className="error-message-container">
          <p><b>{errorMessage}</b></p>
        </div>
      )}
      <Footer />
    </div>
  );
};
