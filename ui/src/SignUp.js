import React, { useState, Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SignUp.css";

//     const [validated, setValidated] = useState(false);

//     const handleSubmit = event => {
//       const form = event.currentTarget;
//       if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//       }

//       setValidated(true);
//     };
export class SignUp extends Component {
    render() {
        return (
            <Form className="mr-auto ml-auto test">
                <Row>
                    <Col md={8}>
                        <FormGroup>
                            <Label for="Email">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter your Email here!" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="Age">Age</Label>
                            <Input type="number" name="age" id="age" placeholder="How old are you?" max="110" min="8" />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input type="password" name="password" id="Password" placeholder="Create your new password here!" />
                </FormGroup>
                <FormGroup>
                    <Label for="PasswordTest">Password</Label>
                    <Input type="password" name="passwordReEnter" id="PasswordReEnter" placeholder="Confirm your new password here!" />
                </FormGroup>
                <FormGroup>
                    <Label for="Sex">Select Sex</Label>
                    <Input type="select" name="Sex" id="SexSelect">
                        <option>Female</option>
                        <option>Male</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Tell everyone about you! Bio:</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup tag="fieldset">
                    <legend>Radio Buttons</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            PICK ME!
          </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio1" />{' '}
                            Better than the first.
          </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                        <Label check>
                            <Input type="radio" name="radio1" disabled />{' '}
                            Click me.I don't work,could be funny.
          </Label>
                    </FormGroup>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}