import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';


export default function SelectPrice(props) {

    return (
<div>
    <FormControl sx={{ m: 1 }}>
       <InputLabel htmlFor="outlined-adornment-amount">Max Rent</InputLabel>
       <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<InputAdornment position="start">DKK</InputAdornment>}
        label="Amount"
        helperText="Enter max rent"
        placeholder='Enter rent'
        onChange={props.priceChanged} 
        />
     </FormControl>
</div>
    )
}
