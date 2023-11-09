// MembershipSection.tsx
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { SignupModal } from './SignupModal'; // Adjust the path based on your project structure

export function MembershipSection() {
  const [showModal, setShowModal] = useState(false);

  const handleJoinClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSignUp = (formData: FormData) => {
    // Perform signup logic here (e.g., send data to MongoDB)
    console.log('Signing up:', formData);

    // Close the modal after signup
    handleModalClose();
  };

  return (
    <>
      <div className="membership-section">
        <h2>Join Our Membership</h2>
        <p>Get exclusive perks and rewards!</p>
        <Button variant="primary" onClick={handleJoinClick}>
          Join Now
        </Button>
      </div>

      <SignupModal show={showModal} onClose={handleModalClose} onSignUp={handleSignUp} />
    </>
  );
};
