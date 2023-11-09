// SignupModal.tsx
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

interface SignupModalProps {
  show: boolean;
  onClose: () => void;
  onSignUp: (formData: FormData) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export function SignupModal({ show, onClose, onSignUp }) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUp = () => {
    onSignUp(formData);
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up for Membership</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your e-mail"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* Similar Form.Group for Last Name, Email, and Phone */}

          <Modal.Footer className="border-0">
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSignUp}>
              Sign Up
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};