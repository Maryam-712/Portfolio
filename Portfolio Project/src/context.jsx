import React, { createContext, useContext, useReducer } from "react";
import appreducer  from "./reducer";


const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const initialState = {
        image:'',
        para: '',
    };

    const updateHomePage = () => {
        return dispatch({
            type: "Home_update",
            payload: {
                image: 'images/hero.jpg',
                para: 'I build modern, responsive and high-performance web applications with React, Next.js and WordPress.',
            }
        });
    }

    const updateAboutPage = () => {
        return dispatch ({
            type: "About_update",
            payload:{
                image: 'images/about.png',
                para: 'I am a Frontend Developer who enjoys turning ideas into responsive, user-friendly, and visually engaging web applications. My focus is on writing clean code, building modern interfaces, and creating seamless user experiences using React, Next.js, and WordPress.',
            }
        });
    }

    const [state, dispatch] = useReducer(appreducer, initialState);
        return (
       <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>
            {children}
       </AppContext.Provider>
    )

}

const useGlobalContext = () => {
    return useContext (AppContext);
};

export {AppContext, AppProvider, useGlobalContext};  