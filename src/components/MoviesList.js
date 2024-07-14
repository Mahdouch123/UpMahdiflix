// MoviesList.js

import React from 'react';
import Movies from '../Movies'; // Adjust the path based on your directory structure
import MovieCard from './MovieCard'; // Import the MovieCard component
import './Movies.css'; // Import your CSS file for styling

const MoviesList = () => {
  return (
    <div className="movies-list">
      {Movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MoviesList;
