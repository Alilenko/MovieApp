import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import './Nav.scss'
import logo from '../../assets/logo.svg'
import { IoPeopleCircleOutline, IoReorderThreeOutline, IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router';

const Nav = () => {
    const [bgColor, setBgColor] = useState()
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            setBgColor(true)
        } else {
            setBgColor(false)
        }
    } 
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

  return (
    <div className={bgColor ? 'row nav__show' : 'row'}>
        <div className='container'>
            <div className='nav'>
                <div className='menu__burger' onClick={() => setMenuOpen(!menuOpen)}>
                    <IoReorderThreeOutline size={48} color={'#fff'} />
                </div>
                <img className='nav__img' src={logo}/>
                <div className={menuOpen && window.innerWidth <= 767 ? 'content_show': 'content'}>
                    <Link className='nav__link' to='/'>Main Page</Link>
                    <Link className='nav__link' to='/series'>Series</Link>
                    <Link className='nav__link' to='/movies'>Movies</Link>
                </div>
                <IoSearch onClick={() => navigate('/search')} size={28} color={'#fff'} style={{fontWeight: 500, opacity: .7, paddingRight: 10}}/>
                <IoPeopleCircleOutline size={48} color={'#fff'} onClick={() => navigate('/profile')}/>
            </div>
        </div>
    </div>
  )
}

export default Nav