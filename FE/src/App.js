import './App.css';
import RouterContent from './Router';
import { Helmet } from "react-helmet";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { Box } from '@mui/material';
import { AuthProvider } from './hooks/useAuth';


function App() {
  return (
    <Box className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Helmet>
        <AuthProvider>
          <RouterContent />
        </AuthProvider>
      </ThemeProvider>
    </Box>
  );
}

export default App;
