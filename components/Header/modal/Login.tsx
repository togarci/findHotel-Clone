import {
	Dialog,
	DialogTitle,
	DialogContent,
	Button,
	Box,
	IconButton,
    Divider,
    Typography,
    Link
} from "@mui/material";

import { propModal } from '../types';
import { ChatCircleDots, WhatsappLogo, GoogleLogo, FacebookLogo } from 'phosphor-react';

import CloseIcon from '@mui/icons-material/Close';

const Login = ({ openModal, handleModal}: propModal) => {
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
			<DialogTitle sx={{ textAlign: 'center', marginTop: '20px' }}>Faça o acesso para economizar mais</DialogTitle>
			<span style={{
                textAlign: 'center',
                color: 'rgb(42, 51, 61)',
                padding: '5px 30px',
                width: '350px'
            }}>
                Adquira um código pessoal para iniciar sessão sem uma senha. É rápido e grátis! 🤩
            </span>
            
            <DialogContent sx={{ width: '350px'}}>
                <Box>
                    <Button 
                        sx={{ margin: '5px 0px', textTransform: 'none', padding: '10px 0px' }}
                        fullWidth
                        variant="contained"
                    >
                        <ChatCircleDots style={{ marginRight: '5px' }} color={'#FFF'} size={23} weight="fill" />
                        Obtenho o código via SMS
                    </Button>                                       
                </Box>
                <Box>
                     <Button 
                        sx={{ 
                            backgroundColor: 'rgb(34, 195, 93)',
                            margin: '5px 0px',
                            textTransform: 'none',
                            padding: '10px 0px',
                            "&:hover": {
                                backgroundColor: 'rgb(34, 189, 50)'
                            }
                        }} 
                        fullWidth
                        variant="contained"
                        size="medium"
                    >
                        <WhatsappLogo style={{ marginRight: '5px' }} color={"#FFF"} size={23} weight="fill" />
                        Obtenho o código via WhatsApp
                    </Button>
                </Box>

                <Divider sx={{ fontWeight: 'bolder', fontSize: '11pt', margin: '35px 0px' }}>OU</Divider>
                
                <Box>
                    <Button 
                        sx={{ margin: '5px 0px', textTransform: 'none', padding: '10px 0px'}} 
                        fullWidth
                        variant="outlined"
                        size="medium"
                    >
                        <GoogleLogo style={{ marginRight: '5px' }} color={'rgb(0, 113, 243)'} size={23} weight="fill" />
                        Continuar com Google
                    </Button>
                </Box>
                <Box>
                    <Button 
                        sx={{ margin: '5px 0px', textTransform: 'none', padding: '10px 0px'}} 
                        fullWidth
                        variant="outlined"
                        size="medium"
                    >
                        <FacebookLogo style={{ marginRight: '5px' }} color={'rgb(0, 113, 243)'} size={23} weight="fill" />
                        Continuar com Facebook
                    </Button>
                </Box>

                <Typography
                    sx={{ textAlign: 'center', fontSize: '10pt', color: '#2A333D',  marginTop: '30px'}}
                >Ao se inscrever, você concorda com os nossos&nbsp;
                    <Link href="#" fontWeight={600} underline="hover">
                        {'Termos de Uso'}
                    </Link> 
                    &nbsp;e&nbsp;
                    <Link href="#" fontWeight={600} underline="hover">
                        {'Política de Privacidade'}
                    </Link>.
                </Typography>
            </DialogContent>
	  </Dialog>
    )
}

export default Login;