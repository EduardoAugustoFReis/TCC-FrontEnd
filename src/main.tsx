import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./styles/globalStyles";
import AppRouter from "./routes/AppRoutes";
import AuthProvider from "./context/Auth/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <GlobalStyles />
      <AppRouter />
    </AuthProvider>
  </StrictMode>
);
