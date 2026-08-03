import React, {useEffect} from 'react'
import Herosection from './components/Herosection'
import { data } from 'react-router-dom'
import { useGlobalContext } from './context'

const About = () => {


  const {updateAboutPage} = useGlobalContext();

useEffect(() => {
  updateAboutPage()
}, [])

  // const data = {
    
  //   image: 'images/about.png',
  //   para: 'I am a Frontend Developer who enjoys turning ideas into responsive, user-friendly, and visually engaging web applications. My focus is on writing clean code, building modern interfaces, and creating seamless user experiences using React, Next.js, and WordPress.',
  // }
    return (
    <div>
      <Herosection />
    </div>
  )
}

export default About