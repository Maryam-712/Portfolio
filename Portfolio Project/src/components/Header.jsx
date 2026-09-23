import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'
import { PrimaryButton } from '../styles/button'
import { FaEnvelope } from "react-icons/fa6";


const Header = () => {
  return (
    <MainHeader>
      <div className="header-container">
        <NavLink to="/" className="logo-cont">
          <img src="images/Maryam.png" alt="logo" className='logo' />

        </NavLink>
        <Navbar />
        <div className='email'>
        <a href="">
                     <FaEnvelope className='icons'/>
                     </a>
                     </div>
      </div>
    </MainHeader>
  )
}

const MainHeader = styled.header`
    padding: 0.5rem 2rem;
    height: 10%;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    width:100%;
     border-bottom: 1px solid rgba(179, 55, 145, 0.15);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
     position: relative;
  z-index: 10;
    .header-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width:90%;
    margin: 0 auto;
    gap: 5rem;
    }
  
    a{
      width:100%;
     
    }
      .logo {
      
      width: 6vw;
      max-width: fit-content;
      height: auto;

    
    }

    

    .email{
     display: flex;
     align-items: end;
     
    
    }

    .icons {
     color: ${({theme})=> theme.colors.white};
     background-color:  ${({theme})=> theme.colors.primary};
    
     font-size: 4rem;
     padding: 8px;
     border-radius: 15%;
     
    }
`;
export default Header