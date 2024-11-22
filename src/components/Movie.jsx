import React from 'react';

const Movie = ({ movie }) => (
  <div className="movie">
    <img src={movie.Poster} alt={movie.Title} className="w-full rounded-lg" />
    <h3>{movie.Title}</h3>
  </div>
);

export default Movie;
