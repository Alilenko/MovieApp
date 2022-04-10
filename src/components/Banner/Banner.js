import React, {useEffect, useState} from 'react'
import useMovie from '../../app/services/useMovie';
import Button from '../reusable components/Button';
import './banner.scss';
import { IoCaretForwardCircle, IoInformationCircleOutline } from "react-icons/io5";

const Banner = () => {
    const {getTranding, fetchTranding} = useMovie()
    const [movie, setMovie] = useState([])
  
    useEffect(() => {
      getTranding()
      .then(res => setMovie(res[Math.floor(Math.random() * res.length - 1)]))
    },[])

    function transcate(string, n){
        return string?.length > n ? string.substr(0, n-1) + '...' : string
    }

  return (
    <div style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`, 
        height: 650,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative',
    }}>
        <div className='container'>
        <div className='content__row'>
            <div className='title'>{movie?.name || movie?.title}</div>
            <div className='descr'>{transcate(movie?.overview, 150)}</div>
            <div className='buttons'>
                <Button primary={true} name='To watch' icon={<IoCaretForwardCircle style={{ fontSize: 28, paddingRight: 5}}/>} />
                <Button name='More details' icon={<IoInformationCircleOutline style={{ fontSize: 28, paddingRight: 5}}/>}/>
            </div>
        </div>
        </div>
        <div className='fade__bottom'></div>
    </div>
  )
}

export default Banner