import { ThemeProvider } from "@mui/material";
import "./App.css";
import Popover from "./components/Popover/Popover.tsx";
import theme from "./theme.js";
import DatePicker from "./components/DatePicker/DatePicker.tsx";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App" style={{ gap: '100px' }}>
          <Popover
            title="Conoce OneExperience"
            subtitle="Comienza con el recorrido de nuestra nueva plataforma dinámica"
            info="Conoce más"
            description="Texto descriptivo"
          />
          <DatePicker />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
