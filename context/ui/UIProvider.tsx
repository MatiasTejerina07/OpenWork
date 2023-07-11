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

    return (
        <UiContext.Provider value={{
            sidemenuOpen: false
        }}>
            {children}
        </UiContext.Provider>
    )
}