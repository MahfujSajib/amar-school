import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './contactUs.css'

const ContactUs = () => {
    return (

        <Form className='mt-5'>
            <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicEmail">
                <Form.Label className='contact'>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicPassword">
                <Form.Label className='contact'>Your Comment</Form.Label>
                <Form.Control type="text" placeholder="Write your comment" />
            </Form.Group>
            <Button className='btn btn-primary' variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    );
};

export default ContactUs;