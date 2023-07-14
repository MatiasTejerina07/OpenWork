import { useContext, createContext } from 'react';


interface ContextProps {
    sidemenuOpen: boolean,
    isAddingEntry: boolean


    openSideMenu: () => void,
    closeSideMenu: () => void,

    setIsAddingEntry: (isAdding: boolean) => void
}
export const UiContext = createContext({} as ContextProps)
