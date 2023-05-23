import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectRooms(props) {


  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="location-select-autowidth-label">Rooms</InputLabel>
        <Select
          labelId="rooms"
          id="rooms-select-autowidth"
          value={props.rooms}
          onChange={props.handleRooms}
          autoWidth
          label="rooms"
        >
          <MenuItem value="all">
            <em>Any</em>
          </MenuItem>
          <MenuItem value="rooms-1">1</MenuItem>
          <MenuItem value="rooms-2">2</MenuItem>
          <MenuItem value="rooms-3">3</MenuItem>
          <MenuItem value="rooms-4">4</MenuItem>
          <MenuItem value="rooms-5">5</MenuItem>
          <MenuItem value="rooms-6">6</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}