import { ThemeProvider, createTheme } from "@mui/material";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#fcfdfc",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={themeLight}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
