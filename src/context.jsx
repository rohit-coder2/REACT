import React, { createContext, useState } from "react";

const DataContext = createContext();

const DataContextProviderFun = ({ children }) => {
    const [token, setToken] = useState();
    return <DataContext.Provider value={{
        token,
        setToken
    }}>
        {children}
    </DataContext.Provider>

}

export { DataContext };
export default DataContextProviderFun;