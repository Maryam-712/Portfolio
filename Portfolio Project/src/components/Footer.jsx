import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {FaGithub, FaFacebook, FaEnvelope, FaInstagram,  FaLinkedin } from "react-icons/fa6";



const Footer = () => {
  return (
    <Wrapper>
        <div className="container">
          <div className='logomail'>
          <picture className='footerlogo'>
          <img src="images/Maryam.png" alt="logo" />
          </picture>
          <a href="">msmaryammansoor712@gmail.com</a>
           </div>
           <div className='menuicon'>
            <ul className="navlist">
                <li>
                    <NavLink className="nav-home" to="/" >Home</NavLink>
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
            <div className="socials">
              <a href="">
              <FaFacebook className='icons'/>
              </a>
              <a href="">
              <FaInstagram className='icons'/>
              </a>
              <a href="">
              <FaLinkedin className='icons'/>
              </a>
              <a href="">
              <FaGithub className='icons'/>
              </a>
            </div>


        </div>

        <div className='copyright'>
          Copyright©2026: Designed by Maryam
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
background-image: url('./images/projectsec.png');
background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

 background-color: ${({theme})=> theme.colors.footer};
 margin-bottom: -11px;
 margin-top:0px;


 .container{
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 2.5rem;
 padding: 5rem;
  
 }

 .logomail{
 display: flex;
 flex-direction: column;
 align-items:center;
 gap: 0.1rem;
 }

 .footerlogo{
 width: 10%;
 margin: 0 auto;

 }

 img{
 width: 100%;
 height: auto;
 border-radius: 50%;
 margin-top:-100px;
 z-index: 1;
 position: relative;

 }

 .navlist{
  display:flex;
  justify-content: center;
  font-family: 'Playfair display', Sans Serif;
  font-size: 1.5rem;
  
  
 
 }

.navbarlink{
 border-left: 2px solid white;
 padding: 0 2rem;

 color: ${({theme})=> theme.colors.primary};
}

.nav-home{
padding:0 2rem;
}

.navlist a{
color:${({theme})=> theme.colors.primary};;
}

.socials{
display: flex;
gap: 2rem;
font-size: 2rem;
color: ${({theme})=> theme.colors.primary};



}

.socials a{
color: ${({theme})=> theme.colors.primary};
font-size: 1.5rem;
border: 2px solid ${({theme})=> theme.colors.primary};
border-radius: 50%;
padding: 0.5rem;
display: flex;
align-items: center;

}

.logomail{
 margin-bottom: 2.5rem;
}

.logomail a{
color: ${({theme})=> theme.colors.primary};
font-size:1.2rem;
}

.copyright{
background-color: ${({theme})=>theme.colors.primary};
color: white;
text-align: center;
padding: 1rem;
font-size: 1.2rem;
font-family: 'Inter', Sans Serif;
letter-spacing:0.2rem;
}

`;

export default Footer