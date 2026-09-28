import styled from "styled-components"


const Testimonial = () => {
    const Testimonial = styled.section`
   background-color: ${({ theme }) => theme.colors.gradient};
      position: relative;
     
    
      .container {
      
      width: 90%;
      height: 70vh;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 4rem;
    }
    
    /* Section */
    
    
    
    .main-heading {
       
        padding: 1rem 0rem;
        margin-bottom:4rem;
        color: ${({ theme }) => theme.colors.white};
    }
    
     .sub-heading {
       margin-bottom: 0; 
        color: ${({ theme }) => theme.colors.white};
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
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
        

       
        

    }

    .cont-1::before {
  content: "";
  position: absolute;
  top: 50px;
  left: 33%;
  transform: translateX(-50%);

  width: 120%;
  height: 30%;

  background-image: url("/images/quotes.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  opacity: 0.5;
  z-index: 0;
  pointer-events: none;
}
  }

    .cont-2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

   .test-img{
   border-radius: 15px;
   position: relative;
   z-index: 1;
  
   
   }

   .test{
   position: relative;
   }
   .circle{
    background-color: ${({ theme }) => theme.colors.secondary};
     aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    position: absolute;
    
    right: -30px;
    bottom: -30px;
    opacity: 0.7;

   }

   /* =========================
   TABLET — 768px to 1024px
========================= */

@media (max-width: 1024px) {

  .container {
    width: 90%;
    min-height: 65vh;
    height: auto;
    padding: 3rem 2rem;
  }

  .main-heading {
    margin-bottom: 3rem;
  }

  .sub-heading {
    font-size: 1.4rem;
    padding: 4px 10px;
  }

  .cont-1 {
    gap: 3rem;
  }

  .cont-1::before {
    top: 40px;
    left: 35%;
    width: 110%;
    height: 28%;
  }

  .test-img {
    width: 90%;
    max-width: 350px;
  }

  .circle {
    width: 100%;
    height: 100%;
    right: -20px;
    bottom: -20px;
  }
}


/* =========================
   MOBILE — 481px to 767px
========================= */

@media (max-width: 767px) {

  .container {
    width: 92%;
    height: auto;
    min-height: auto;
    padding: 4rem 1.5rem;
  }

  .main-heading {
    padding: .5rem 0;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  .sub-heading {
    font-size: 1.2rem;
    padding: 4px 10px;
    letter-spacing: .08rem;
  }

  .cont-1 {
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
    width: 100%;
  }

  .cont-1::before {
    top: 30px;
    left: 50%;
    width: 120%;
    height: 25%;
    background-size: contain;
  }

  .cont-2 {
    width: 100%;
  }

  .test {
    width: 85%;
    max-width: 330px;
  }

  .test-img {
    width: 100%;
    height: auto;
    display: block;
  }

  .circle {
    right: -15px;
    bottom: -15px;
    border-radius: 15px;
  }
}


/* =========================
   SMALL MOBILE — 360px to 480px
========================= */

@media (max-width: 480px) {

  .container {
    width: 94%;
    padding: 3rem 1rem;
  }

  .main-heading {
    margin-bottom: 2rem;
  }

  .sub-heading {
    font-size: 1rem;
    padding: 3px 8px;
    letter-spacing: .06rem;
  }

  .cont-1 {
    gap: 3rem;
  }

  .cont-1::before {
    top: 20px;
    left: 50%;
    width: 130%;
    height: 20%;
    opacity: .35;
  }

  .test {
    width: 90%;
    max-width: 300px;
  }

  .test-img {
    width: 100%;
    height: auto;
  }

  .circle {
    right: -10px;
    bottom: -10px;
  }
}
    `;
  return (
   <Testimonial >
    <div className='container'>
        <div className="cont-1">
          <div className="cont-2">
            <p className='sub-heading'>Testimonial</p>
            <h2 className='main-heading'>What People Say</h2>
            
          </div>
          </div>
          <div className="test">
          <img src="/images/testimonial.png" alt="" className="test-img"/>
          <div className="circle"></div>
          </div>
          </div>
   </Testimonial>
  )
}

export default Testimonial