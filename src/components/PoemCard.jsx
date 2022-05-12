import React from 'react';
import { Paper, Box } from '@mui/material';


function PoemCard() {
  return (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 500,
            height: 500,
          },
        }}
        >
        <Paper  sx={{ backgroundColor: "black", opacity : '60%', color : 'white'}}>
        Text
        </Paper>
      </Box>
  )
}

export default PoemCard