import { useState } from 'react';
import Context from './GeneralContext';


const GeneralProvider = ({ children }) => {
    const [moeda, setMoeda] = useState<string>();
    const [idioma, setIdioma] = useState<string>();

    return (
        <Context.Provider value={{
            moeda,
            setMoeda,
            
            idioma,
            setIdioma
        }}>
            { children }
        </Context.Provider>
    )
}

export default GeneralProvider;