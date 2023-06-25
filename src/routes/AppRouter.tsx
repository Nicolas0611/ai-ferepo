import { PATHS } from "./paths.js";
import Home from "../pages/Home/Home.tsx";
import { createBrowserRouter } from "react-router-dom";
import { RoutesProps } from "../interfaces/RoutesInterface.ts";
import NavigationLayout from "../Layout/NavigationLayout.tsx";
import SignInPage from "../pages/Auth/LoginPage.tsx";
import { SignedIn } from "@clerk/clerk-react";
import SignUpPage from "../pages/Auth/SignUpPage.tsx";

let routes: RoutesProps[] = [
  {
    path: PATHS.HOME,
    element: <Home />,
  },
  {
    path: PATHS.LOGIN,
    element: <SignInPage />,
  },
  {
    path: PATHS.SIGNUP,
    element: <SignUpPage />,
  },
  {
    path: PATHS.SIGNUP,
    element: <SignInPage />,
  },
  {
    path: PATHS.BLOG,
    element: (
      <SignedIn>
        <h1>blog</h1>
      </SignedIn>
    ),
  },
  {
    path: PATHS.ABOUT,
    element: (
      <div>
        <h1>about</h1>
      </div>
    ),
  },
  {
    path: PATHS.COMMUNITY,
    element: (
      <div>
        <h1>community</h1>
      </div>
    ),
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
  errorElement: <h1> ERROR PAGE</h1>,
}));

export const router = createBrowserRouter([
  {
    element: <NavigationLayout />,
    children: routes,
  },
]);
