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

const CREATE_USER = gql`
  mutation CreateUser
    (
        $id: ID!, 
        $username: String!, 
        $firstName: String, 
        $lastName: String, 
        $age: Int, 
        $bio: String, 
        $sex: String, 
        $location: String!, 
        $phone: String!, 
        $email: String!,
        $password: String!) 
            {CreateUser
                (
                    id: $id, 
                    username: $username, 
                    firstName: $firstName, 
                    lastName: $lastName, 
                    sex: $sex, 
                    age: $age, 
                    bio: $bio, 
                    location: $location, 
                    phone: $phone, 
                    email: $email,
                    password: $password) {
      id
      username
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


const SignUp = ({ post, onClose }) => (
  <FinalForm
    onSubmit={async({
      id,
      username,
      firstName,
      lastName,
      location,
      phone,
      email,
      password }) => {
      const input = {
        id,
        username,
        firstName,
        lastName,
        location,
        phone,
        email,
        password };

      await client.mutate({
        mutation: CREATE_USER,
        variables: { id: getId(), username: input.username, firstName: input.firstName, lastName: input.lastName, location: input.location, phone: input.phone, email: input.email, password: input.password },
        refetchQueries: () => [{ query: GET_USER }],
      });
      onClose();
    }}
    initialValues={post}
    render={({ handleSubmit, pristine, invalid }) => (
      <Modal isOpen toggle={onClose}>
        <Form onSubmit={handleSubmit}>
          <ModalHeader toggle={onClose}>
          New User
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label>Username</Label>
              <Field
                required
                name="username"
                className="form-control"
                component="input"
              />
            </FormGroup>
            <FormGroup>
              <Label>First Name</Label>
              <Field
                required
                name="firstName"
                className="form-control"
                component="input"
              />
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Field
                required
                name="lastName"
                className="form-control"
                component="input"
              />
            </FormGroup>
            <FormGroup>
              <Label>Location</Label>
              <Field
                required
                name="location"
                className="form-control"
                component="input"
              />
            </FormGroup>
            <FormGroup>
              <Label>Phone</Label>
              <Field
                required
                name="phone"
                className="form-control"
                component="input"
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Field
                required
                name="email"
                className="form-control"
                component="input"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Field
                required
                name="password"
                className="form-control"
                component="input"
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" disabled={pristine} color="primary">Create User</Button>
            <Button color="secondary" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </Form>
      </Modal>
    )}
  />
);

export default SignUp;




// const CREATE_USER = gql`
//   mutation CreateUser
//     (
//         $id: ID!, 
//         $username: String!, 
//         $firstName: String, 
//         $lastName: String, 
//         $age: Int, 
//         $bio: String, 
//         $sex: String, 
//         $location: String!, 
//         $phone: String!, 
//         $email: String!,
//         $password: String!) 
//             {CreateUser
//                 (
//                     id: $id, 
//                     username: $username, 
//                     firstName: $firstName, 
//                     lastName: $lastName, 
//                     sex: $sex, 
//                     age: $age, 
//                     bio: $bio, 
//                     location: $location, 
//                     phone: $phone, 
//                     email: $email,
//                     password: $password) {
//       id
//       username
//     }
//   }
// `;

// export const SignUp = () => {
//     let input;
//     const [todoInput, setTodoInput] = useState('');

//     const updateCache = (cache, { data }) => {
//         // Fetch the todos from the cache
//         const existingTodos = cache.readQuery({
//             query: GET_USER
//         });
//         // Add the new todo to the cache
//         const newTodo = data.insert_todos.returning[0];
//         cache.writeQuery({
//             query: GET_USER,
//             data: { todos: [newTodo, ...existingTodos.todos] }
//         });
//     };

//     const [addTodo] = useMutation(CREATE_USER);

//     return (
//         <form className="formInput" onSubmit={(e) => {
//             e.preventDefault();
//             addTodo({ variables: { todo: todoInput } });
//         }}>
//             <input
//                 className="input"
//                 placeholder="What needs to be done?"
//                 value={todoInput}
//                 onChange={e => (setTodoInput(e.target.value))}
//                 ref={n => (input = n)}
//             />
//             <i className="inputMarker fa fa-angle-right" />
//         </form>
//     );
// };


// export class SignUp extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             id: '',
//             username: '',
//             firstName: '',
//             lastName: '',
//             age: 0,
//             bio: '',
//             sex: '',
//             location: '',
//             phone: '',
//             email: '',
//             password: '',
//         };
//         this.createUser.bind(this);
//     }
    

//     createUser(){
//         return null;
//     }


//     render() {
//         const {
//             id,
//             username,
//             firstName,
//             lastName,
//             age,
//             bio,
//             sex,
//             location,
//             phone,
//             email,
//             password
//         } = this.state

//         return (
//             <Form className="mr-auto ml-auto test">
//                 <Row>
//                     <Col md={8}>
//                         <FormGroup>
//                             <Label for="Email">Email</Label>
//                             <Input
//                                 type="email"
//                                 name="email"
//                                 id="exampleEmail"
//                                 placeholder="Enter your Email here!"
//                                 value={email}
//                                 onChange={e => this.setState({ email: e.target.value })}
//                             />
//                         </FormGroup>
//                     </Col>
//                     <Col md={4}>
//                         <FormGroup>
//                             <Label for="Age">Age</Label>
//                             <Input
//                                 type="number"
//                                 name="age"
//                                 id="age"
//                                 placeholder="How old are you?"
//                                 max="110"
//                                 min="8"
//                                 value={age}
//                                 onChange={e => this.setState({ age: e.target.value })}
//                             />
//                         </FormGroup>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col md={8}>
//                         <FormGroup>
//                             <Label for="firstName">firstName</Label>
//                             <Input
//                                 name="firstName"
//                                 id="firstName"
//                                 placeholder="Enter your firstName here!"
//                                 value={firstName}
//                                 onChange={e => this.setState({ firstName: e.target.value })}
//                             />
//                         </FormGroup>
//                     </Col>
//                     <Col md={4}>
//                         <FormGroup>
//                             <Label for="lastName">lastName</Label>
//                             <Input
//                                 name="lastName"
//                                 id="lastName"
//                                 placeholder="Enter your lastName here!"
//                                 value={lastName}
//                                 onChange={e => this.setState({ lastName: e.target.value })}
//                             />
//                         </FormGroup>
//                     </Col>
//                 </Row>
//                 <FormGroup>
//                     <Label for="Username">Username</Label>
//                     <Input
//                         name="username"
//                         id="username"
//                         placeholder="Come up with something unique!"
//                         value={username}
//                         onChange={e => this.setState({ username: e.target.value })}
//                     />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="id">id</Label>
//                     <Input
//                         name="id"
//                         id="id"
//                         placeholder="Come up with something unique!"
//                         value={id}
//                         onChange={e => this.setState({ id: e.target.value })}
//                     />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="Password">Password</Label>
//                     <Input
//                         type="password"
//                         name="password"
//                         id="Password"
//                         placeholder="Create your new password here!"
//                         value={password}
//                         onChange={e => this.setState({ password: e.target.value })}
//                     />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="Sex">Select Sex</Label>
//                     <Input
//                         type="select"
//                         name="Sex"
//                         id="SexSelect"
//                         value={sex}
//                         onChange={e => this.setState({ sex: e.target.value })} >
//                         <option>Female</option>
//                         <option>Male</option>
//                     </Input>
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="Location">Location</Label>
//                     <Input
//                         name="location"
//                         id="location"
//                         placeholder="Come up with something unique!"
//                         value={location}
//                         onChange={e => this.setState({ location: e.target.value })}
//                     />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="Phone">Phone</Label>
//                     <Input
//                         name="phone"
//                         id="phone"
//                         placeholder="Come up with something unique!"
//                         value={phone}
//                         onChange={e => this.setState({ phone: e.target.value })}
//                     />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="exampleText">Tell everyone about you! Bio:</Label>
//                     <Input
//                         type="textarea"
//                         name="text"
//                         id="exampleText"
//                         value={bio}
//                         onChange={e => this.setState({ bio: e.target.value })}
//                     />
//                 </FormGroup>
//                 <Mutation mutation={CREATE_USER} variables={{
//                     id,
//                     username,
//                     firstName,
//                     lastName,
//                     age,
//                     bio,
//                     sex,
//                     location,
//                     phone,
//                     email,
//                     password }}>
//                     {<button onClick={createUser}>Submit</button>}
//                 </Mutation>
//             </Form>
//         );
//     }
// }