import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	Box,
	FormControl,
	Select,
	InputLabel,
	MenuItem,
	IconButton,

} from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';

import { useContext, useEffect } from "react";
import { propModal } from '../../types';
import { GeneralContext } from "../../../../state-management";

const Idioma = ({ openModal, handleModal }: propModal) => {
	const { 
		moeda,
		setMoeda,
		idioma,
		setIdioma
	} = useContext(GeneralContext);	

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
			<DialogTitle sx={{ textAlign: 'center' }}>Idioma e moeda</DialogTitle>
			<span style={{ textAlign: 'center', color: 'rgb(42, 51, 61)', padding: '5px 30px' }}>Escolha seu idioma e moeda preferidos.</span>
				<DialogContent sx={{ paddingBottom: '0px'}}>
					<Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
						<FormControl fullWidth sx={{ m: 1, minWidth: 180 }}>
							<InputLabel sx={{ backgroundColor: '#FFF', padding: '0px 10px'}} id="idioma-select-lbl">Idioma</InputLabel>
							<Select
								labelId="idioma-select-lbl"
								id="idioma-select"
								value={idioma}
								onChange={(value: any) => setIdioma(value.target.value)}
							>
								<MenuItem value={'ES'}>Espanhol</MenuItem>
								<MenuItem value={'EN'}>Inglês</MenuItem>
								<MenuItem value={'PT'}>Português</MenuItem>
								<MenuItem value={'PT-BR'}>Português Brasil</MenuItem>
							</Select>
						</FormControl>
						<FormControl fullWidth sx={{ m: 1, minWidth: 180 }}>
							<InputLabel sx={{ backgroundColor: '#fff', padding: '0px 10px' }} id="moeda-select-lbl">Moeda</InputLabel>
							<Select
								labelId="moeda-select-lbl"
								id="moeda-select"
								value={moeda}
								onChange={(value: any) => setMoeda(value.target.value)}
							>
								<MenuItem value={'ARS'}>Argentina Peso (ARS)</MenuItem>
								<MenuItem value={'BRL'}>Brasil Real (BRL)</MenuItem>
								<MenuItem value={'USD'}>EUA Dolar (USD)</MenuItem>
								<MenuItem value={'EUR'}>Euro (EUR)</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</DialogContent>
				<DialogActions sx={{ padding: '0px 30px 20px 30px'}}>
					<Button
                        sx={{ marginTop: '15px', textTransform: 'none' }}
                        fullWidth
                        variant="contained"
                        size="large"
						onClick={() => handleModal(false)}
                    >
                        Salvar
                    </Button>
			</DialogActions>
	  </Dialog>
	)
}

export default Idioma;