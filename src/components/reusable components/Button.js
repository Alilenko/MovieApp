import React from 'react'
import styled, { css } from 'styled-components'

const ButtonStyle = styled.button`
display: flex;
justify-content: center;
align-items: center;
  background-color: rgb(120, 120, 120);
  border-radius: 5px;
  margin: 0.5em 1em;
  padding: 10px 20px;
  border: none;
  color: white;
  transition: 1s;   
    &:hover{
        background-color: rgb(120, 120, 120, 0.7); 
    }
  ${props => props.primary && css`
    background-color: #fff;
    color: black;
    transition: 1s;
    &:hover{
        background-color: rgba(255, 255, 255, 0.6)
    }
  `}
`;


const Button = ({name, primary, icon, onClick}) => {

  return (
    <ButtonStyle onClick={onClick} primary={primary}>
        {icon }
        {name}</ButtonStyle>
  )
}

export default Button