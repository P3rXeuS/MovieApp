import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Header = ({ title, onSearch }) => (
  <header className="header">
    <div className="flex items-center">
      <h1 className="mr-4 font-bold text-lg">
        <Link to="/" className="text-white hover:text-gray-300">
          {title}
        </Link>
      </h1>
    </div>
    <Search onSearch={onSearch} />
  </header>
);

export default Header;
