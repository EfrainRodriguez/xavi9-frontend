import { Box, Typography, Button, AppBar, Hidden, Toolbar, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { alpha, experimentalStyled as styled } from '@mui/material/styles';
import { useMsal } from "@azure/msal-react";

import { setIsAuthenticated } from '../../../../pages/auth/context/auth.actions';
import { LAYOUT } from '../../../../utils/constants';

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  color: theme.palette.text.primary,
  paddingLeft: theme.spacing(3),
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  backgroundColor: alpha(theme.palette.background.default, 0.5),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${LAYOUT.DRAWER_WIDTH}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: LAYOUT.APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: LAYOUT.APPBAR_DESKTOP,
    padding: theme.spacing(0, 3)
  }
}));

// ----------------------------------------------------------------------

interface DashboardNavbarProps {
  onOpenSidebar: () => void;
}

const DashboardNavbar = ({ onOpenSidebar }: DashboardNavbarProps) => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect();
    setIsAuthenticated(false);
  };

  return (
    <RootStyle>
      <ToolbarStyle>
        <Hidden lgUp>
          <IconButton
            onClick={onOpenSidebar}
            sx={{ mr: 1, color: 'text.primary' }}
          >
            <Menu />
          </IconButton>
        </Hidden>
        <Typography variant="h6">
          Xavi9 Project
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="outlined" onClick={handleLogout}>
          Logout
        </Button>
      </ToolbarStyle>
    </RootStyle>
  );
};

export default DashboardNavbar;
