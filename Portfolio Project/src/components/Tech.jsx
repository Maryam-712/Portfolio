import styled from "styled-components"


const Tech = () => {

  const Tech = styled.section`

   background-color: ${({ theme }) => theme.colors.secondary};
      position: relative;
     
    
      .container {
      
      width: 100%;
      height: 45vh;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
     
    }
    
    /* Section */
    
    
    
    .main-heading {
       
        padding: 1rem 0rem;
        margin-bottom:2rem;
        color: ${({ theme }) => theme.colors.white};
    }
    
     .sub-heading {
       margin-bottom: 0; 
        color: ${({ theme }) => theme.colors.white};
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

    .cont-1{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;

    }

     .cont-2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

   .skills ul{
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
        }

        .skills li{
        font-size: 1.7rem;
        font-family: "Inter";
        letter-spacing: .1rem;

       //background-color:  ${({ theme }) => theme.colors.white};
        color:  ${({ theme }) => theme.colors.white};
        
        padding: 2rem;
        border-radius: 5px;
       

        
  /* Semi-transparent background */
  background: rgba(255, 255, 255, 0.19);
  
  /* The core glass blur effect */
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px); /* Safari support */
  
  /* Subtle, crisp border */
  border: 1px solid rgba(255, 255, 255, 0.4);
  
  /* Soft rounded corners & glow */
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(160, 32, 112, 0.15);
  
  

        }

      .skill-head {
        color: ${({ theme }) => theme.colors.primary};
        
      
        padding-top:2rem;
        font-size: 2rem;
        font-weight: 600;
        font-family: "Playfair display"
        line-height: 1.7;
        letter-spacing: .1rem;
        text-transform:  uppercase;
        }
  `;
  
  return (
   <Tech> 
    <div className='container'>
        <div className="cont-1">
          <div className="cont-2">
            <p className='sub-heading'>Technologies</p>
            <h2 className='main-heading'>My Skill Set</h2>
            
          </div>
          </div>
    <div className="skills">
                        <ul ><li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>REACT.JS</li>
                        <li>NEXT.JS</li>
                        <li>NODE.JS</li>
                        <li>EXPRESS.JS</li>
                        <li>MONGODB</li>
                        <li>WORDPRESS</li>
                        <li>ELEMENTOR</li></ul>
                    </div>
                    </div>
   </Tech>

  )
}

export default Tech