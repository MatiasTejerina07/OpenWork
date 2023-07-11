import { useContext, createContext } from 'react';


interface ContextProps {
    sidemenuOpen: boolean,
    openSideMenu: () => void,
    closeSideMenu: () => void
}
export const UiContext = createContext({} as ContextProps)
