import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function NotFound() {
  return (
    <div style={{margin: 'auto', display: 'block'}}>
      <h1>That page does not exist</h1>
      <br />
      <Button variant="outlined" component={Link} to={'/'}>Go Home</Button>
    </div>
  )
}

export default NotFound;