import { createGlobalStyle } from "styled-components";
 
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
   

}



h1{
    color: ${({theme }) => theme.colors.heading};
    
    font-weight: 900;
    font-family: "Playfair Display", sans-serif;
}

h2{
    font-size: 4rem;
    font-weight: 700;
    font-family: "Playfair Display", sans-serif;
}

h3{
    font-size: 3rem;
    font-weight: 500;
    font-family: "Playfair Display", sans-serif;
}

h4{
font-weight: 500;
    font-family: "Playfair Display", sans-serif;
}

p{
    font-size: 1rem;
    font-family: "Inter";
}

a{
    text-decoration: none;
}

li{
    list-style: none;
}
`