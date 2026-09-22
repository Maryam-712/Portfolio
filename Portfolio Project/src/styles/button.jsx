import styled from "styled-components";

export const PrimaryButton = styled.button`
  padding: 1.4rem 3.2rem;
  border: none;
  border-radius: 10px;
  background: #B33791;
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: "Playfair display", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(217, 70, 239, 0.25);
  display: inline-block;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(217, 70, 239, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
 
  a{
    color: inherit;
  }
  
`;

export const SecondaryButton = styled.button`
  padding: 1rem 3rem;
  border: 2px solid #B33791;
  border-radius: 10px;
  background: transparent;
  color: #B33791;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: "Playfair display", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    background: #B33791;
    color: #ffffff;
    box-shadow: 0 10px 25px rgba(217, 70, 239, 0.3);
    transform: translateY(-3px);
    color: white;
  }

  &:active {
    transform: translateY(0);
  }

  a{
  color:  inherit;
  
  }

 


`;