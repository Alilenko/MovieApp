import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import Banner from '../components/Banner/Banner'
import Nav from '../components/Nav/Nav'
import MovieList from '../components/reusable components/MovieList/MovieList'
import useMovie from '../app/services/useMovie';
import { useNavigate } from 'react-router';

const Home = () => {
  const { getTopRated, getComedyMovies, getTranding} = useMovie()
  let navigate = useNavigate();
  const {currentUser} = useSelector(state => state.currentUser)

useEffect(()=> {
    if(!currentUser){
      navigate('/login')
    }
},[currentUser])

  return (
    <>
      <Nav/>
      <Banner/>
      <MovieList title='Tranding' fetchUrl={getTranding}/>
      <MovieList title='Top rated' fetchUrl={getTopRated}/>
      <MovieList title='Comedy Movie' fetchUrl={getComedyMovies}/>
    </>
  )
}

export default Home