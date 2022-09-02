import { AppBar, Toolbar, IconButton, Button, Box } from '@mui/material'
import { useContext, useState, useEffect } from 'react';

import Image from 'next/image'
import logo from '../../media/logo.png';
import brlIcon from '../../media/brl.svg';
import ModalIdioma from './modal/Idioma';
import ModalLogin from './modal/Login';

import { GeneralContext } from '../../state-management';

const Header = () => {
    const { moeda, setMoeda, idioma, setIdioma, user } = useContext(GeneralContext);

    useEffect(() => {
		if (!moeda) setMoeda('BRL');
		if (!idioma) setIdioma('PT-BR');
	},[])

    const [modalIdioma, setModalIdioma] = useState<boolean>(false);
    const [modalLogin, setModalLogin] = useState<boolean>(false);

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar 
                sx={{ padding: '5px 0px', color: '#000', backgroundColor: '#FFF', boxShadow: 'none', position: 'relative' }} 
                component="nav">
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                </IconButton>
                <Box sx={{ flexGrow: 1 }}>
                    <div style={{ width: '50px' }}>
                        <Image src={logo}></Image>
                    </div>
                </Box>
                <Box>
                    <Button 
                        sx={{ margin: '0px 10px', color: 'rgb(42, 51, 61)', fontWeight: 800, textTransform: 'none' }}
                        onClick={ () => setModalIdioma(true) }
                    >
                        <div style={{ display: 'flex', alignItems: 'center', width: '20px', marginRight: '5px'}}>
                            <Image style={{ borderRadius: '20px '}} src={brlIcon}/>
                        </div>
                        { moeda }
                    </Button>
                    <Button 
                        sx={{ margin: '0px 10px', color: 'rgb(42, 51, 61)', fontWeight: 800, textTransform: 'none' }}
                        onClick={ () => setModalLogin(true) }
                    >
                        <i style={{ fontSize: '20px', marginRight: '5px' }} className="fa-solid fa-circle-user"></i>
                        { user?.username ? user.username : 'Entrar' }
                    </Button>
                </Box>
                </Toolbar>
            </AppBar>
            
            <ModalIdioma
                openModal={modalIdioma}
                handleModal={(value: boolean) => setModalIdioma(value)}
            />
            <ModalLogin
                openModal={modalLogin}
                handleModal={(value: boolean) => setModalLogin(value)}
            />
        </Box>
    )
}

export default Header;