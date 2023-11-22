import { TextField } from '@mui/material';
import React from 'react';

function Email() {
  return (
    <TextField
      type="email"
      margin="normal"
      required
      autoFocus
      sx={{
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': { borderColor: '#FC5400' },
        },
      }}
      label="Correo Electrónico"
      name="email"
      id="email"
      fullWidth
      onChange={handleChange}
      helperText={emailError}
      error={emailError}
    />
  );
}

export { Email };
