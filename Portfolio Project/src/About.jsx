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

  const Aboutsec = styled.section`
background-color: ${({ theme }) => theme.colors.backgroundColor};

  .container {
  
  width: 90%;
  margin: 0 auto;
  padding-top: 4rem;
  
}

/* Section */



.main-heading {
    text-align: center;
    padding: 1rem 0rem;
    margin-bottom:2rem;
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
    //background-color: ${({ theme }) => theme.colors.gradient};
    border-radius: 10px;
 

}

.about-img{
width: 100%;

}

.content{
  display: flex;
  flex-direction: row;
   margin-bottom: 2rem;

}

.sec-cont{
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
width: 100%;
}

.info{
margin-bottom: 1rem;
}

.heading{
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  font-weight: 800;
}

.detail{
   border-left: 4px solid ${({ theme }) => theme.colors.gradient};
   padding-left: 1rem;
   font-size: 1.7rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight:600;   
}
    .dates{
     border-left: 4px solid ${({ theme }) => theme.colors.gradient};
    padding: 1rem;
    padding-bottom: .5rem;
   font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight:500;
    font-style: italic;
    margin-bottom: 3rem;
    }
     
    .skills{
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: start;
     gap: 2rem;
     margin-bottom: 6rem;
      padding-top: 2rem;
    }
     .skills ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        font-size: 1.7rem;
        color: ${({ theme }) => theme.colors.text};
        border: 1px solid ${({ theme }) => theme.colors.space};
        padding: 1rem;
        border-radius: 8px;
       
        }

        .skills li{
        font-size: 1.7rem;
        font-family: "Inter";
        letter-spacing: .1rem;

        background-color:  ${({ theme }) => theme.colors.gradient};
        color:  ${({ theme }) => theme.colors.white};
        padding: 6px 10px;
        border-radius: 5px;
        }

        .heading1{
        text-align: center;
        color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  font-weight: 800;
        }

        /* =========================================
   TABLET + MOBILE
   ========================================= */

@media (max-width: 800px) {

  .container {
    width: 90%;
    padding-top: 3rem;
  }

  .main-heading {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  .sub-heading {
    font-size: 1.4rem;
    padding: 5px 10px;
  }

  .cont-1 {
    padding: 3rem 0;
  }

  .para {
    font-size: 1.7rem;
    line-height: 1.6;
  }

  /* Image + content stack */
  .content {
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .hero-image {
    width: 100%;
  }

  .about-img {
    width: 100%;
    max-width: 600px;
    display: block;
    margin: 0 auto;
  }

  .sec-cont {
    width: 100%;
    align-items: flex-start;
  }

  .heading {
    font-size: 2.3rem;
    margin-bottom: 1.5rem;
  }

  .detail {
    font-size: 1.6rem;
    line-height: 1.5;
  }

  .dates {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }

  /* Skills */
  .skills {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2rem;
    margin-bottom: 4rem;
    padding-top: 2rem;
  }

  .skills ul {
    width: 100%;
    box-sizing: border-box;

    flex-direction: row;
    flex-wrap: wrap;

  
    justify-content: start;
    gap: 1rem;
    padding: 1.5rem;
  }

  .skills li {
    font-size: 1.5rem;
  }

  .heading1 {
    font-size: 2.3rem;
    margin-bottom: 1.5rem;
  }
}


/* =========================================
   SMALL MOBILE
   ========================================= */

@media (max-width: 480px) {

  .container {
    width: 92%;
    padding: 2rem;
  }

  .main-heading {
    font-size: 3rem;
    padding: 0.5rem 0;
    margin-bottom: 1rem;
  }

  .sub-heading {
    font-size: 1.2rem;
    padding: 4px 8px;
    letter-spacing: 0.05rem;
  }

  .cont-1 {
    padding: 2rem 0;
  }

  .para {
    font-size: 1.5rem;
    line-height: 1.6;
  }

  .content {
    gap: 2rem;
  }

  .about-img {
    width: 100%;
  }

  .heading {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .detail {
    font-size: 1.4rem;
    line-height: 1.5;
    padding-left: 0.8rem;
  }

  .dates {
    font-size: 1.2rem;
    padding: 0.7rem;
    margin-bottom: 2rem;
  }

  .skills {
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .skills ul {
    gap: 0.8rem;
    padding: 1rem;
  }

  .skills li {
    font-size: 1.3rem;
    padding: 5px 8px;
  }

  .heading1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}


`;
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
                      <div className='sec-cont'>
                  <div className='info'>
                    <h3 className='heading'>Education</h3>
                    <p className='detail'>BS Computer Science — University of Karachi (UBIT)</p>
                    <p className='dates'>Jan 2021 – Jan 2025</p>
                  </div>
                   <div className='info'>
                    <h3 className='heading'>Experience</h3>
                    <p className='detail'>Junior WordPress Developer – MIK Services | Remote         </p>
                    <p className='dates'> July 2025 – September 2025 </p>

                    <p className='detail'>WordPress Development (Internship) - MAS Design         </p>
                    <p className='dates'> May 2025 – June 2025</p>

                    <p className='detail'>WordPress Development (Internship) - GAOTek.Inc        </p>
                    <p className='dates'>Feb 2025 – May 2025 </p>
                  </div>
                 
                  
                  </div>
                    <div className='hero-image'>
                    <picture>
                        <img src="/images/about.png" alt='about-image' className='about-img'/>
                    </picture>
                </div>
                
                </div>
                 <h3 className='heading1'>Technical skills</h3>
                    
                     <div className="skills">
                        <ul >Languages<li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        </ul>
                        <ul className='skills'>Frontend
                         <li>NEXT.JS</li>
                         <li>REACT.JS</li>
                        </ul>
                       
                       <ul>Backend
                        <li>NODE.JS</li>
                        <li>EXPRESS.JS</li>
                       </ul>
                        
                        <ul>Database
                         <li>MONGODB</li>
                        </ul>

                        <ul>CMS
                           <li>WORDPRESS</li>
                        <li>ELEMENTOR</li></ul>
                        
                        <ul>Tools
                           <li>GIT</li>
                        <li>GITHUB</li></ul>
                       
                    </div>
                    </div>
    </Aboutsec>
  )
}



export default About