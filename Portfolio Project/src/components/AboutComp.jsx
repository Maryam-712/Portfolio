
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

        /* =========================
   TABLET
========================= */

@media (max-width: 1024px) {

  .container {
    width: 90%;
    height: auto;
    min-height: 100vh;
    padding-top: 5rem;
    padding-bottom: 5rem;
    gap: 4rem;
  }

  .cont-1 {
    width: 55%;
  }

  .cont-2 {
    width: 45%;
  }

  .main-heading {
    font-size: 3rem;
  }

  .sub-heading {
    font-size: 1.3rem;
  }

  .para {
    font-size: 1.6rem;
  }

  .about-btn {
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  .hero-image img {
    width: 100%;
    max-width: 450px;
  }

  .skills ul {
    gap: 1.2rem;
    margin-top: 2rem;
  }

  .skills li {
    font-size: 1.4rem;
  }

  .skill-head {
    font-size: 1.7rem;
  }
}


/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {

  .container {
    width: 90%;
    height: auto;
    min-height: auto;
    padding-top: 4rem;
    padding-bottom: 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 3rem;
  }

  .cont-1 {
    width: 100%;
    align-items: center;
    text-align: center;
  }

  .cont-2 {
    width: 100%;
    text-align: center;
  }

  .main-heading {
    font-size: 2.5rem;
    padding: 0.5rem 0;
  }

  .sub-heading {
    font-size: 1.2rem;
    padding: 4px 10px;
    letter-spacing: 0.08rem;
  }

  .para {
    font-size: 1.5rem;
    line-height: 1.6;
  }

  .about-btn {
    font-size: 1.4rem;
    margin-top: 1.5rem;
  }

  .hero-image img {
    width: 80%;
    max-width: 350px;
  }

  .skill-head {
    font-size: 1.6rem;
    padding-top: 1rem;
  }

  .skills ul {
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
    padding: 0;
  }

  .skills li {
    font-size: 1.3rem;
    padding: 5px 9px;
  }
}


/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 480px) {

  .container {
    width: 92%;
    padding-top: 3rem;
    padding-bottom: 3rem;
    gap: 2.5rem;
  }

  .main-heading {
    font-size: 2rem;
  }

  .sub-heading {
    font-size: 1rem;
    padding: 4px 8px;
  }

  .para {
    font-size: 1.3rem;
    line-height: 1.6;
  }

  .about-btn {
    font-size: 1.2rem;
    margin-top: 1.2rem;
  }

  .hero-image img {
    width: 90%;
    max-width: 300px;
  }

  .skill-head {
    font-size: 1.4rem;
  }

  .skills ul {
    gap: 0.7rem;
    margin-top: 1.2rem;
  }

  .skills li {
    font-size: 1.1rem;
    padding: 5px 8px;
  }
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