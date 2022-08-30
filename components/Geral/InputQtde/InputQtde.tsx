import { qtdeProps } from './types';

import {
    Box,
    Button,
    Typography
} from '@mui/material'

const InputQtde = ({ value, handleValue }: qtdeProps) => {

    const setValue = (action: boolean) => {
        let vl = action
            ? value + 1
            : value - 1

        handleValue(vl);
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
                disabled={ value === 0 ? true : false }
                sx={{ minWidth: '0px', width: '40px' }}
                onClick={() => setValue(false)}
                variant='outlined'
            > - </Button>
            <Typography sx={{ width: '50px', textAlign: 'center', fontWeight: 'bold' }}>
                { value }
            </Typography>
            <Button
                sx={{ minWidth: '0px', width: '40px' }}
                onClick={() => setValue(true)}
                variant='outlined'
            > + </Button>
        </Box>
    )
}

export default InputQtde;