import { 
    FormControl,
    InputLabel,
    Select,
    Popper,
    Paper,
    Button,
    MenuItem
} from "@mui/material";
import { useState, MouseEvent } from "react";
import { types } from './types';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const DatePicker = ({ value, handleValue, label }: types.props ) => {
    const [open, handleOpen] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const openPopper = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        handleOpen(!open);
    };
    return (
        <>
            <Button 
                fullWidth 
                sx={{ hover: { background: 'none'}, padding: '0px', textTransform: 'none' }} 
                onClick={openPopper}
                
            >
                <FormControl fullWidth>
                    <InputLabel id={`data-lbl-${label}`}>{ label }</InputLabel>
                    <Select
                        labelId={`data-lbl-${label}`}
                        id="data-entrada-select"
                        value={value ? 1 : ''}
                        label={label}
                        sx={{ color: '#1972D2', textAlign: 'start', fontWeight: 'bold' }}
                        readOnly
                    >
                        <MenuItem value={1}>{ value && format(value, 'PP') }</MenuItem>
                    </Select>

                </FormControl>
            </Button>
            <Popper open={open} 
                anchorEl={anchorEl}
                placement="bottom"
            >
                <Paper sx={{ paddind: '20px'}}>
                    <DayPicker
                        mode="single"
                        selected={value}
                        onSelect={ (vl: any) => {
                            handleValue(vl)
                            handleOpen(false)
                        }}
                    /> 
                </Paper>
            </Popper>
        </>
    )
}

export default DatePicker;