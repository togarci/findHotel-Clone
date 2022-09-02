export namespace General {
    export interface User {
        username: string,
        token: string
    }
    
    export interface config {
        moeda: string,
        setMoeda: (value: string) => void,

        idioma: string,
        setIdioma: (value: string) => void

        user: User,
        setUser: (value: User) => void
    }
}