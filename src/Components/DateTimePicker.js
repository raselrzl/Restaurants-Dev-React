import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
export default function MaterialUIPickers({formdata, addDate}) {
  const handleChange = (e) => {
   addDate(e.toString().substring(0, 34))
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={2}>
        <DateTimePicker          
          variant="standard"
          label="Date&Time"
          ampm={false}
          value={formdata.dateTime}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}