import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { Paper, List, Container, Grid, Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import './App.css';
import { call, signout } from './service/ApiService';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
    };
  }

  add = (item) => {
    call("/todo", "POST", item)
      .then((response) => {
        this.setState({ items: response.data });
      })
      .catch((error) => {
        console.error("Error adding todo item:", error);
      });
  };

  delete = (item) => {
    call("/todo", "DELETE", item)
      .then((response) => {
        this.setState({ items: response.data });
      })
      .catch((error) => {
        console.error("Error deleting todo item:", error);
      });
  };

  update = (item) => {
    call("/todo", "PUT", item)
      .then((response) => {
        this.setState({ items: response.data });
      })
      .catch((error) => {
        console.error("Error updating todo item:", error);
      });
  };

  componentDidMount() {
    call("/todo", "GET", null)
      .then((response) => {
        this.setState({ items: response.data, loading: false });
      })
      .catch((error) => {
        console.error("Error fetching todo items:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    const todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item) => (
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

    const navigationBar = (
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

    const todoListPage = (
      <div>
        {navigationBar}
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );

    const loadingPage = <h1>로딩중..</h1>;
    const content = this.state.loading ? loadingPage : todoListPage;

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;
