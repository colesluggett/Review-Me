import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    ListGroup, ListGroupItem
} from 'reactstrap';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';

export class Users extends Component {

    render() {
        return (
            <Query
                query={gql`
          {
            User{ 
              username
              firstName
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
                                        <ListGroupItem className="justify-content-between"><Link to={`/user/${user.username}`} className="link">{user.firstName}</Link></ListGroupItem>
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