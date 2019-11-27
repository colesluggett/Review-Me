import React, { useState, Component } from 'react';

import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Mutation, renderToStringWithData } from 'react-apollo';
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SignUp.css";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import { Form as FinalForm, Field } from 'react-final-form';
import client from './index';

function getId() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const CREATE_REVIEW = gql`
  mutation CreateReview
    (
        $id: ID!, 
        $title: String!, 
        $stars: Int, 
        $text: String,
        $id_from: ID!,
        $id_to: ID!
        ) 
            {
        CreateReview
                    (
                        id: $id, 
                        title: $title, 
                        stars: $stars, 
                        text: $text
                        ) {
        id
        }
        AddUserReviews_written
                    (
                        from: {
                            id: $id_from
                        }, to: {
                            id: $id
                        }) {
            from {
                id
            }
        }
        AddUserReviews_received
                    (
                        from: {
                            id: $id
                        }, to: {
                            id: $id_to
                        }) {
            from {
                id
            }
        }
  }

`;

const GET_USER = gql`
          {
            User{ 
              username
              firstName
            }
          }
        `;


const WriteReview = ({ post, onClose }) => (
    <FinalForm
        onSubmit={async ({
            id_from,
            password,
            title,
            stars,
            text,
            id_to }) => {
            const input = {
                id_from,
                password,
                title,
                stars,
                text,
                id_to
            };

            await client.mutate({
                mutation: CREATE_REVIEW,
                variables: { id: getId(), title: input.title, stars: Number(input.stars), text: input.text, id_from: input.id_from, id_to: input.id_to},
                refetchQueries: () => [{ query: GET_USER }],
            });
            onClose();
        }}
        initialValues={post}
        render={({ handleSubmit, pristine, invalid }) => (
            <Modal isOpen toggle={onClose}>
                <Form onSubmit={handleSubmit}>
                    <ModalHeader toggle={onClose}>
                        New Review
          </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label>Your ID</Label>
                            <Field
                                required
                                name="id_from"
                                className="form-control"
                                component="input"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Your Password</Label>
                            <Field
                                required
                                name="password"
                                className="form-control"
                                component="input"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Who are you reviewing? (ID)</Label>
                            <Field
                                required
                                name="id_to"
                                className="form-control"
                                component="input"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Title</Label>
                            <Field
                                required
                                name="title"
                                className="form-control"
                                component="input"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Stars</Label>
                            <Field
                                required
                                name="stars"
                                className="form-control"
                                component="input"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Text</Label>
                            <Field
                                required
                                name="text"
                                className="form-control"
                                component="input"
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" disabled={pristine} color="primary">Write Review</Button>
                        <Button color="secondary" onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        )}
    />
);

export default WriteReview;
