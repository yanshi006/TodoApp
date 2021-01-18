import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import { Container, Grid } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: purple
  }
})

ReactDOM.render(
  <Container maxWidth={'sm'}>
    <ThemeProvider theme={theme}>
      <Grid container
        direction='column'
        justify='center'
        alignItems='center'>
        <App />
      </Grid>
    </ThemeProvider>
  </Container>,
  document.getElementById('root')
)