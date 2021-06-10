import React from 'react'
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Copyright = () => {
  return (
    <Typography variant="body2" color="#fff" align="center" style={{ background: '#2E3B55', color: '#fff', height: '60px', padding: '20px' }}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Liberale
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright
