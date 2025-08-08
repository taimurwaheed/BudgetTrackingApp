import AppRoutes from "./router/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "./context/UserContext ";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";

const queryClient = new QueryClient();

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
