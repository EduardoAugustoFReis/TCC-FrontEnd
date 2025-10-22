import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./styles/globalStyles";
import AppRouter from "./routes/AppRoutes";
import AuthProvider from "./context/Auth/AuthProvider";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
