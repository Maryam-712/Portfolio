import styled from "styled-components";

export const PrimaryButton = styled.button`
 padding: 1.4rem 3.2rem;
border: none;
border-radius: 10px;
background: #B33791;
color: #ffffff;
font-size: 1.6rem;
font-weight: 600;
letter-spacing: .1rem;
font-family: "Playfair Display", sans-serif;
cursor: pointer;
transition: all 0.3s ease;
box-shadow: 0 5px 10px rgba(217, 70, 239, 0.25);
display: inline-block;

&:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(217, 70, 239, 0.4);
}

&:active {
  transform: translateY(0);
}

a {
  color: inherit;
}


/* =========================
   TABLET
========================= */

@media (max-width: 1024px) {
  padding: .8rem 1.5rem;
  font-size: 1.5rem;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {
  padding: 1rem 2.2rem;
  font-size: 1.4rem;
  letter-spacing: 0.08rem;
  border-radius: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(217, 70, 239, 0.3);
  }
}


/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 480px) {
  padding: 0.9rem 1.8rem;
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
  border-radius: 7px;

  &:hover {
    transform: translateY(-2px);
  }
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
letter-spacing: .1rem;
font-family: "Playfair Display", sans-serif;
cursor: pointer;
transition: all 0.3s ease;
display: inline-block;

&:hover {
  background: #B33791;
  color: #ffffff;
  box-shadow: 0 5px 15px rgba(217, 70, 239, 0.3);
  transform: translateY(-3px);
}

&:active {
  transform: translateY(0);
}

a {
  color: inherit;
}


/* =========================
   TABLET
========================= */

@media (max-width: 1024px) {
  padding: 0.5rem 1.5rem;
  font-size: 1.5rem;
  border-radius: 9px;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {
  padding: 0.8rem 2rem;
  font-size: 1.4rem;
  letter-spacing: 0.07rem;
  border-radius: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 12px rgba(217, 70, 239, 0.25);
  }
}


/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 480px) {
  padding: 0.7rem 1.5rem;
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
  border: 1.5px solid #B33791;
  border-radius: 7px;

  &:hover {
    transform: translateY(-2px);
  }
}
 


`;