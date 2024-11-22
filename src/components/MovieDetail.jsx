import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchMovieDetail = async () => {
    const url = `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);
  };

  useEffect(() => {
    fetchMovieDetail();
  }, [id]);

  if (!movie) return (
    <div className="flex justify-center items-center min-h-screen">
      Loading...
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white border-2 border-gray-200 rounded-lg shadow-lg p-6 max-w-7xl w-full">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <img 
              src={movie.Poster} 
              alt={movie.Title} 
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>

          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-black mb-4">{movie.Title}</h2>
            
            <div className="space-y-3 text-black">
              <p className="flex gap-2">
                <span className="font-semibold">Rated:</span>
                <span>{movie.Rated}</span>
              </p>
              
              <p className="flex gap-2">
                <span className="font-semibold">Released:</span>
                <span>{movie.Released}</span>
              </p>
              
              <p className="flex gap-2">
                <span className="font-semibold">Genre:</span>
                <span>{movie.Genre}</span>
              </p>
              
              <div className="space-y-2">
                <p className="font-semibold">Plot:</p>
                <p className="text-gray-700 leading-relaxed">{movie.Plot}</p>
              </div>
              
              <p className="flex gap-2">
                <span className="font-semibold">IMDb Rating:</span>
                <span>{movie.imdbRating}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;