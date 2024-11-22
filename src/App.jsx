import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchMovies = async (searchTerm = 'movie') => {
    try {
      const url = `https://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=${API_KEY}`;
      const { data } = await axios.get(url);
      setMovies(data.Search || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
    fetchMovies(searchTerm);
  };

  return (
    <Router>
      <Header title="Movie App" onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
