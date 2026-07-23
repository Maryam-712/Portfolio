import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'


const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
        <img src="public\images\Mm (1).png" alt="logo" className='logo'/>
        
        </NavLink>
        <Navbar/>

    </MainHeader>
  )
}

const MainHeader = styled.header`
    padding: 0.8rem 2rem;
    height: 10%;
    background-color: ${({theme}) => theme.colors.backgroundColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    
    
  
   
    .logo {
    
    width: 12%;
    height: auto;
    }
`;
export default Header