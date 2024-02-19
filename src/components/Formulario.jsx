import { useEffect, useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const Formulario = () => {
  const [noticias, setNoticias] = useState([]);
  // const [categoria, setCategoria] = useState("");

  useEffect(() => {
    consultarAPI();
    filtrarCategoria();
  }, []);

  const filtrarCategoria = () =>{
    
   
    
  }

  const consultarAPI = async () => {
    const APIkey = "pub_38512e2708dc7ad15dfa9cad85c582a9c4ec1";
    const consulta = await fetch(
      `https://newsdata.io/api/1/news?apikey=${APIkey}&language=es`
    );
    const { results } = await consulta.json();
    console.log(results);
    setNoticias(results);
  };

  return (
    <>
      <section className="border border-dark p-3">
        <Form.Group as={Row} className="mb-3 d-flex justify-content-center">
          <Form.Label column sm="2" className="fw-bold">
            Buscar por categoría:
          </Form.Label>
          <Col sm="9">
            <Form.Select aria-label="Default select example">
              {
                noticias.map((noticia) => <option>{noticia.category}</option>)
              }
              {/* <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option> */}

            </Form.Select>
          </Col>
        </Form.Group>
      </section>
      <section className="border border-dark">
        <ListaNoticias noticias={noticias}/>
      </section>
    </>
  );
};

export default Formulario;
