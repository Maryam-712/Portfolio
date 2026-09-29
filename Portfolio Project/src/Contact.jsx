import React from 'react'
import styled from 'styled-components';
import { PrimaryButton } from './styles/button';

const Contact = () => {

  const Wrapper = styled.section`
   background-color: ${({ theme }) => theme.colors.backgroundColor};
  
  .container {
  
  width: 80%;
  margin: 0 auto;
  padding-bottom: 10rem;
  padding-top: 6rem;

}

 .main-heading {
       
        padding: 1rem 0rem;
        margin-bottom:1rem;
        color: ${({ theme }) => theme.colors.primary};
    }
    
     .sub-heading {
       margin-bottom: 0; 
        color: ${({ theme }) => theme.colors.primary};
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
        justify-content: center;
        align-items:center;
        

    }

    .cont-2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

.contact-form{
width:50%;
margin: auto;
padding: 4rem;
}

form{
display: flex;
flex-direction:column;
gap: 2rem;
}


.contact-form {
    width: 100%;
    max-width: 700px;
    margin: 4rem auto 0;

    background: #fff;

    padding: 3rem;

    border-radius: 20px;

    box-shadow:
      0 10px 30px rgba(0, 0, 0, 0.08),
      0 8px 20px rgba(124, 58, 237, 0.08);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }

  input,
  textarea {
    width: 100%;

    padding: 1rem 1.2rem;

    border: 1px solid #d1d5db;

    border-radius: 12px;

    outline: none;

    font-size: 1.5rem;

    font-family: "Inter";

    transition: all 0.3s ease;

    background: #fafafa;
  }

  textarea {
    resize: vertical;
    min-height: 180px;
  }

  input::placeholder,
  textarea::placeholder {
    color: #9ca3af;
  }

  input:focus,
  textarea:focus {
    border-color: #7c3aed;

    background: #fff;

    box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.12);
  }

  input[type="submit"] {
    width: fit-content;

    padding: 0.9rem 2.5rem;

    background: #7c3aed;

    color: white;

    border: none;

    border-radius: 50px;

    cursor: pointer;

    font-size: 1rem;

    font-weight: 600;

    transition: all 0.3s ease;
  }

  input[type="submit"]:hover {
    background: #6d28d9;

    transform: translateY(-3px);

    box-shadow: 0 10px 20px rgba(124, 58, 237, 0.25);
  }

 /* =========================
   TABLET
========================= */

@media (max-width: 1024px) {

  .container {
    width: 88%;
    padding-top: 5rem;
    padding-bottom: 7rem;
  }

  .cont-1 {
    gap: 2.5rem;
  }

  .contact-form {
    max-width: 650px;
    padding: 2.5rem;
  }

  input,
  textarea {
    font-size: 1.4rem;
  }
}


/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {

  .container {
    width: 90%;
    padding-top: 4rem;
    padding-bottom: 6rem;
  }

  .main-heading {
    padding: 0.8rem 0;
    margin-bottom: 0.8rem;
    text-align: center;
    font-size: 3rem;
  }

  .sub-heading {
    font-size: 1.2rem;
    padding: 4px 10px;
    letter-spacing: 0.08rem;
  }

  .cont-1 {
    flex-direction: column;
    gap: 2rem;
  }

  .cont-2 {
    width: 100%;
  }

  .contact-form {
    width: 100%;
    margin-top: 2.5rem;
    padding: 2rem;
    border-radius: 16px;
  }

  form {
    gap: 1.4rem;
  }

  input,
  textarea {
    font-size: 1.2rem;
    padding: 0.9rem 1rem;
  }

  textarea {
    min-height: 150px;
  }

  input[type="submit"] {
    width: 100%;
    padding: 1rem;
    font-size: 1.1rem;
  }
}


/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 480px) {

  .container {
    width: 70%;
    padding-top: 3rem;
    padding-bottom: 8rem;
  }

  .main-heading {
    font-size: 3rem;
  }

  .sub-heading {
    font-size: 1rem;
    padding: 4px 8px;
    letter-spacing: 0.05rem;
  }

  .cont-1 {
    gap: 1.5rem;
  }

  .contact-form {
    margin-top: 2rem;
    padding: 1.5rem;
    border-radius: 14px;
  }

  form {
    gap: 1.2rem;
  }

  input,
  textarea {
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 10px;
  }

  textarea {
    min-height: 130px;
  }

  input[type="submit"] {
    font-size: 1rem;
    padding: 0.85rem;
  }
}



  
`;


  


  return (
    <Wrapper>

     
     
      <div className='container'>
        
        <div className="cont-1">
          <div className="cont-2">
            <p className='sub-heading'>Feel Free to</p>
            <h2 className='main-heading'>Contact Me</h2>
            
          </div>
          </div>
        <div className="contact-form">
          <form action="https://formspree.io/f/xwpkpkrd" 
          method='POST'>
            <input
              type="text"
              name='Username'
              placeholder='Name'
              autoComplete='off'
              required />

            <input
              type="email"
              name='Email'
              placeholder='Email'
              autoComplete='off'
              required />

            <textarea
              type="message"
              cols="30"
              rows="6"
              autoComplete='off'
              placeholder='Message'
              required />

            <PrimaryButton type='submit'>
                  Send
            </PrimaryButton>
          </form>
        </div>

      </div>
    </Wrapper>
  )
}

export default Contact