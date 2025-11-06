import { Form, Col, Row } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  return (
    <>
      <Form className="border border-dark p-3">
        <Form.Group as={Row} className="mb-3 d-flex justify-content-center">
          <Form.Label column sm="2" className="fw-bold">
            Buscar por categoría:
          </Form.Label>
          <Col sm="9">
            <Form.Select onChange={(e) => console.log(e.target.value)}>
              <option value="">Elije una Categoria</option>
              <option value="business">Negocios</option>
              <option value="crime">Crimen</option>
              <option value="domestic">Doméstico</option>
              <option value="education">Educación</option>
              <option value="entertainment">Entretenimiento</option>
              <option value="environment">Medio ambiente</option>
              <option value="food">Comida</option>
              <option value="health">Salud</option>
              <option value="lifestyle">Estilo de vida</option>
              <option value="other">Otro</option>
              <option value="politics">Política</option>
              <option value="science">Ciencia</option>
              <option value="sports">Deportes</option>
              <option value="technology">Tecnología</option>
              <option value="top">Destacados</option>
              <option value="tourism">Turismo</option>
              <option value="world">Mundo</option>
            </Form.Select>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default Formulario;
