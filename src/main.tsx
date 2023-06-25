import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRouter.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { FormAppareance } from "./constants/ClerkFormAppearance.ts";
import "./index.css";

if (!import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={clerkPubKey}
      appearance={{ ...FormAppareance }}
    >
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
