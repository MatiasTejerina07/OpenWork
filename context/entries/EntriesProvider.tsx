import { FC, useReducer } from "react";
import { EntriesContext, entriesReducer } from "./";
import { Entry } from "@/interfaces";
import { v4 as uuidv4 } from 'uuid'

export interface EntriesState {
    entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: "Pendiente: Hola aca estoy sin hacer nada",
            status: "pending",
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: "En progreso: Hola me voy estoy sin hacer nada",
            status: "in-progress",
            createdAt: Date.now() - 1000000
        },
        {
            _id: uuidv4(),
            description: "Terminada: Hchaa aca estoy sin hacer nada",
            status: "finished",
            createdAt: Date.now() - 100000
        },
    ]
}

export const EntriesProvider: FC = ({ children }: any) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

    return (

        <EntriesContext.Provider value={{
            ...state
        }}>
            {children}
        </EntriesContext.Provider>


    )


}