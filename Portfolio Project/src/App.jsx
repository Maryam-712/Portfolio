import React from 'react'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./GlobalStyle";

const App = () => {

  const theme = {
    colors: {
      backgroundColor: "#fff8fe",
      heading: "#B33791",
      text: "#6b7280", 
      border: "#e5e7eb",
      hover: "#DB8DD0",
      footer: "#C562AF",
      primary: " #B33791",
      secondary: "#C562AF",
      gradient: "#DB8DD0",
      space: "#FEC5F6",
      white: "#ffffff",
      black: "#29021e",
      desc: "#595c63",
      h2: "#831843",
      h3: "#9d174d",

    },
    media: { mobile: "768px", tab: "998px"},
  }
  return (

    <div>
      <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/project' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
      </ThemeProvider>
      
    </div>
  )
}

export default App