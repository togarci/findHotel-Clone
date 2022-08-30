import { Container, Link, Button } from "@mui/material";

const Footer = () => {
    return (
        <footer>
            <Container 
                maxWidth="md" 
                sx={{ 
                    display: 'flex',
                    flexWrap: 'wrap',
                    margin: '25px auto',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                <Link href="#" sx={{ margin: '5px 10px'}} fontWeight={600} underline="hover">
                    {'Quem Somos'}
                </Link>
                <Link href="#" sx={{ margin: '5px 10px'}} fontWeight={600} underline="hover">
                    {'Carreiras'}
                </Link>
                <Link href="#" sx={{ margin: '5px 10px'}} fontWeight={600} underline="hover">
                    {'Políticas de Privacidade'}
                </Link>
                <Link href="#" sx={{ margin: '5px 10px'}} fontWeight={600} underline="hover">
                    {'Termos de Uso'}
                </Link>
                <Link href="#" sx={{ margin: '5px 10px'}} fontWeight={600} underline="hover">
                    {'Ajuda'}
                </Link>
                <Button sx={{ fontWeight: 600, textTransform: 'none', fontSize: '11pt' }} size="small" variant="outlined">Contato</Button>
            </Container>            
        </footer>
    )
}

export default Footer;