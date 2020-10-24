// Import: Dependencies
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Component: Footer
export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Keyboard Shop</Col>
        </Row>
      </Container>
    </footer>
  );
}
