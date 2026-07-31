import React from "react";

export const Filteredgroup = ({ minRating, onRatingClick, ratings }) => {
  return (
    <ul className="align-center movie-filtering-list">
      {ratings.map((rating) => (
        <li
          key={rating}
          className={
            minRating === rating
              ? "movie-filtering-item active"
              : "movie-filtering-item "
          }
          onClick={() => onRatingClick(rating)}
        >
          {rating}+
          <i
            className="fa-solid fa-star font-effect-fire-animation"
            style={{ color: "rgb(230, 178, 60)" }}
          ></i>
        </li>
      ))}
    </ul>
  );
};
