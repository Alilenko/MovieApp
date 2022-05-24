import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
min-width: 120px;
display: flex;
justify-content: center;
align-items: center;
  background-color:  rgb(135, 7, 7);
  border-radius: 5px;
  margin: 0.5em 1em;
  padding: 10px 20px;
  border: none;
  color: white;
  transition: 1s;   
    &:hover{
        background-color: rgb(108 3 3); 
    }
    &:disabled{
      background-color: rgb(108 3 3)
    }
`;

const MainButton = ({name, onSubmit, disabled}) => {

  return (
    <ButtonStyle disabled={disabled} onClick={onSubmit}>{name}</ButtonStyle>
  )
}

export default MainButton