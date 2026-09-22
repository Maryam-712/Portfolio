
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

  font-size: 2rem;
  font-weight: 700;
  
  text-transform: uppercase;

  color: ${({theme})=>theme.colors.h2};
}

.desc {
  margin: 0 2.5rem 2rem;

  color: #595c63;

  line-height: 1.5;

  font-size: 1.5rem;

  
  
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