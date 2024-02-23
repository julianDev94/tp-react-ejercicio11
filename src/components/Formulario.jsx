import { useEffect, useState } from "react";
import { Form, Col, Row, Spinner } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    if (categoria !== "") {
      consultarAPI();
    }
  }, [categoria]);

  const handlerSubmit = (e) => {
    setCategoria(e.target.value);
  };

  const consultarAPI = async () => {
    const APIkey = "pub_38512e2708dc7ad15dfa9cad85c582a9c4ec1";
    const consulta = await fetch(`
    https://newsdata.io/api/1/news?apikey=${APIkey}&language=es&category=${categoria}`);
    const resultado = await consulta.json();
    console.log(resultado.results);
    setNoticias(resultado.results);
  };

  return (
    <>
      <Form className="border border-dark p-3">
        <Form.Group as={Row} className="mb-3 d-flex justify-content-center">
          <Form.Label column sm="2" className="fw-bold">
            Buscar por categoría:
          </Form.Label>
          <Col sm="9">
            <Form.Select onChange={handlerSubmit}>
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
      <section className="border border-dark">
        <ListaNoticias noticias={noticias} />
      </section>
    </>
  );
};

export default Formulario;
