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
    <div>
      <h3 className='sub-heading'>A little</h3>
        <h2 className='main-heading'>About Me</h2>
    </div>
    </Aboutsec>
  )
}

const Aboutsec = styled.section`
container {
  
  width: 90%;
  margin: 0 auto;
  padding-top: 4rem;
  
}

/* Section */



.main-heading {
    text-align: center;
    padding: 1rem 0rem;
    margin-bottom:4rem;
    color: ${({theme}) => theme.colors.black};
}

 .sub-heading {
   margin-bottom: 0; 
    color: ${({theme}) => theme.colors.primary};
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
}
`;

export default About