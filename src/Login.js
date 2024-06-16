import React from 'react';
import { login } from './service/ApiService';
import { Button, TextField, Grid, Link, Container, Typography } from '@material-ui/core';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const username = data.get('userName');
    const password = data.get('password');

    // ApiService의 signin 메소드를 사용해 로그인
    login({ username: username, password: password });
  }

  render() {
    return (
      <Container component="main" maxWidth="xs" style={{ marginTop: '8%' }}>
        <Grid container spacing={2}>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
        </Grid>
        <form noValidate onSubmit={this.handleSubmit}>
          {/* submit 버튼을 클릭하면 handleSubmit 이 실행됨 */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="이름"
                name="userName"
                autoComplete="userName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="패스워드"
                name="password"
                autoComplete="password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                로그인
              </Button>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                계정이 없습니까? 여기서 가입하세요.
              </Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}

export default Login;
