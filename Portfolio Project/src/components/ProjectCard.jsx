import React from 'react'
import { RProjects, WProjects } from '../data/projects'
import styled from 'styled-components'
import { SecondaryButton } from '../styles/button'
import { Link } from 'react-router-dom'


const ProjectCard = ({title, description, image, link}) => {

  const ProjectCard = styled.article`
   
  /* Project Card */

.project-card {
  width: 100%;
  max-width: 380px;

  background: #ffffff;

  border: 1px solid #ececec;
  border-radius: 20px;

  overflow: hidden;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);

  transition: all 0.35s ease;

  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-8px);

  box-shadow:
    0 20px 45px rgba(0, 0, 0, 0.08),
    0 10px 30px rgba(124, 58, 237, 0.12);
}

/* Image */

.project-img {
  width: 100%;
  height: 220px;

  object-fit: cover;

  transition: transform .5s ease;
}

.project-card:hover .project-img {
  transform: scale(1.05);
}

/* Content */

.project-title {
  margin: 22px 22px 10px;

  font-size: 2rem;
  font-weight: 700;

  color: #1f2937;
}

.desc {
  margin: 0 22px 25px;

  color: #6b7280;

  line-height: 1.7;

  font-size: 1.5rem;
}

/* Button Container */

.project-btn {
  margin: auto 22px 22px;

  width: fit-content;
}

/* Link */

.project-btn a {
  text-decoration: none;
  color: inherit;
}
`;

  return (
    <ProjectCard>
    <div className='project-card'>
        <figure>
        <img src={image}  alt={title} className='project-img' />
        </figure>
        <h2 className='project-title'>{title}</h2>
        <p className='desc'>{description}</p>
        <SecondaryButton className='project-btn'>
        <a href={link}>Visit</a>
        </SecondaryButton>
    </div>
    </ProjectCard>
  )
}


export default ProjectCard