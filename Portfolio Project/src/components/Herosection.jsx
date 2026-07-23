import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { PrimaryButton } from '../styles/button';

const Herosection = () => {
    return (
        <Wrapper>
            <div className='container grid grid-two-column'>
                <div className="hero-data">
                    <p className='hero-top-data'>Hi, I'm</p>
                    <h1 className='hero-heading'>Maryam Mansoor</h1>
                    <p className='hero-para'> I build modern, responsive and
                        high-performance web applications
                        with React, Next.js and WordPress.
                    </p>
                    <PrimaryButton className='btn hireme-btn'>
                        <NavLink to="/contact"> Hire Me</NavLink>
                    </PrimaryButton>
                </div>

                <div className='hero-image'>
                    <picture>
                        <img src='images/laptop.png' alt='hero-image' />
                    </picture>
                </div>
            </div>
        </Wrapper>
    )

}

const Wrapper = styled.section`
 padding: 8rem 0;
  background: #fcfcfd;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }

  .grid {
    display: grid;
    gap: 5rem;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .hero-data {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .hero-top-data {
    font-size: 1.8rem;
    color: #d946ef;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .hero-heading {
    font-size: 6rem;
    font-family: "Sora", sans-serif;
    font-weight: 700;
    line-height: 1.1;

    background: linear-gradient(
      135deg,
      #ec4899,
      #d946ef,
      #8b5cf6
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-para {
    font-size: 1.8rem;
    color: #6b7280;
    line-height: 1.8;
    max-width: 55rem;
  }

  .hireme-btn {
    margin-top: 1rem;
    width: fit-content;
  }

  .hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .hero-image::before {
    content: "";
    position: absolute;
    width: 380px;
    height: 380px;
    border-radius: 50%;
    background: rgba(217, 70, 239, 0.12);
    filter: blur(70px);
    z-index: 0;
  }

  .hero-image img {
    width: 100%;
    max-width: 550px;
    position: relative;
    z-index: 1;

    animation: float 4s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-15px);
    }

    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 998px) {
    .grid-two-column {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .hero-data {
      align-items: center;
    }

    .hero-heading {
      font-size: 4.5rem;
    }

    .hero-image {
      order: -1;
    }

    .hero-image img {
      max-width: 420px;
    }
  }

  @media (max-width: 768px) {
    padding: 6rem 0;

    .hero-heading {
      font-size: 3.8rem;
    }

    .hero-para {
      font-size: 1.6rem;
    }

    .hero-image img {
      max-width: 320px;
    }
  }

`;

export default Herosection