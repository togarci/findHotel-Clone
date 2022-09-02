import { useContext, useState } from 'react';
import { PencilSimple } from 'phosphor-react';
import { HomeContext } from '../../state-management';

import DatePicker from '../Geral/DatePicker';

import {
    Card,
    Container,
    TextField,
    Box,
    Button,
    OutlinedInput,
    InputAdornment,
} from '@mui/material';

import Image from 'next/image'
import lgAgoda from '../../media/agoda.svg';
import lgBooking from '../../media/booking.svg';
import lgExpedia from '../../media/expedia.svg';
import lgHotels from '../../media/hotels.svg';
import QtdeModal from './Modal/Qtde';


const Content = () => {
    const {
        local,
        setLocal,
        entrada,
        setEntrada,
        saida,
        setSaida,
        qtdeQuarto,
        qtdeAdultos,
        qtdeCriancas,
    } = useContext(HomeContext);

    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <section>
            <Container
                sx={{ display:"flex" }}
            >
                <Card sx={{ padding: '24px', boxShadow: 'rgb(42 51 61 / 16%) 0px 4px 10px 0px' }}>
                    <h2 style={{ margin: '0px auto 30px auto', width: '90%', textAlign: 'center' }}>Encontre o hotel ideal ao melhor preço</h2>
                    <TextField
                        sx={{ width: '100%' }}
                        label="Ex. cidade, região, distrito ou um hotel específico"
                        variant="outlined"
                        value={local}
                        onChange={(value: any) => setLocal(value.target.value)}
                    />
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px'}}>
                        <Box sx={{ width: '48%' }}>
                            <DatePicker 
                                label="Entrada"
                                value={entrada}
                                handleValue={setEntrada}
                            />
                        </Box>
                        <Box sx={{ width: '48%' }}>
                            <DatePicker 
                                label="Saída"
                                value={saida}
                                handleValue={setSaida}
                            />
                        </Box>
                    </Box>

                    <OutlinedInput
                        sx={{ marginTop: '15px' }}
                        fullWidth
                        id="qtde-input"
                        type={'text'}
                        value={`${qtdeAdultos + qtdeCriancas} Hóspedes, ${qtdeQuarto} Quarto`}
                        onClick={() => setOpenModal(true) }
                        endAdornment={
                            <InputAdornment position="end">
                                <Button
                                    variant="outlined"
                                    sx={{ minWidth: '30px', padding: '5px' }}
                                >
                                    <PencilSimple size={20} weight="fill" />
                                </Button>
                            </InputAdornment>
                        }
                    />

                    <Button
                        sx={{ marginTop: '15px', textTransform: 'none' }}
                        fullWidth
                        variant="contained"
                        size="large"
                    >
                        Pesquisar
                    </Button>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px'}}>
                        <Image src={lgExpedia}/>
                        <Image src={lgBooking}/>
                        <Image src={lgHotels}/>
                        <Image width={50} height={25} src={lgAgoda}/>
                    </Box>
                </Card>
            </Container>
            <QtdeModal
                openModal={openModal}
                handleModal={(value: boolean) => setOpenModal(value)}
            />
        </section>
    )
}

export default Content;