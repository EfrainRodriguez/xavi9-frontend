import React from "react";
import {
  SnackbarProvider,
  type WithSnackbarProps,
  type VariantType,
  useSnackbar,
} from "notistack";
// material
import { alpha } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { Error, Warning, Info, CheckCircle } from "@mui/icons-material";

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme: any) => {
  const isLight = theme.palette.mode === "light";

  const createStyle = {
    color: `${theme.palette.text.primary} !important`,
    backgroundColor: `${theme.palette.background.paper} !important`,
  };

  return {
    containerRoot: {
      "& .MuiCollapse-wrapperInner": {
        width: "100%",
      },
    },
    contentRoot: {
      width: "100%",
      padding: theme.spacing(1.5),
      boxShadow: theme.customShadows.z8,
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.grey[isLight ? 0 : 800],
      backgroundColor: theme.palette.grey[isLight ? 900 : 0],
    },
    message: {
      padding: 0,
      fontWeight: theme.typography.fontWeightMedium,
    },
    action: {
      marginRight: -4,
      "& svg": {
        width: 20,
        height: 20,
        opacity: 0.48,
        "&:hover": { opacity: 1 },
      },
    },
    info: { ...createStyle },
    success: { ...createStyle },
    warning: { ...createStyle },
    error: { ...createStyle },
  };
});

// ----------------------------------------------------------------------

interface SnackbarIconProps {
  color: string;
}

const SnackbarIcon = ({ color }: SnackbarIconProps) => {
  const getIcon = (type: string) => {
    if (type === "success") return <CheckCircle />;
    if (type === "error") return <Error />;
    if (type === "warning") return <Warning />;
    if (type === "info") return <Info />;
    return <CheckCircle />;
  };

  return (
    <Box
      component="span"
      sx={{
        mr: 1.5,
        width: 40,
        height: 40,
        display: "flex",
        borderRadius: 1.5,
        alignItems: "center",
        justifyContent: "center",
        color: `${color}.main`,
        bgcolor: (theme: any) => alpha(theme.palette[color].main, 0.16),
      }}
    >
      {getIcon(color)}
    </Box>
  );
};

let useSnackbarRef: WithSnackbarProps;

export const SnackbarUtilsConfigurator = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export const notification = {
  success(msg: string) {
    this.toast(msg, "success");
  },
  warning(msg: string) {
    this.toast(msg, "warning");
  },
  info(msg: string) {
    this.toast(msg, "info");
  },
  error(msg: string) {
    this.toast(msg, "error");
  },
  toast(msg: string, variant: VariantType = "default") {
    useSnackbarRef.enqueueSnackbar(msg, { variant });
  },
};

interface NotistackProviderProps {
  children: React.ReactNode;
}

const NotistackProvider = ({ children }: NotistackProviderProps) => {
  const classes = useStyles();

  return (
    <SnackbarProvider
      dense
      maxSnack={5}
      preventDuplicate
      autoHideDuration={4000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      iconVariant={{
        success: <SnackbarIcon color="success" />,
        error: <SnackbarIcon color="error" />,
        warning: <SnackbarIcon color="warning" />,
        info: <SnackbarIcon color="info" />,
      }}
      classes={
        {
          containerRoot: classes.containerRoot,
          contentRoot: classes.contentRoot,
          message: classes.message,
          action: classes.action,
          variantInfo: classes.info,
          variantSuccess: classes.success,
          variantWarning: classes.warning,
          variantError: classes.error,
        } as any
      }
    >
      <SnackbarUtilsConfigurator />
      {children}
    </SnackbarProvider>
  );
};

export default NotistackProvider;
