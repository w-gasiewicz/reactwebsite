import React, { createContext, useState } from "react";

export const Context = createContext({});

export const AppContext = props => {
    // Initial values are obtained from the props
    const {
        logged: initialLogged
    } = props;
    //const logged = false ;  

    // Use State to keep the values
    const [logged] = useState(initialLogged);

    const changeLoggedStatus = status => {
        logged = status;
    };

    // Make the context object:
    const appContext = {
        users,
        changeLoggedStatus
    };

    // pass the value in provider and return
    return <Context.Provider value={appContext}></Context.Provider>;
}