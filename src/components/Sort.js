import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Sort({sort, setSortCallBack}) {
//   const [sort, setsort] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setSortCallBack(event.target.value);
    console.log("changing");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

   // event listener  

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
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={0}>Name A-Z</MenuItem>
          {/* <MenuItem value={1}>Name Z-A</MenuItem>
          <MenuItem value={2}>Rating 5-1</MenuItem>
          <MenuItem value={3}>Rating 1-5</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}
