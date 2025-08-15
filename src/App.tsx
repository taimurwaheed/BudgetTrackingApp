import AppRoutes from "./router/routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { queryClient } from "./services/api-services/config";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </QueryClientProvider>
    </ThemeProvider >
  );
}

export default App;
