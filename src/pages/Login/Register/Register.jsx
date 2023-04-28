import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Register = () => {

    const [accepted, setAccepted] = useState(false)
    const { createUser } = useContext(AuthContext);

    const hadleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, password, email);

        createUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }
    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={hadleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group onClick={handleAccepted} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label={<>Accept <Link to='/terms'>Terms And Condition</Link></>}/>
                </Form.Group>

                <Button disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>

                <br />

                <Form.Text  className="text-secondary">
                    Already Have An Account ?<Link to='/login'>Login</Link>
                </Form.Text>

                <Form.Text className="text-success">

                </Form.Text>

                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;