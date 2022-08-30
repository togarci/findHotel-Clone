import { createContext } from 'react';

import { General } from './general-types';

const GeneralContext = createContext<General.config>({
    moeda: undefined,
    setMoeda: () => {},

    idioma: undefined,
    setIdioma: () => {},
    
    user: undefined,
    setUser: () => {}
});

export default GeneralContext;