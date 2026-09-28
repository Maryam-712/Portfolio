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
              <a href="https://www.linkedin.com/in/maryam-mansoor-8a52aa24b/">
              <FaLinkedin className='icons'/>
              </a>
              <a href="https://github.com/Maryam-712">
              <FaGithub className='icons'/>
              </a>
            </div>
            <a href="" className='email'>msmaryammansoor712@gmail.com</a>

        </div>

        <div className='copyright'>
          Copyright©2026: Designed by Maryam
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
background-image: url('./images/footer5.png');
background-size: 100% auto;
  background-position: center ;
  background-repeat: no-repeat;

 background-color: ${({theme})=> theme.colors.secondary};
 margin-bottom: -11px;
 


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
  font-size: 1.7rem;

  
 
 }

.navbarlink{
 border-left: 2px solid ${({theme})=> theme.colors.gradient} ;
 padding: 0 2rem;

 color: ${({theme})=> theme.colors.white};
}

.nav-home{
padding:0 2rem;
}

.navlist a{
color:${({theme})=> theme.colors.white};;
}

.socials{
display: flex;
gap: 2rem;
font-size: 2.5rem;
color: ${({theme})=> theme.colors.white};



}

.socials a{
color: ${({theme})=> theme.colors.white};
font-size: 2rem;
border: 2px solid ${({theme})=> theme.colors.white};
border-radius: 50%;
padding: 0.5rem;
display: flex;
align-items: center;

}

.logomail{
 margin-bottom: 2.5rem;
}

.logomail a{
color: ${({theme})=> theme.colors.white};
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

.email{
 color: ${({theme})=> theme.colors.white};
 font-family: "Inter";
 font-size: 1.5rem;
}

/* =========================
   TABLET
========================= */

@media (max-width: 1024px) {

  .container {
    padding: 4rem 3rem;
    gap: 2rem;
  }

  .footerlogo {
    width: 15%;
  }

  img {
    margin-top: -70px;
  }

  .navlist {
    font-size: 1.5rem;
  }

  .navbarlink,
  .nav-home {
    padding: 0 1.5rem;
  }

  .socials {
    gap: 1.5rem;
  }

  .socials a {
    font-size: 1.8rem;
  }

  .email {
    font-size: 1.3rem;
  }
}


/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {


  .container {
  height: 40vh;
    padding: 4rem 2rem;
    gap: 1.8rem;
  }

  .footerlogo {
    width: 22%;
  }

  img {
    margin-top: -60px;
  }

  .logomail {
    margin-bottom: 1.5rem;
  }

  .navlist {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    font-size: 1.4rem;
  }

  .navbarlink {
    border-left: none;
    padding: 0;
  }

  .nav-home {
    padding: 0;
  }

  .socials {
    gap: 1rem;
  }

  .socials a {
    font-size: 1.6rem;
    padding: 0.45rem;
  }

  .email {
    font-size: 1.1rem;
    text-align: center;
  }

  .copyright {
    padding: 0.8rem;
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }
}


/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 480px) {

  .container {
   height: 20vh;
    padding: 3.5rem 1.2rem;
    gap: 1.5rem;
  }

  .footerlogo {
    width: 20%;
    
  }

  img {

    margin-top: -80px;
  }

  .navlist {
    font-size: 1.2rem;
    gap: 0.8rem;
  }

  .socials {
    gap: 0.8rem;
  }

  .socials a {
    font-size: 1.4rem;
    padding: 0.4rem;
  }

  .email {
    font-size: 1rem;
  }

  .copyright {
    font-size: 0.85rem;
    padding: 0.7rem 0.5rem;
  }
}


/* =========================
   EXTRA SMALL
========================= */

@media (max-width: 360px) {

  .container {
    padding: 3rem 1rem;
  }

  .footerlogo {
    width: 35%;
  }

  img {
    margin-top: -35px;
  }

  .navlist {
    font-size: 1.1rem;
  }

  .socials a {
    font-size: 1.2rem;
    padding: 0.35rem;
  }

  .email {
    font-size: 0.9rem;
  }

  .copyright {
    font-size: 0.75rem;
  }
}

`;

export default Footer