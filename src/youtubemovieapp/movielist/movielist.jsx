import React, { useActionState, useEffect, useState } from "react";
import _ from "lodash";
import "./movielist.css";
import MovieCard from "./moviecard";
import { Filteredgroup } from "../components/filteredgroup";
const Movielist = ({ type, title, setIsDisplayed }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sortOrder, setSortOrder] = useState("");

  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filteredMovies, [sort.by], [sort.order]);
      setFilteredMovies(sortedMovies);
    }
  }, [sort]);

  const fetchData = async () => {
    try {
      // const apiKey = import.meta.env.VITE_TMDB_API_KEY;
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=5a1dbe02eaed7aed89976013dcbc8aef`,
      );

      console.log("response", result);
      const data = await result.json();
      console.log("d", data);
      setMovies(data.results);
      setFilteredMovies(data.results);
    } catch (error) {
      setIsDisplayed(true);
    }
  };

  function handleFilter(movieRating) {
    if (movieRating == minRating) {
      setMinRating(0);
      setFilteredMovies(movies);
    } else {
      setMinRating(movieRating);
      const filtered = movies.filter(
        (movies) => movies.vote_average >= movieRating,
      );
      setFilteredMovies(filtered);
      console.log("movies in the function", movies, "filtered", filtered);
    }
  }

  function handleSort(e) {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  }
  console.log("sort functionality", sort);
  // function handleSortOrder(e) {
  //   setSortOrder(e);
  //   if (sortOrder == "Ascending") {
  //     const ascendingMovies = filteredMovies.sort(
  //       (a, b) => b.vote_average - a.vote_average,
  //     );
  //     setFilteredMovies(ascendingMovies);
  //   } else {
  //     const descendingMovies = filteredMovies.sort(
  //       (a, b) => a.vote_average - b.vote_average,
  //     );
  //     setFilteredMovies(descendingMovies);
  //   }
  // }

  console.log("movielist", movies);

  return (
    <>
      <section className="movie-listing-section" id={type}>
        <header className="align-center movie-listing-header">
          <h2 className=" align-center movie-list-heading font-effect-outline">
            {title}
          </h2>
          <div className="align-center movie-list-fs">
            <Filteredgroup
              minRating={minRating}
              onRatingClick={handleFilter}
              ratings={[5, 6, 7]}
            />

            <select
              className="movie-sorting-options"
              onChange={handleSort}
              value={sort.by}
              name="by"
              id=""
            >
              <option value="default">Sort By</option>
              <option value="release_date">Date</option>
              <option value="vote_average">Rating</option>
            </select>

            <select
              className="movie-sorting-options"
              onChange={handleSort}
              value={sort.order}
              name="order"
              id=""
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </header>
        <div className="movie-cards">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
      {/* {isDisplayed && <p style={{ color: "black" }}>{errorMessage}</p>} */}
    </>
  );
};

export default Movielist;
