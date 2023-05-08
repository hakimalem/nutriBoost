import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@material-ui/core/styles";
import classNames from 'classnames';


// THIS WILL BE CHANGED BY THE PROPERTIES
const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

const useStyles = makeStyles({
    root: {
        '& .MuiOutlinedInput-root': {


            '& fieldset': {
                borderColor: '#E4E8F3',
            },
            '&:hover fieldset': {
                borderColor: '#6C7B97',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#E4E8F3',
            },
        },
    },
    width: '100%',
});

export default function SelectProperty() {
    const classes = useStyles();
    const textFieldClassNames = classNames(classes.root, 'w-[100%]');

    return (

        <div className=' w-[80%]'>
            <TextField
                className={textFieldClassNames}
                id="outlined-select-currency"
                select
                // label="Select"
                defaultValue="EUR"
            // helperText="Please select your currency"
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

        </div>
    );
}