import React from "react";
import "./App.css";

import { Context } from "./Context";
import { MainPage } from "./Pages/Main";
import { ThemeProvider } from "@mui/material/styles";
import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Context>
        <AppBar position="static">
          <Toolbar sx={{display: 'flex', justifyContent: 'center'}}>
            <Typography sx={{ fontWeight: "bold" }} variant="h3">
              Frontend Dev
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="App" style={{ margin: "16px 10% 0 10%" }}>
          <MainPage />
        </div>
      </Context>
    </ThemeProvider>
  );
}

export default App;
