import { createContext, useContext, useState } from "react";
import React from "react";

const context =createContext(null)

const  ContextProvider=({children})=>{

    const [login,setlogin]=useState(false)

let name='sourabh'
let send_value={name,login,setlogin}

return(
    <context.Provider value={send_value}>{children}</context.Provider>
)
}

export {context,ContextProvider}

