import React from 'react'
import Nav from '../components/Nav/Nav'
import img from '../assets/fatal.png'
import MainButton from '../components/reusable components/MainButton'
import { useNavigate } from 'react-router';

const NotFoundScreen = () => {
    const navigate = useNavigate()
  return (
      <div>
          <Nav/>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
          <img  src={img} alt='not found'/>
          <div style={{color: 'white', fontSize: 36, fontWeight: 700, marginBottom: 10}}>Opps... Something went wrong</div>
          <MainButton name='Main Page' onSubmit={() => navigate('/')}/>
          </div>  
      </div>

  )
}

export default NotFoundScreen