import React, {useEffect} from 'react'
import Herosection from './components/Herosection'
import { data } from 'react-router-dom'
import { useGlobalContext } from './context'
import styled from 'styled-components'

const About = () => {


  /* const {updateAboutPage} = useGlobalContext();

useEffect(() => {
  updateAboutPage()
}, []) */

  // const data = {
    
  //   image: 'images/about.png',
  //   para: 'I am a Frontend Developer who enjoys turning ideas into responsive, user-friendly, and visually engaging web applications. My focus is on writing clean code, building modern interfaces, and creating seamless user experiences using React, Next.js, and WordPress.',
  // }
    return (
      <Aboutsec>
     <div className='container'>
               
                
              
                <div className='cont-1 '>
                    <h3 className='sub-heading'>A little</h3>
                    <h2 className='main-heading'>About Me</h2>
                    <div className='cont-2'>
                    <p className='para'> I’m a Computer Science graduate who enjoys turning ideas into working products. 
                        I started with WordPress and grew into JavaScript, React, Next.js, and full-stack development.

I like understanding the “why” behind the code—from the interface users see to the APIs, data, and logic running underneath.

Currently, I’m building with modern web technologies and exploring AI-powered applications.</p>
                    </div>
                    </div>
                    <div className='content'>
                      <div className='details'>
                  <div>
                    <h3>Education</h3>
                    <p>BSCS</p>
                  </div>
                  </div>
                    <div className='hero-image'>
                    <picture>
                        <img src="/images/about.png" alt='about-image' className='about-img'/>
                    </picture>
                </div>
                
                </div>
                    </div>
    </Aboutsec>
  )
}

const Aboutsec = styled.section`
.container {
  
  width: 90%;
  margin: 0 auto;
  padding-top: 4rem;
  
}

/* Section */



.main-heading {
    text-align: center;
    padding: 1rem 0rem;
    margin-bottom:4rem;
    color: ${({theme}) => theme.colors.primary};
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
        justify-content: center;
        align-items:center;
      padding: 4rem 0;
     
        
    }

     .cont-2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
    }

    .para{
        color: ${({ theme }) => theme.colors.text};
        font-family: "Inter";
        font-size: 2rem;
        line-height: 1.5;
    }

    .hero-image{
    background-color: ${({ theme }) => theme.colors.gradient};
    border-radius: 10px;
 

}

.about-img{
width: 100%;

}

.content{
  display: flex;
  flex-direction: row;
   margin-bottom: 10rem;

}

.details{
width: 100%;
}
`;

export default About