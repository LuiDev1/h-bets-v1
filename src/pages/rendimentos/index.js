import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Button, Modal } from 'react-bootstrap';

function Header() {
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
      setShowModal(true);
  }

  return (
      <header className="App-header ">
          {/* ...restante do código... */}

          <button onClick={handleShowModal}>Abrir modal</button>

          <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                  <Modal.Title>Meu Modal</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <p>Este é o corpo do modal</p>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowModal(false)}>
                      Fechar
                  </Button>
                  <Button variant="primary" onClick={() => setShowModal(false)}>
                      Salvar
                  </Button>
              </Modal.Footer>
          </Modal>
      </header>
  );
}

export default Header;
