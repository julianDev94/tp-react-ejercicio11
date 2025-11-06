import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Titulo from "./components/Titulo";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { useEffect } from "react";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    consultarAPI();
  }, [categoria]);

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
      <Titulo />
      <Container>
        <Formulario />
        <section className="border border-dark">
          <ListaNoticias noticias={noticias} />
        </section>
      </Container>
    </>
  );
}

export default App;
