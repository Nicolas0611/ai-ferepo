import { PATHS } from "./paths.js";
import App from "../App.tsx";
import { createBrowserRouter } from "react-router-dom";
import { RoutesProps } from "../interfaces/RoutesInterface.ts";

let routes: RoutesProps[] = [
  {
    path: PATHS.HOME,
    element: <App />,
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

export const router = createBrowserRouter(routes);
