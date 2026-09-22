import React from 'react'
import ProjectCard from './components/ProjectCard'
import { Projectslist } from './data/projects'
import styled from 'styled-components'

const Projects = () => {

  const ProjectDis = styled.section`
  
  background-color: ${({theme}) => theme.colors.backgroundColor};
  position: relative;
  

  .container {
  
  width: 90%;
  margin: 0 auto;
  padding-top: 4rem;
  
}

/* Section */



.main-heading {
    text-align: center;
    padding: 1rem 0rem;
    margin-bottom:4rem;
    color: ${({theme}) => theme.colors.h2};
}

 .sub-heading {
   margin-bottom: 0; 
    color: ${({theme}) => theme.colors.primary};
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
}

/* React Projects */

.project-grid {
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

    gap: 3rem;

    padding-bottom: 7rem;
}


`;
  return (
    <ProjectDis>
      <div className='container'>
        <h3 className='sub-heading'>My Work</h3>
        <h2 className='main-heading'>Selected Projects</h2>
       

        <div className='project-grid'>
          {Projectslist.map((project) => (
            <ProjectCard
              key={project.id}
              type={project.type}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              github={project.github}
            />
          ))}
         </div>

      </div>

    </ProjectDis>
  )
}





export default Projects