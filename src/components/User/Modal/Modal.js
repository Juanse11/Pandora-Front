import React from "react";
import styled from "styled-components";
import { Button, Modal } from "semantic-ui-react";

const StyledModal = styled(Modal)`
  &&&& {
    max-width: 100%;
    width: 568px;
  }
`;

const Content = styled(Modal.Content)`
  &&&& {
    border: none;
    padding: 32px;
  }
`;

const UserModal = ({ handleOpen, handleClose, modalOpen, children, name, isLogin }) => (
  <StyledModal
    trigger={
      <Button
        style={{
          background: "none",
          fontSize: "15px",
          color: "#4f4b65",
          fontWeight: 600
        }}
        onClick={handleOpen}
      >
        {name}
      </Button>
    }
    open={modalOpen}
    onClose={handleClose}
    size="small"
    closeIcon
  >
    <Content>{children}</Content>
  </StyledModal>
);
export default UserModal;
