import React from 'react'
import Herosection from './components/Herosection'
import styled from 'styled-components'

const Home = () => {

  const Homehero = styled.section`
  
  padding: 10rem 0;
   background: #fcfcfd;
`;

  const data = {
    image: 'images/laptop (2).png',
    para: 'I build modern, responsive and high-performance web applications with React, Next.js and WordPress.',
  }

  return (
    <Homehero>
      
      <Herosection {...data} />
  
    </Homehero>
  )
}



export default Home