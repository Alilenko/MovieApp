import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav/Nav'
import SearchInput from '../../components/reusable components/SearchInput/SearchInput'
import useMovie from '../../app/services/useMovie';
import {useSelector, useDispatch} from 'react-redux'
import {changeSearchList} from '../../app/Slice/MovieSlice'
import MovieListItem from '../../components/reusable components/MovieListItem/MovieListItem';
import './SearchScreen.scss'

const SearchScreen = () => {
    const [search, setSearch] = useState('')
    const {getSearchRequest} = useMovie()
    const dispatch = useDispatch()
    const {searchList} = useSelector(state => state.moviesData)

    useEffect(() => {
        if(search !== ''){
            getSearchRequest(search).then(res => dispatch(changeSearchList(res)))
        }
    }, [search])

  return (
      <>
      <Nav/>
    <div className='search__screen'>
        <SearchInput search={search} setSearch={setSearch}/>
        <div className='search__list'>
        {searchList.map(item => (
            <MovieListItem key={item.id} movie={item}/>
        ))}
        </div>

    </div>
    </>
  )
}

export default SearchScreen