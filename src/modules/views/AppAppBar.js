import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import White from "./white.png"

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>

            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="https://fasttrack.tn/fasttrack#/signin"
              sx={{ fontSize: 24 }}
            >
              <img
                src={White}
                alt="wonder"
                height="80"
              />
            </Link>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="https://fasttrack.tn/fasttrack#/signin"
              sx={{ fontSize: 24 }}
            >
              {'Fast Track'}
            </Link>
          </Box>
          {/*<Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="https://fasttrack.tn/fasttrack#/signin"
            sx={{ fontSize: 24 }}
          >
            {'Fast Track'}
  </Link>*/}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-in/"
              sx={rightLink}
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Sign Up'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
