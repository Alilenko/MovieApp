import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router';
import './MovieListItem.scss'
import notFound from '../../../assets/not-found.jpeg'

const MovieListItem = ({movie}) => {
  const navigate = useNavigate()

    return (
    <div onClick={() => navigate(`/movies/${movie?.id}`)} className='item'>
       <img 
        className='image' 
        alt={movie?.name || movie?.title} 
        src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : notFound}/> 
        <div className='hover__title'>{movie?.name || movie?.title}</div>
    </div>
  )
}

export default MovieListItem