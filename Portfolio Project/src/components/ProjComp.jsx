import { Projectslist } from "../data/projects"
import { PrimaryButton } from "../styles/button";
import ProjectCard from "./ProjectCard"
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";

const ProjComp = () => {

  const ProjectComp = styled.section`
      
      background-color: ${({ theme }) => theme.colors.backgroundColor};
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
        color: ${({ theme }) => theme.colors.primary};
    }
    
     .sub-heading {
       margin-bottom: 0; 
        color: ${({ theme }) => theme.colors.secondary};
         border: 1px solid ${({ theme }) => theme.colors.space};
        border-radius: 8px;
        display: inline-block;
        width: fit-content;
        padding: 5px 12px;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
        font-family: "Inter"
        line-height: 1.7;
        letter-spacing: .1rem;
        text-transform:  uppercase;

  

    }
    
    /* React Projects */
    
    .project-grid {
        display: grid;
    
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    
        gap: 3rem;
    
        padding-bottom: 7rem;
    }

    .cont-1{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
    }

    .cont-2{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items:start;
    }

    .proj-btn{
      color: ${({ theme }) => theme.colors.primary};
      background-color: inherit;
      box-shadow: none;
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
      font-family: "Playfair display";
      display: flex;
      align-items: center;
      gap: 1rem;
    }
        `;
  return (
    <ProjectComp>
      <div className='container'>
        <div className="cont-1">
          <div className="cont-2">
            <p className='sub-heading'>My Work</p>
            <h2 className='main-heading'>Selected Projects</h2>
          </div>
          <a href="/project" className="proj-btn"> View All
            <FaArrowRight className='icons' />
          </a>

        </div>

        <div className='project-grid'>
          {Projectslist.slice(0, 3).map((project) => (
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

    </ProjectComp>
  )
}

export default ProjComp;