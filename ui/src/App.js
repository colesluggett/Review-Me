import React, { Component } from "react";
import { Button, Container } from 'reactstrap';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './SignUp';
import WriteReview from './WriteReview';
import { Home } from './Home'
import { Navigation } from './Navigation';
import { Users } from './Users';
import { ProfilePage } from './ProfilePage';

class IndexPage extends Component{
  state = { editing: null, };
  render() {
    const { editing } = this.state;
    return(
      <Container fluid>
        <Button
          className="my-2"
          color="primary"
          onClick={() => this.setState({ editing: {} })}
        >Create User
        </Button>
        <Home
          canEdit={() => true}
          onEdit={(post) => this.setState({ editing: post })}
        />
        {editing && (
          <SignUp
            post={editing}
            onClose={() => this.setState({ editing: null })}
          />
        )}
      </Container>
    );
  }
};

class UsersPage extends Component {
  state = { editing: null, };
  render() {
    const { editing } = this.state;
    return (
      <Container fluid>
        <Button
          className="my-2"
          color="primary"
          onClick={() => this.setState({ editing: {} })}
        >Write Review
        </Button>
        <Users
          canEdit={() => true}
          onEdit={(post) => this.setState({ editing: post })}
        />
        {editing && (
          <WriteReview
            post={editing}
            onClose={() => this.setState({ editing: null })}
          />
        )}
      </Container>
    );
  }
};

const UserPage = ({ match, location }) => {
  const { params: { username } } = match;

  return (
    <>
      <ProfilePage name={username} />
    </>
  );
};

const LoginPage = ({ match, location }) => {
  const { params: { name } } = match;

  return (
    <>
      <h1>In development</h1>
    </>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <main className="main-content col-lg-12 col-md-12 col-sm-12 p-0">
              <Router>
                <Navigation />
                <div class="main-content-container container-fluid px-4">

                  <Route exact path="/" component={IndexPage} />
                  <Route exact path="/users" component={UsersPage} />
                  <Route exact path="/login" component={LoginPage} />
                  <Route exact path="/user/:username" component={UserPage} />

                </div>
              </Router>
              
            </main>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
