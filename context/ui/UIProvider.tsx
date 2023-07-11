import { FC, useReducer } from "react"
import { UiContext, uiReducer } from './';

export interface UIState {
    sidemenuOpen: boolean

}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false
}

export const UIProovider: FC = ({ children }: any) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu = () => dispatch({ type: "UI - Open Sidebar" })

    const closeSideMenu = () => dispatch({ type: "UI - Close Sidebar" })

    return (
        <UiContext.Provider value={{
            ...state,
            openSideMenu,
            closeSideMenu
        }}>
            {children}
        </UiContext.Provider>
    )
}