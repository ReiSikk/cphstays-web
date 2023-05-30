
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function SearchBar(props) {
  return (
    <TextField id="outlined-search" label="Search field" type="search" onKeyUp={props.searchChanged}  />
  )
}

export default SearchBar