import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<App />} />
          </Routes>
        </div>
        <div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
