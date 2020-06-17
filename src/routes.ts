import React from "react";
import { withPageTitle } from "./sharedComponents";
import Login from "./components/Login";

interface RouteType {
  path: string;
  title: string;
  component: any;
}

const routes: RouteType[] = [
  {
    path: "/",
    title: "Login",
    component: Login,
  },
];

const wrappedRoutes = () =>
  routes.map((route) => {
    const title = route.title ? `${route.title} • Elrond Dapp` : "Elrond Dapp";
    return {
      path: route.path,
      component: (withPageTitle(
        title,
        route.component
      ) as any) as React.ComponentClass<{}, any>,
    };
  });

export default wrappedRoutes();
