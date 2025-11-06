import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Titulo from "./components/Titulo";
import { Container, Spinner } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { useEffect } from "react";
import ListaNoticias from "./components/ListaNoticias.jsx";
import { useState } from "react";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState("business");
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, [categoria]);

  const consultarAPI = async () => {
    try {
      const APIkey = "pub_38512e2708dc7ad15dfa9cad85c582a9c4ec1";
      const consulta = await fetch(`
    https://newsdata.io/api/1/news?apikey=${APIkey}&language=es&category=${categoria}`);
      const resultado = await consulta.json();
      setSpinner(false);
      console.log(resultado.results);
      setNoticias(resultado.results);
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarSpinner = spinner ? (
    <div className="d-flex justify-content-center">
      <Spinner animation="grow" variant="success" />
    </div>
  ) : (
    <section className="border border-dark">
      <ListaNoticias noticias={noticias} />
    </section>
  );

  return (
    <>
      <Titulo />
      <Container>
        <Formulario setCategoria={setCategoria} />
        {mostrarSpinner}
      </Container>
    </>
  );
}

export default App;
