import { createContext } from "react";

type AppContextType = {
    isLoginShown: boolean,
    setIsLoginShown: Function,
    isRegisterShown: boolean,
    setIsRegisterShown: Function,
    userData: {}
    setUserDate: Function,
    isLogged: boolean,
    setIsLogged: Function,
}


const AppContext = createContext<AppContextType>({
    isLoginShown: false,
    setIsLoginShown: () => { },
    isRegisterShown: false,
    setIsRegisterShown: () => { },
    userData: {},
    setUserDate: () => { },
    isLogged: false,
    setIsLogged: () => { },
})

export default AppContext