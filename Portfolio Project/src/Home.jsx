import React, { useEffect } from 'react'
import Herosection from './components/Herosection'
import styled from 'styled-components'
import { useGlobalContext } from './context';
import Projects from './Projects';

const Home = () => {

  const {updateHomePage} = useGlobalContext();

useEffect(() => {updateHomePage()}, [])


  const Homehero = styled.section`
  
  padding: 10rem 0;
   background: ${({theme})=>theme.colors.backgroundColor};
`;




  // const data = {
  //   image: 'images/laptop (2).png',
  //   para: 'I build modern, responsive and high-performance web applications with React, Next.js and WordPress.',
  // }

  
  return (
    <Homehero>
      
      <Herosection />
      <Projects/>
  
    </Homehero>
  )
}



export default Home