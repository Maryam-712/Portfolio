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
    font-size: 6rem;
    font-weight: 900;
    font-family: "Sora", sans-serif;
}

h2{
    font-family: "Sora", sans-serif;
}

h3{
    font-family: "Sora", sans-serif;
}

p{

}

a{
    text-decoration: none;
}

li{
    list-style: none;
}
`