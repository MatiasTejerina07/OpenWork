import { Entry } from '@/interfaces';
import { useContext, createContext } from 'react';


interface ContextProps {
    entries: Entry[] /* falta el tipo de dato del arreglo */
}
export const EntriesContext = createContext({} as ContextProps)