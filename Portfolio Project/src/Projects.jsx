import React from 'react'
import ProjectCard from './components/ProjectCard'
import { RProjects, WProjects } from './data/projects'
import styled from 'styled-components'

const Projects = () => {

  const ProjectDis = styled.section`
  
  background-color: ${({theme}) => theme.colors.backgroundColor};
  position: relative;
  

  .container {
  
  width: 80%;
  margin: 0 auto;
  
}

/* Section */



.main-heading {
    text-align: center;
    padding: 4rem;
    color: ${({theme}) => theme.colors.primary};
}

 .sub-heading {
    margin-bottom: 2rem;
    color: ${({theme}) => theme.colors.primary};
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
        <h2 className='main-heading'>Projects</h2>
        <h3 className='sub-heading'>React Projects</h3>

        <div className='project-grid'>
          {RProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
          {RProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
          {RProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>

        <h3 className='sub-heading'>Wordpress Projects</h3>
        <div className='project-grid'>
          {WProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>

      </div>

    </ProjectDis>
  )
}



export default Projects