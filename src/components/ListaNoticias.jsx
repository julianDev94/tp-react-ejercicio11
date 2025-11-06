import { CardGroup,Row,Col } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({ noticias }) => {
  return (
    <CardGroup className="my-3">
      <Row xs={1} md={3} className="g-4">
        {noticias.map((noticia, idx) => (
          <Col key={idx} className="text-center d-flex justify-content-center">
            <Noticia noticia={noticia}  />
          </Col>
        ))}
      </Row>
    </CardGroup>
  );
};

export default ListaNoticias;
