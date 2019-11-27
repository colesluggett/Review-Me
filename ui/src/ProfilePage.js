import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    ListGroup, ListGroupItem,
    ListGroupItemHeading, ListGroupItemText
} from 'reactstrap';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

export class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = { name: this.props.name };
    }

    render() {
        return (
            <Query
                query={gql`
              query User($name: String!){
                User(username: $name, first:1){ 
                  reviews_received{
                    stars
                    title
                    text
                    reviewWriter{
                      username
                      firstName
                      lastName
                    }
                  }
                  username
                  firstName
                  lastName
                  id
                  sex
                  location
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
                                        <CardTitle>{userInfo.firstName} {userInfo.lastName}</CardTitle>
                                        <CardSubtitle className="basicInfo">{userInfo.location}</CardSubtitle>
                                        <CardSubtitle className="basicInfo">ID: {userInfo.id}</CardSubtitle>
                                        <CardText className="reviewBoard">
                                            <ListGroup>
                                                <ListGroupItem className="reviewHeader">Reviews</ListGroupItem>
                                                {userInfo.reviews_received.map(review => {
                                                    return (
                                                        <div>

                                                            <ListGroupItem>
                                                                <ListGroupItemHeading className="reviewTitle">
                                                                    {review.reviewWriter.firstName} {review.reviewWriter.lastName} - {review.title}
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