import React from 'react'
import styled from 'styled-components'

const Herosection = () => {
  return (
    <Wrapper>
    <div>
        <div className="hero-para">
            <p>Hi, I'm</p>
            <h1>Maryam Mansoor</h1>
            <p>I build modern, responsive and
                high-performance web applications
                with React, Next.js and WordPress.
            </p>
        </div>
        <div>
            <picture>
                <img src='public\images\laptop.png'/>
            </picture>
        </div>
    </div>
    </Wrapper>
  )

}

const Wrapper = styled.section`

`;

export default Herosection