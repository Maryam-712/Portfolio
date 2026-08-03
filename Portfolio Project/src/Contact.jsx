import React from 'react'
import styled from 'styled-components';
import { PrimaryButton } from './styles/button';

const Contact = () => {

  const Wrapper = styled.section`
   background-color: ${({ theme }) => theme.colors.backgroundColor};
  
  .container {
  
  width: 80%;
  margin: 0 auto;
}

.main-heading{
    text-align: center;
    padding: 4rem;
    color: ${({ theme }) => theme.colors.heading};
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

    font-size: 1rem;

    font-family: inherit;

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

  @media (max-width: 768px) {
    .contact-form {
      padding: 2rem;
    }

    input[type="submit"] {
      width: 100%;
    }
  }
`;


  


  return (
    <Wrapper>

      <h2 className='main-heading'> Feel Free To Contact</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28941.970654302484!2d67.02121562013198!3d24.940710097940634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f8014fe5943%3A0x11df7a65effb1ef6!2sNorth%20Nazimabad%20Town%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1785480261802!5m2!1sen!2s" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      <div className='container'>
        <div className="contact-form">
          <form action="https://formspree.io/f/xwpkpkrd" 
          method='POST'>
            <input
              type="text"
              name='Username'
              placeholder='Username'
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