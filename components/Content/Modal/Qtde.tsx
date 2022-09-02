import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
    Divider,
	Button,
	Box,
	IconButton,
    Typography

} from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';
import InputQtde from '../../Geral/InputQtde/InputQtde';

import { useContext, useState } from "react";
import { propModal, listRoomModel } from '../types';
import { HomeContext } from "../../../state-management";

const Qtde = ({ openModal, handleModal }: propModal) => {
    const [listRoom, setListRoom] = useState<Array<listRoomModel>>([{
        index: 1,
        qtdeAdultos: 2,
        qtdeCriancas: 0
    }]);

    const {
        setQuarto,
        setAdultos,
        setCriancas
    } = useContext(HomeContext);

    const setQtde = (index: number, value: number, key: string) => {
        let arrayRoom = [...listRoom];

        switch (key) {
            case 'qtdeAdultos':
                arrayRoom[index] = {...arrayRoom[index], qtdeAdultos: value }
                break
            case 'qtdeCriancas':
                arrayRoom[index] = {...arrayRoom[index], qtdeCriancas: value }
        }

        setListRoom(arrayRoom);
    }

    const addQuarto = () => {
        let arrayRoom = [...listRoom];
        arrayRoom.push({ index: listRoom.length, qtdeAdultos: 2, qtdeCriancas: 0 });
        setListRoom(arrayRoom);
    }

    const removeQuarto = (index: number) => {
        let arrayRoom = listRoom.filter((elem, idx) => idx !== index);
        setListRoom(arrayRoom);
    }


    const updateQtde = () => {
        let [countAdultos, countCrianca] = [0, 0]
        
        listRoom.forEach(elem => { 
            countAdultos += elem.qtdeAdultos;
            countCrianca += elem.qtdeCriancas;
        });
        
        setQuarto(listRoom.length);
        setAdultos(countAdultos);
        setCriancas(countCrianca);
        handleModal(false);
    }

	return (
		<Dialog open={openModal} onClose={() => handleModal(false)}>
			<IconButton
				aria-label="close"
				onClick={() => handleModal(false)}
				sx={{
					position: 'absolute',
					right: 8,
					top: 8,
					color: (theme) => theme.palette.grey[500],
				}}
				>
				<CloseIcon />
			</IconButton>
			<DialogTitle>Quartos e Convidados</DialogTitle>
            <Divider />
            <DialogContent sx={{ maxWidth: '350px' }}>
                <Box component="form" >
                    {
                        listRoom.map((elem, index) => {
                            return (
                                <Box key={`quarto-${index}`} sx={{ width: '100%' }}>
                                    <Box sx={{ display: 'flex', gap:'10px', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography sx={{ fontWeight: 'bolder', width: index === 0 && '350px', flex: 1 }}>
                                            {`Quarto ${index + 1}`}
                                        </Typography>

                                        {
                                            index !== 0 &&
                                            <Button
                                                sx={{ textTransform: 'none' }}
                                                color="error"
                                                variant="text"
                                                onClick={() => removeQuarto(index)}
                                            >Remover quarto</Button>
                                        }
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '100%',
                                        margin: '15px 0px',
                                        gap:'10px'
                                    }}>
                                        <Typography color={'rgb(42, 51, 61)'}>Adultos</Typography>

                                        <InputQtde
                                            value={elem.qtdeAdultos}
                                            handleValue={(value: number) => setQtde(index, value, 'qtdeAdultos') }
                                        />
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '100%',
                                        margin: '15px 0px'
                                    }}>
                                        <Typography color={'rgb(42, 51, 61)'}>Crianças</Typography>

                                        <InputQtde
                                            value={elem.qtdeCriancas}
                                            handleValue={(value: number) => setQtde(index, value, 'qtdeCriancas') }
                                        />
                                    </Box>
                                    <Divider sx={{ margin: '20px 0px' }} />
                                </Box>
                            )
                        })
                    }
                </Box>

                <Button sx={{ textTransform: 'none' }} onClick={() => addQuarto()} size="large" fullWidth variant="outlined">+ Adicionar quarto</Button>
            </DialogContent>
            <Divider />
            <DialogActions sx={{ padding: '0px 25px 20px 25px' }}>
                <Button
                    sx={{ marginTop: '15px', textTransform: 'none' }}
                    fullWidth
                    variant="contained"
                    size="large"
                    onClick={() => updateQtde()}
                >
                    Atualizar
                </Button>
            </DialogActions>
	    </Dialog>
	)
}

export default Qtde;