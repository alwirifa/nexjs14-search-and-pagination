"use client"

import React from 'react';

type Movie = {
  id: number;
  title: string;
  year: number;
  genre: string;
};

const data: Movie[] = [
  { id: 1, title: "Inception", year: 2010, genre: "Sci-Fi" },
  { id: 2, title: "The Shawshank Redemption", year: 1994, genre: "Drama" },
  { id: 3, title: "The Godfather", year: 1972, genre: "Crime" },
  { id: 4, title: "The Dark Knight", year: 2008, genre: "Action" },
  { id: 5, title: "Pulp Fiction", year: 1994, genre: "Crime" },
  { id: 6, title: "Forrest Gump", year: 1994, genre: "Drama" },
  { id: 7, title: "Interstellar", year: 2014, genre: "Sci-Fi" },
  { id: 8, title: "Fight Club", year: 1999, genre: "Drama" },
  { id: 9, title: "The Matrix", year: 1999, genre: "Sci-Fi" },
  { id: 10, title: "Goodfellas", year: 1990, genre: "Crime" },
];

export const countTotalPages = (filteredData: Movie[], limit: number) => {
  return Math.ceil(filteredData.length / limit);
};

type Props = {
  query: string;
};

const Invoices: React.FC<Props> = ({ query }) => {
  const filteredData = data.filter((movie) =>
    movie.title.toLowerCase().includes(query)
  );


  
  return (
    <div>
      {filteredData.map((movie)=> (
          <div key={movie.id}>
            {movie.title}
          </div>
      ))}
    </div>
  );
};

export default Invoices;