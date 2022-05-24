import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import useMovie from '../../app/services/useMovie';
import Nav from '../../components/Nav/Nav'
import MovieCardList from '../../components/MovieCardList/MovieCardList';
import MainButton from '../../components/reusable components/MainButton';

import './SeriesScreen.scss'

const SeriesScreen = () => {
    const {getSeries} = useMovie()
    const [page, setPage] = useState(1)
    const [newItemLoading, setNewItemLoading] = useState(false)
    const {seriesData} = useSelector(state => state.moviesData)

    const onClickHandler = () => {
        setPage(page + 1)
    }

  return (
    <div>
        <Nav/>
        <MovieCardList
            data={seriesData} 
            fetchUrl={() => getSeries(page)} 
            page={page} 
            setNewItemLoading={setNewItemLoading}/>
        <div className='search__button'>
            <MainButton name='Load more' onSubmit={onClickHandler} disabled={newItemLoading}/>
        </div>
    </div>
  )
}

export default SeriesScreen