import { PATHS } from "./paths.js";
import Home from "../pages/Home.tsx";
import { createBrowserRouter } from "react-router-dom";
import { RoutesProps } from "../interfaces/RoutesInterface.ts";
import NavigationLayout from "../Layout/NavigationLayout.tsx";

let routes: RoutesProps[] = [
  {
    path: PATHS.HOME,
    element: <Home />,
  },
  {
    path: PATHS.AUTH,
    element: (
      <div>
        <h1>auth page</h1>
      </div>
    ),
  },
  {
    path: PATHS.BLOG,
    element: (
      <div>
        <h1>blog</h1>
      </div>
    ),
    isPrivate: true,
  },
  {
    path: PATHS.ABOUT,
    element: (
      <div>
        <h1>about</h1>
      </div>
    ),
    isPrivate: true,
  },
  {
    path: PATHS.COMMUNITY,
    element: (
      <div>
        <h1>community</h1>
      </div>
    ),
    isPrivate: true,
  },
  {
    path: PATHS.ROOT,
    element: (
      <div>
        <h1>Root page!</h1>
      </div>
    ),
  },
];

routes = routes.map((route) => ({
  ...route,
}));

export const router = createBrowserRouter([
  {
    element: <NavigationLayout />,
    children: routes,
  },
]);
