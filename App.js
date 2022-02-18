import { useColorScheme } from "react-native";
import Home from "./src/Home";
import { ThemeProvider } from "styled-components";
import themes from "./src/Theme/";

export default function App() {
  const deviceTheme = useColorScheme();

  console.log(deviceTheme);

  const theme = themes[deviceTheme] || theme.dark;

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
