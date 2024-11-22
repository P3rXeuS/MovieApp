import React from 'react';
import { useNavigate } from 'react-router-dom';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  const navigate = useNavigate();

  return (
    <div className="movie-container grid grid-cols-3 gap-4 p-4">
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="cursor-pointer"
            onClick={() => navigate(`/movie/${movie.imdbID}`)}
          >
            <Movie movie={movie} />
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;
