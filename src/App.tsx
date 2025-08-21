import AppRoutes from "./router/routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "./context/AppContext";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { queryClient } from "./services/api-config/config";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </QueryClientProvider>
    </ThemeProvider >
  );
}

export default App;
