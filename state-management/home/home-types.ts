export namespace Home {
    export interface formHome {
        local: string,
        setLocal: (value: string) => void,

        entrada: Date,
        setEntrada: (value: Date) => void,

        saida: Date,
        setSaida: (value: Date) => void,

        qtdeQuarto: number,
        setQuarto: (value: number) => void,

        qtdeAdultos: number,
        setAdultos: (value: number) => void

        qtdeCriancas: number,
        setCriancas: (value: number) => void
    }
}