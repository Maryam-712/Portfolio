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
        font-family: "Playfair display";
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

    /* =========================
   TABLET
========================= */

@media (max-width: 1024px) {

  .container {
    width: 90%;
    padding-top: 3rem;
  }

  .main-heading {
    margin-bottom: 3rem;
    font-size: 4rem;
  }

  .sub-heading {
    font-size: 1.3rem;
  }

  .project-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding-bottom: 5rem;
  }

  .cont-1 {
    gap: 2rem;
  }

  .proj-btn {
    font-size: 1.7rem;
    gap: 0.8rem;
    margin-bottom: 2rem;
  }
}


/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {

  .container {
    width: 90%;
    padding-top: 2.5rem;
  }

  .main-heading {
    margin-bottom: 2.5rem;
    font-size: 4rem;
    padding: 0.5rem 0;
  }

  .sub-heading {
    font-size: 1.2rem;
    padding: 4px 10px;
    letter-spacing: 0.08rem;
  }

  .cont-1 {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
  }

  .cont-2 {
    align-items: center;
    text-align: center;
  }

  .project-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding-bottom: 4rem;
  }

  .proj-btn {
    font-size: 1.5rem;
    gap: 0.6rem;
    justify-content: center;
    margin-bottom: 2rem;
  }
}


/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 480px) {

  .container {
    width: 92%;
    padding-top: 2rem;
  }

  .main-heading {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  .sub-heading {
    font-size: 1rem;
    padding: 4px 8px;
  }

  .cont-1 {
    gap: 1rem;
  }

  .project-grid {
    gap: 2rem;
    padding-bottom: 3rem;
  }

  .proj-btn {
    font-size: 1.3rem;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
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