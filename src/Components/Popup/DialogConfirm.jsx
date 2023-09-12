import React, {
  Fragment,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import PropTypes from "prop-types";

import { Modal, Row, Button, Col, Form, Card } from "react-bootstrap";

export default function DialogConfirm({
  show,
  onClose,
  title,
  body,
  acceptAction,
  cancelAction,
}) {
  const acceptButton = () => {
    acceptAction();
    onClose();
  };
  return (
    <Modal show={show} onHide={() => onClose()} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => acceptButton()}>
          はい
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            onClose();
          }}
        >
          いいえ
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

DialogConfirm.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  acceptAction: PropTypes.func.isRequired,
};
