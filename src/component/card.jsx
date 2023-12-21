import React from 'react';
import './card.css';
import Movie from './movie.json';
import SingleCard from './SingleCard';

export default function Card() {
  return (
    <div className='card'>
      {Movie.map((ele) => (
        <SingleCard time={ele.Runtime} author ={ele.Actors} plot ={ele.Plot} action={ele.Genre} banner ={ele.Images[1]} poster = {ele.Images[0]} title ={ele.Title}></SingleCard>
      ))}
      
    </div>
  );
}
