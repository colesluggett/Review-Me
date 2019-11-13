import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigation } from './Navigation';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class Users extends Component {

  render() {
    return (
      <Query
        query={gql`
          {
            User{ 
              name
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          return (
            <div>
              <ListGroup className="usersBoard">
                <ListGroupItem className="justify-content-between">Users</ListGroupItem>
                {data.User.map(user => {
                  return (
                    <ListGroupItem className="justify-content-between"><Link to={`/user/${user.name}`} className="link">{user.name}</Link></ListGroupItem>
                  );
                })}
              </ListGroup>
            </div>
          );
        }
        }
      </Query>);
  }
}

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name };
  }

  render() {
    return (
      <Query
        query={gql`
              query User($name: String!){
                User(name: $name, first:1){ 
                  reviews_received{
                    stars
                    text
                    reviewWriter{
                      name
                    }
                  }
                  name
                  sex
                }
              }
          `}
        variables={{ name: this.state.name }}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          let userInfo = data.User[0];
          return (
            <div>
              <div>
                <Card>
                  <div className="picContainer">
                    <img className="profilePic" src={process.env.PUBLIC_URL + "/img/pp.jpg"} alt="profile pic" />
                  </div>
                  <CardBody>
                    <CardTitle>{userInfo.name}</CardTitle>
                    {/* <CardSubtitle className="basicInfo">{userInfo.sex}</CardSubtitle> */}
                    <Button>Write Review</Button>
                    <CardText className="reviewBoard">
                      <ListGroup>
                      {userInfo.reviews_received.map(review => {
                        return (
                          <div>
                            <ListGroupItem className="reviewHeader">Reviews</ListGroupItem>
                            <ListGroupItem>
                              <ListGroupItemHeading className="reviewTitle">
                                {review.reviewWriter.name} - title will go here
                                    </ListGroupItemHeading>
                              <ListGroupItemHeading className="reviewStars">
                                {review.stars}/5
                                    </ListGroupItemHeading>
                              <ListGroupItemText className="reviewText">
                                {review.text}
                                    </ListGroupItemText>
                            </ListGroupItem>
                          </div>
                        );
                      })
                      }
                      </ListGroup>
                    </CardText>
                    
                  </CardBody>
                </Card>
              </div>
            </div>
          );
        }
        }
      </Query>
    );
  }
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
        <Users />
      }
    </>
  );
};
const UserPage = ({ match, location }) => {
  const { params: { name } } = match;

  return (
    <>
      <ProfilePage name={name} />
    </>
  );
};
const LoginPage = ({ match, location }) => {
  const { params: { name } } = match;

  return (
    <>
      <h1>Log in</h1>
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
                  <Route exact path="/user/:name" component={UserPage} />

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
