import React, {
  Fragment,
  Suspense,
  lazy,
  type LazyExoticComponent,
} from "react";
import { Route, Outlet } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import AuthGuard from "../guards/AuthGuard";
// import UnauthGuard from "../guards/UnauthGuard";

import { PATH_HOME, PATH_PROFILE, PATH_LOAD_FILES, PATH_AUTH } from "./paths";

interface RouteProps {
  path?: string;
  element?: LazyExoticComponent<(props: any) => JSX.Element> | null;
  layout?: (props: { children: React.ReactNode }) => JSX.Element | null;
  guard?: (props: { children: React.ReactNode }) => JSX.Element | null;
  children?: RouteProps[];
  extraParams?: any;
}

export const renderRoutes = (routes: RouteProps[]) => {
  return routes.map((route, index) => {
    const Component = route.element ?? Fragment;
    const Layout = route.layout ?? Fragment;
    const Guard = route.guard ?? Fragment;
    return (
      <Route
        key={index}
        path={route.path}
        element={
          <Suspense fallback={null}>
            <Guard>
              <Layout>{route.children ? <Outlet /> : <Component />}</Layout>
            </Guard>
          </Suspense>
        }
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    );
  });
};

export const routes: RouteProps[] = [
  {
    path: PATH_AUTH.login,
    // guard: UnauthGuard,
    element: lazy(async () => await import("../pages/auth/Login")),
  },
  {
    path: "/",
    layout: DashboardLayout,
    guard: AuthGuard,
    children: [
      {
        path: PATH_HOME.root,
        element: lazy(async () => await import("../pages/Home")),
      },
      {
        path: PATH_LOAD_FILES.root,
        element: lazy(async () => await import("../pages/LoadFiles")),
      },
      {
        path: PATH_PROFILE.root,
        element: lazy(async () => await import("../pages/Profile")),
      },
    ],
  },
  // 404
  {
    path: "*",
    element: lazy(async () => await import("../pages/Page404")),
  },
];
