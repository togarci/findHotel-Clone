import { createContext } from 'react';

import { Home } from './home-types';

const HomeContext = createContext<Home.formHome>({
    local: undefined,
    setLocal: (value: string) => {},
    
    entrada: undefined,
    setEntrada: (value: Date) => {},
    
    saida: undefined,
    setSaida: (value: Date) => {},
    
    qtdeQuarto: undefined,
    setQuarto: (value: number) => {},
    
    qtdeAdultos: undefined,
    setAdultos: (value: number) => {},
    
    qtdeCriancas: undefined,
    setCriancas: (value: number) => {}
});

export default HomeContext;