import { ThemeProvider, createTheme } from '@mui/material/styles';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes/ROUTES";

const theme = createTheme({
  palette: {
    primary: {
      main: '#000', // Primary color
    },
    // ... other palette colors
  },
  // ... other theme settings
});

const routes = createBrowserRouter(ROUTES)

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </>
  );
}

export default App;
