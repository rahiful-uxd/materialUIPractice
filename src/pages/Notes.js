import React from 'react'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
const Notes = () => {
  return (
    <div>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create New Notes
      </Typography>

      <Button 
      onClick={ ()=> console.log('You clicked me')}
      type='submit'
      color='secondary'
      variant='contained'
      >
        submit
      </Button>

    </div>
  )
}

export default Notes