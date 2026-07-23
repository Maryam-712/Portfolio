import React from 'react'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./GlobalStyle";

const App = () => {

  const theme = {
    colors: {
      backgroundColor: "#fcfcfd",
      heading: "#111827",
      text: "#6B7280",
      border: "#E5E7EB",
      hover: "#C026D3",
      footer: "#F8FAFC",
      primary: " #D946EF",
      secondary: "#A855F7",


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
            <Route path='/skill' element={<Skills/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
      </ThemeProvider>
      
    </div>
  )
}

export default App