import { Form, Col, Row } from "react-bootstrap";

const Formulario = () => {
  return (
    <section className="border border-dark p-3">
      <Form.Group as={Row} className="mb-3 d-flex justify-content-center">
        <Form.Label column sm="2" className="fw-bold">
          Buscar por categoría:
        </Form.Label>
        <Col sm="9">
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Form.Group>
    </section>
  );
};

export default Formulario;
