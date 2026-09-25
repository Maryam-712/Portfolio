
import styled from 'styled-components'
import { PrimaryButton, SecondaryButton } from '../styles/button';

const AboutComp = () => {

    const AboutComp = styled.section`
    background-color: ${({ theme }) => theme.colors.backgroundColor};
      position: relative;
      
    
      .container {
      
      width: 90%;
      height: 100vh;
      margin: 0 auto;
      padding-top: 4rem;
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 6rem;

      
    }
       .main-heading {
        text-align: center;
        padding: 1rem 0rem;
       
        color: ${({ theme }) => theme.colors.primary};
    }
    
     .sub-heading {
        margin-bottom: 0; 
        color: ${({ theme }) => theme.colors.secondary};
        //background-color: ${({ theme }) => theme.colors.space};
        border: 1px solid ${({ theme }) => theme.colors.space};
        border-radius: 8px;
        display: inline-block;
        width: fit-content;
        padding: 5px 12px;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
        font-family: "Playfair display";
        line-height: 1.7;
        letter-spacing: .1rem;
        text-transform:  uppercase;
    }

    

    .cont-1{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items:start;
        width: 50%;
        
    }

    .about-btn{
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.secondary};
      background-color: inherit;
      box-shadow: none;
      font-size: 1.7rem;
      font-weight: 600;
      text-align: center;
      font-family: "Playfair display";
      margin-top: 3rem;
    }

    .about-btn:hover{
    color: ${({ theme }) => theme.colors.white};
      border-color: ${({ theme }) => theme.colors.secondary};
      background-color:${({ theme }) => theme.colors.secondary} ;
    }

    .hero-image img {
    width: 100%;
    max-width: 550px;
    }

    .cont-2{
    
    }

    .para{
        color: ${({ theme }) => theme.colors.text};
        font-family: "Inter";
        font-size: 2rem;
        line-height: 1.5;
    }
        .skills ul{
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: start;
        gap: 2rem;
        margin-top: 3rem;
        }

        .skills li{
        font-size: 1.7rem;
        font-family: "Inter";
        letter-spacing: .1rem;

        background-color:  ${({ theme }) => theme.colors.secondary};
        color:  ${({ theme }) => theme.colors.white};
        padding: 6px 10px;
        border-radius: 5px;
        }

      .skill-head {
        color: ${({ theme }) => theme.colors.primary};
        
      
        padding-top:2rem;
        font-size: 2rem;
        font-weight: 600;
        font-family: "Playfair display"
        line-height: 1.7;
        letter-spacing: .1rem;
        text-transform:  uppercase;
        }

      `;
  return (
    <AboutComp>
        <div className='container'>
               
                
               <div className='hero-image'>
                    <picture>
                        <img src="/images/aboutimg.png" alt='about-image' />
                    </picture>
                </div>
                <div className='cont-1 '>
                    <h3 className='sub-heading'>A little</h3>
                    <h2 className='main-heading'>About Me</h2>
                    <div className='cont-2'>
                    <p className='para'> I’m a Computer Science graduate who enjoys turning ideas into working products. 
                        I started with WordPress and grew into JavaScript, React, Next.js, and full-stack development.

I like understanding the “why” behind the code—from the interface users see to the APIs, data, and logic running underneath.

Currently, I’m building with modern web technologies and exploring AI-powered applications.</p>
                    </div>
                    <h4 className='skill-head'>My Skill Set</h4>
                    <div className="skills">
                        <ul ><li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>REACT.JS</li>
                        <li>NEXT.JS</li>
                        <li>NODE.JS</li>
                        <li>EXPRESS.JS</li>
                        <li>MONGODB</li>
                        <li>WORDPRESS</li>
                        <li>ELEMENTOR</li></ul>
                    </div>
                   <a href="/about">
                    <SecondaryButton className='about-btn'>Get to know more </SecondaryButton>
                    </a>
                </div>

                </div>
                
    </AboutComp>
  )
}

export default AboutComp