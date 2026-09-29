import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { CgMenu,  CgCloseO  } from "react-icons/cg";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

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
                color: ${({theme}) => theme.colors.primary};
                font-size: 1.8rem;
                font-weight: 500;
                letter-spacing: 0.2rem;
                font-family: "Playfair display", sans-serif;
                text-transform: uppercase;
                transition: color 0.3s linear;
            }
            
            &:hover,
            &:active {
            color: ${({theme}) => theme.colors.secondary};
            }
        }
    }
        .menu-btn{
        display: none;

            .close-outline{
                display: none;
            }
        }

        .menu-btn[name= "close-outline"]{
        display: none;
            
        }

        @media (max-width: 768px){
            .menu-btn{
                display: inline-block;
                z-index: 999;

                .menu-nav-icon{
                    font-size: 3rem;
                    color: ${({theme}) => theme.colors.secondary};

                }
            }

            .navlist{
             width: 100vw;
             height: 100vh;
             position: absolute;
             top:0;
             left: 0;
            background-color: ${({theme}) => theme.colors.backgroundColor};

             transform: translate(100%);

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            visibility: hidden;
            opacity: 0;
            }

            li {
            .navbarlink{
                &:link,
                &:visited{
                    font-size: 2.5rem;
                        }
                 }
            }

            .active .menu-nav-icon{
             display: none;
             font-size: 3rem;
             position: absolute;
             top: 50%;
             right: 8%;
             color: ${({theme}) => theme.colors.secondary};
             z-index: 999;

            }

            .active .close-outline{
            display: inline-block;
            }

            .active .navlist{
            visibility: visible;
            opacity: 1;
            transform: translateX(0%);
            z-index: 999;

            }
        }
  `;
  return (
    <Nav>
        <div className={openMenu ? 'menuicon active' : "'menuicon"}>
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


            <div className='menu-btn'>
            <CgMenu name= 'menu-outline' className='menu-nav-icon'
            onClick={()=> setOpenMenu(true)}/>
            <CgCloseO  name= 'close-outline' className='menu-nav-icon 
            close-outline' onClick={()=> setOpenMenu(false)}/>


            </div>
        </div>
    </Nav>
  )

  
}

export default Navbar