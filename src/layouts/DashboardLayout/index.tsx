import React, { useState } from 'react';
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
  position: 'relative',
  paddingTop: LAYOUT.APPBAR_MOBILE + 16,
  paddingBottom: theme.spacing(4),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('lg')]: {
    paddingTop: LAYOUT.APPBAR_DESKTOP + 8,
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
        <MainStyle>{children}</MainStyle>
    </RootStyle>
  );
};

export default DashboardLayout;
