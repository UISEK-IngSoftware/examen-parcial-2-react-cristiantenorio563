import { AppBar, Toolbar, Typography } from "@mui/material";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <AppBar position="static" elevation={3}>
          <Toolbar>

              <Typography
                  variant="h5"
                  sx={{
                      fontWeight: "bold",
                      letterSpacing: 1
                  }}
              >
                  Futurama API
              </Typography>

          </Toolbar>
      </AppBar>

      <Home />
    </>
  );
}

export default App;
