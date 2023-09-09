import React, { useState } from 'react';
import { Container } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

import { LAYOUT } from '../../utils/constants';

import SidebarLayout from './components/Siderbar';
import NavbarLayout from './components/Navbar';

// ----------------------------------------------------------------------

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: LAYOUT.APPBAR_MOBILE + 16,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: LAYOUT.APPBAR_DESKTOP + 8,
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0)
  }
}));

// ----------------------------------------------------------------------
interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <NavbarLayout
        onOpenSidebar={() => {
          setOpen(true);
        }}
      />
      <SidebarLayout
        isOpenSidebar={open}
        onCloseSidebar={() => {
          setOpen(false);
        }}
      />
      <Container maxWidth="xl">
        <MainStyle>{children}</MainStyle>
      </Container>
    </RootStyle>
  );
};

export default DashboardLayout;
