
import styled from 'styled-components'
import { SecondaryButton, PrimaryButton } from '../styles/button'
import { Link } from 'react-router-dom'


const ProjectCard = ({type, title, description, image, link}) => {

  const ProjectCard = styled.article`
   
  /* Project Card */

.project-card {

  width: 100%;
  max-width: 380px;
  position: relative;

  background-color: ${({theme})=> theme.colors.backgroundColor} ;

 
  border-radius: 20px;

  overflow: hidden;

  box-shadow:
    0 12px 30px rgba(179, 55, 145, 0.15),
    0 25px 60px rgba(197, 98, 175, 0.18);
  transition: all 0.35s ease;

  display: flex;
  flex-direction: column;
  
}

.project-card::before{
    content: "";
    position: absolute;
    inset: 0;

    background: linear-gradient(
        135deg,
        rgba(255,255,255,.28),
        rgba(255,255,255,.05) 55%,
        transparent
    );

    pointer-events: none;
}

.project-card:hover {
  transform: translateY(-8px);

  box-shadow:
    0 20px 45px rgba(0, 0, 0, 0.08),
    0 10px 30px rgba(124, 58, 237, 0.12);
}

/* Image */

.project-img {
display: block;
  width: 90%;
  height: 220px;
 margin: 1.5rem auto;
  object-fit: cover;
  padding: 1rem;
  border: 1px solid  ${({theme})=>theme.colors.space};
  border-radius: 20px;

  transition: transform .5s ease;

  opacity:.85;
    filter:saturate(.9);
   
}

.project-card:hover .project-img {
  transform: scale(1.05);}
  


/* Content */

.project-title {
  margin: .5rem 2.5rem 1rem;

  font-size: 2.2rem;
  font-weight: 800;
  font-family: "Inter";
  text-transform: uppercase;

  color: ${({theme})=>theme.colors.black};
}

.desc {
  margin: 0 2.5rem 2rem;

  color: #595c63;

  line-height: 1.5;

  font-size: 1.9rem;
 
  font-fmaily:"Inter";
  
}

/* Button Container */

.project-btn {
  margin: auto 2.5rem 2rem;

  width: fit-content;
}

/* Link */

.project-btn{
 width: 100%;
 margin: 0 auto;
 margin-bottom: 1.5rem;
 display: inline-block;
 
}

.project-btn a {
  text-decoration: none;
}

.project-type{
margin: 0 2.5rem .5rem;
   color: ${({theme})=>theme.colors.secondary};
   background: ${({theme})=>theme.colors.space};

  line-height: 1.7;
  letter-spacing: .1rem;

  font-size: 1.4rem;
  font-weight: 600;
  
  border-radius: 10px;
  display: inline-block;
  width: fit-content;
    padding: 4px 12px;
}

.btn{
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: 1rem;
 margin: 0rem 2rem;
 padding-bottom: 1rem;
}

/* =========================
   TABLET — 768px to 1024px
========================= */

@media (max-width: 1024px) {

  .project-card {
    max-width: 350px;
    border-radius: 18px;
    padding: 1rem;
  }

  .project-img {
    width: 100%;
    height: 200px;
    margin: 0 auto;
   
  }

  .project-title {
    margin: .5rem 2rem .8rem;
    font-size: 2rem;
  }

  .desc {
    margin: 0 2rem 1.8rem;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  .project-type {
    margin: 0 2rem .5rem;
    font-size: 1.3rem;
  }

  .btn {
    margin: 0 1.5rem;
    gap: .8rem;
  }
}


/* =========================
   MOBILE — 480px to 767px
========================= */

@media (max-width: 767px) {

  .project-card {
    width: 90%;
    max-width: 380px;
    margin: 0 auto;
    border-radius: 16px;
  }

  .project-img {
    width: 90%;
    height: 190px;
    margin: 1rem auto;
    padding: .7rem;
    border-radius: 16px;
  }

  .project-title {
    margin: .5rem 1.5rem .8rem;
    font-size: 1.8rem;
  }

  .desc {
    margin: 0 1.5rem 1.5rem;
    font-size: 1.5rem;
    line-height: 1.5;
  }

  .project-type {
    margin: 0 1.5rem .5rem;
    font-size: 1.2rem;
    padding: 3px 10px;
  }

  .btn {
    margin: 0 1.2rem;
    gap: .6rem;
    padding-bottom: .8rem;
  }

  .project-btn {
    margin-bottom: 1rem;
  }
}


/* =========================
   SMALL MOBILE — 360px to 479px
========================= */

@media (max-width: 479px) {

  .project-card {
    width: 85%;
    border-radius: 14px;
    gap: .6rem;
    padding: 2rem;
  }

  .project-img {
    width: 95%;
    height: 160px;
    margin: 1rem auto;
    padding: .5rem;
    border-radius: 14px;
  }

  .project-title {
    margin: .5rem 1.2rem .7rem;
    font-size: 1.6rem;
  }

  .desc {
    margin: 0 1.2rem 1.3rem;
    font-size: 1.4rem;
    line-height: 1.45;
  }

  .project-type {
    margin: 0 1.2rem .5rem;
    font-size: 1.1rem;
    padding: 3px 8px;
  }

  .btn {
    margin: 0 1rem;
    gap: .5rem;
  }
}

`;

  return (
    <ProjectCard>
    <div className='project-card'>
        <figure>
        <img src={image}  alt={title} className='project-img' />
        </figure>
        <p className='project-type'>{type}</p>
        <h2 className='project-title'>{title}</h2>
        <p className='desc'>{description}</p>
        <div className='btn'>
        <PrimaryButton className='project-btn'>
           <a href={link}>Live Site</a>
        </PrimaryButton >
        <SecondaryButton className='project-btn'>
        <a href={link}>Github</a>
        </SecondaryButton>
        </div>
    </div>
    </ProjectCard>
  )
}


export default ProjectCard