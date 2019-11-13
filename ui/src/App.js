import React, { Component } from "react";
import "./App.css";
import UserList from "./UserList";
import gql from "graphql-tag";
import { useQuery } from '@apollo/react-hooks';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const GET_USERS = gql`
    {
    User{ 
      id
      name
      sex
    }
  }
`;

function Users() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select name="user" >
      {data.User.map(user => (
        <h5 key={user.id}>
          <Link to={`/user/${user.name}`}>{user.name}'s Page</Link>
        </h5>
      ))}
    </select>
  );
}

const IndexPage = () => {
  return (
    <h3>Home Page</h3>
  );
};
const AboutPage = () => {
  return (
    <h3>About Page</h3>
  );
};

const UsersPage = () => {
  return (
    <>
      {
        Users
      }
    </>
  );
};
const UserPage = ({ match, location }) => {
  const { params: { name } } = match;

  return (
    <>
      <p>
        <strong>User ID: </strong>
        {name}
      </p>
      <p>
        <strong>User Name: </strong>
        {Users[name - 1].id}
      </p>
    </>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={process.env.PUBLIC_URL + "/img/logo.png"}
            className="App-logo"
            alt="logo"
          />
        </header>
        <Router>
          <ul className="List">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/user/:name" component={UserPage} />
          <Route exact path="/about" component={AboutPage} />
        </Router>
        <UserList />

      </div>
    );
  }
}

export default App;