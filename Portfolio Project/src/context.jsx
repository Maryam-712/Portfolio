import React, { createContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return (
       <AppContext.Provider value="Maryam Mansoor">
            {children}
       </AppContext.Provider>
    )

}

export {AppContext, AppProvider};  