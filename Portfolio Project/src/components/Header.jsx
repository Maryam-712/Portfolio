import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'
import { PrimaryButton } from '../styles/button'


const Header = () => {
  return (
    <MainHeader>
      <div className="header-container">
        <NavLink to="/" className="logo-cont">
          <img src="images/logo.png" alt="logo" className='logo' />

        </NavLink>
        <Navbar />
        <PrimaryButton className='btn letstalk-btn'>
          <NavLink to="/contact"> let's talk</NavLink>
        </PrimaryButton>
      </div>
    </MainHeader>
  )
}

const MainHeader = styled.header`
    padding: 0.8rem 2rem;
    height: 10%;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    
    
   
    
    .header-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width:90%;
    margin: 0 auto;
    
    }
  
    a{
      width:100%;
    }
      .logo {
      
      width: 35%;
      height: auto;

    
    }

    .letstalk-btn{
      
      margin: 0 2rem;
      padding: 1rem;
      width: 25%
    }
`;
export default Header