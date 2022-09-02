import { useState } from 'react';
import { General } from './general-types';
import Context from './GeneralContext';



const GeneralProvider = ({ children }) => {
    const [moeda, setMoeda] = useState<string>();
    const [idioma, setIdioma] = useState<string>();
    const [user, setUser] = useState<General.User>();

    return (
        <Context.Provider value={{
            moeda,
            setMoeda,
            
            idioma,
            setIdioma,

            user,
            setUser
        }}>
            { children }
        </Context.Provider>
    )
}

export default GeneralProvider;