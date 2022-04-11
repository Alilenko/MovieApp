import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {moviesFetched, moviesFetching} from '../../../app/Slice/MovieSlice'
import MovieListItem from '../MovieListItem/MovieListItem'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import './MovieList.scss'
import Spinner from '../../Spinner/Spinner';

const MovieList = ({title, fetchUrl}) => {
    const [movies, setMovies] = useState([])
    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.moviesData)

    useEffect(() => {
        dispatch(moviesFetching())
        fetchUrl()
        .then(res => dispatch(moviesFetched(res), setMovies(res)))
        .then()
      },[])

    useEffect(() => {
    }, [loading])

    if(loading){
        return <Spinner/>
    }

  return (
      <div className='container'>
        <div className='title'>{title}</div>
        <Swiper
           modules={[Navigation, A11y]}
           slidesPerView={"auto"}
           spaceBetween={10}
           slidesPerGroup={5}
           navigation
    >
        {movies?.map(item => (
            <SwiperSlide className='slide__item' key={item.id}>
                <MovieListItem  movie={item}/>
            </SwiperSlide>     
        ))}
    </Swiper>
    </div>
  )
}


export default MovieList