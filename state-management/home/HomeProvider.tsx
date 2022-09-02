import { useState } from 'react';
import Context from './HomeContext';

const HomeProvider = ({ children }) => {
    const [local, setLocal] = useState<string>();
    const [entrada, setEntrada] = useState<Date>();
    const [saida, setSaida] = useState<Date>();
    const [qtdeQuarto, setQuarto] = useState<number>(1);
    const [qtdeAdultos, setAdultos] = useState<number>(2);
    const [qtdeCriancas, setCriancas] = useState<number>(0);

    return (
        <Context.Provider value={{
            local,
            setLocal,

            entrada,
            setEntrada,

            saida,
            setSaida,

            qtdeQuarto,
            setQuarto,

            qtdeAdultos,
            setAdultos,

            qtdeCriancas,
            setCriancas
        }}>
            { children }
        </Context.Provider>
    )
}

export default HomeProvider;