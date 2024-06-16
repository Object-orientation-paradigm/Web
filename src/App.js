import React from 'react';
import { AppBar, Button, Container, Grid, List, Paper, Toolbar, Typography } from '@material-ui/core';
import AddTodo from './AddTodo';
import './App.css';
import Todo from './Todo';
import { call, signout } from './service/ApiService';
import commonApis from './service/commonApi';

class App extends React.Component {
  state = {
    items: [],
    loading: true,
  };

  add = (item) => {
    commonApis.post("/todo", item).then((response) => {
      this.setState({ items: response.data });
    });
  };

  delete = (item) => {
    commonApis.post("/todo", item).then((response) => {
      this.setState({ items: response.data });
    });
  };

  update = (item) => {
    commonApis.post("/todo", item).then((response) => {
      this.setState({ items: response.data });
    });
  };

  componentDidMount() {
    call("/api/todo", "GET", null).then((response) => 
      this.setState({ items: response.data, loading: false })
    );
  }

  render() {
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo
              item={item}
              key={item.id}
              delete={this.delete}
              update={this.update}
            />
          ))}
        </List>
      </Paper>
    );

    var navigationBar = (
      <AppBar position="static">
        <Toolbar>
          <Grid justify="space-between" container>
            <Grid item>
              <Typography variant="h6">오늘의 할일</Typography>
            </Grid>
            <Grid item>
              <Button color="inherit" onClick={signout}>
                logout
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );

    var todoListPage = (
      <div>
        {navigationBar}
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );

    var loadingPage = <h1>로딩중..</h1>;
    var content = this.state.loading ? loadingPage : todoListPage;

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;
