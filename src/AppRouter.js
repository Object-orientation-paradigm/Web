import React from "react";
import "./index.css";
import Login from "./login";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Todo from "./Todo";
import App from "./App";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       fsoftwareengineer, {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

class AppRouter extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isAuthenticated: false
  //   };
  // }
  // componentDidMount() {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     // 토큰이 있는 경우 인증된 상태로 설정
  //     this.setState({ isAuthenticated: true });
  //   }
  // }

  render() {
    let token = localStorage.getItem("token");
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={token!== null ? <App /> : <Navigate to="/login" />} />
            <Route path="/todo" element={<App />} />
          </Routes>
        {/* <div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div> */}
      </BrowserRouter>
    );
  }
}

export default AppRouter;
