import React from 'react'

import './MovieListItem.scss'
import notFound from '../../../assets/not-found.jpeg'

const MovieListItem = ({movie}) => {

    return (
    <div className='item'>
       <img 
        className='image' 
        alt={movie?.name || movie?.title} 
        src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : notFound}/> 
        <div className='hover__title'>{movie?.name || movie?.title}</div>
    </div>
  )
}

export default MovieListItem