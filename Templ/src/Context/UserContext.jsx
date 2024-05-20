import { createContext } from "react";

export let UserContext = createContext()

export default function UserContextProvider(props) {
    return <UserContext.Provider value={{}}>
        {props.children}
    </UserContext.Provider>
}