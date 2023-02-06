import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Sort({entries}) {
  const [sort, setsort] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setsort(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSort = () => {
    entries.sort()
    console.log(entries.sort())
  }

  return (
    <div>
      <FormControl sx={{ m: .1, width: 125 }}>
        <InputLabel id="demo-controlled-open-select-label">Sort</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={sort}
          label="Sort"
          onChange={handleChange}
          sort={handleSort}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Name A-Z</MenuItem>
          <MenuItem value={20}>Name Z-A</MenuItem>
          <MenuItem value={30}>Rating 5-1</MenuItem>
          <MenuItem value={30}>Rating 1-5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
