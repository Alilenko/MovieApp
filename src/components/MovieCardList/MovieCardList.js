import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {moviesFetched, moviesFetching, seriesFetched} from '../../app/Slice/MovieSlice'
import MovieListItem from '../reusable components/MovieListItem/MovieListItem'
import Spinner from '../Spinner/Spinner'

import './MovieCardList.scss'

const MovieCardList = ({fetchUrl, page, setNewItemLoading, data}) => {
    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.moviesData)

    useEffect(() => {
      dispatch(moviesFetching())
    }, [])

      useEffect(() => {
          setNewItemLoading(true)
          fetchUrl()
          .then(res => dispatch(seriesFetched(res)))
          .then(() => setNewItemLoading(false))
      }, [page])

  return (
      <div className='container'>
        {loading ? <div style={{justifySelf: 'center', width: '100%'}}><Spinner /></div> : null}
        {data?.map((item, i) => (
            <div className='slide__item' key={i}>
                <MovieListItem  movie={item}/>
            </div>     
        ))}
    </div>
  )
}


export default MovieCardList