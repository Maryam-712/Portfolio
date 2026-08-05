import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    const Nav = styled.nav`
    
    
    .navlist{
        display: flex;
       gap:3rem;
      
        
    }

   
    li{
        list-style: none;

        .navbarlink{
            &:link,
            &:visited{
                text-decoration:none;
                display: inline-block;
                color: ${({theme}) => theme.colors.white};
                font-size: 1.5rem;
                font-weight: 500;
                letter-spacing: 0.2rem;
                font-family: "Sora", sans-serif;
                text-transform: uppercase;
                transition: color 0.3s linear;
            }
            
            &:hover,
            &:active {
            color: ${({theme}) => theme.colors.hover};
            }
        }
    }
  `;
  return (
    <Nav>
        <div className='menuicon'>
            <ul className="navlist">
                <li>
                    <NavLink className= "navbarlink" to="/" >Home</NavLink>
                </li>
                 <li>
                    <NavLink className= "navbarlink" to="/about" >About</NavLink>
                </li>
                 <li>
                    <NavLink className= "navbarlink" to="/project" >Projects</NavLink>
                </li>
                 <li>
                    <NavLink className= "navbarlink" to="/contact" >Contact</NavLink>
                </li>
            </ul>
            
            
        </div>
    </Nav>
  )

  
}

export default Navbar