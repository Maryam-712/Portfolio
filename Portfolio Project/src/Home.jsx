import { useEffect } from 'react'
import Herosection from './components/Herosection'
import styled from 'styled-components'
import { useGlobalContext } from './context';
import ProjComp from './components/ProjComp';
import AboutComp from './components/AboutComp';
import Tech from './components/Tech';
import Testimonial from './components/Testimonial';


const Home = () => {

  const {updateHomePage} = useGlobalContext();

useEffect(() => {updateHomePage()}, [])


  const Homehero = styled.section`
  
  padding-top: 5rem;
   background: ${({theme})=>theme.colors.backgroundColor};
`;




  // const data = {
  //   image: 'images/laptop (2).png',
  //   para: 'I build modern, responsive and high-performance web applications with React, Next.js and WordPress.',
  // }

  
  return (
    <Homehero>
      
      <Herosection />
      <AboutComp/>
      
      <ProjComp/>
      <Testimonial/>
  
    </Homehero>
  )
}



export default Home