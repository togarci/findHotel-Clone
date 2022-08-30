export interface propModal {
    openModal: boolean,
    handleModal: (value: boolean) => void
}

export interface listRoomModel {
    index: number,
    qtdeAdultos: number,
    qtdeCriancas: number
}

export interface dates {
    checkin: Date,
    checkout: Date
}