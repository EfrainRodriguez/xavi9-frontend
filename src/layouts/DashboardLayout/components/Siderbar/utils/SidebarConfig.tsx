import React from "react";
import {
  Chat,
  Home,
  AccountBox,
  DriveFolderUpload,
} from "@mui/icons-material";

// paths
import {
  // PATH_HOME,
  PATH_PROFILE,
  PATH_LOAD_FILES,
  PATH_CHAT
} from "../../../../../routes/paths";

// ----------------------------------------------------------------------

export interface SideConfigProps {
  title?: string;
  subheader?: string;
  info?: string;
  icon?: React.ReactNode;
  href?: string;
  items?: SideConfigProps[];
}

const ICONS = {
  chat: <Chat />,
  home: <Home />,
  profile: <AccountBox />,
  loadFile: <DriveFolderUpload />,
};

const sidebarConfig: SideConfigProps[] = [
  {
    items: [
      // {
      //   title: "Dashboard",
      //   icon: ICONS.home,
      //   href: PATH_HOME.root,
      // },
      {
        title: "Chat",
        icon: ICONS.chat,
        href: PATH_CHAT.root,
      },
      {
        title: "Load Files",
        icon: ICONS.loadFile,
        href: PATH_LOAD_FILES.root,
      },
      {
        title: "Profile",
        icon: ICONS.profile,
        href: PATH_PROFILE.root,
      },
    ],
  },
];

export default sidebarConfig;
