import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({ wilayas }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={wilayas}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="State" />}
    />
  );
}
