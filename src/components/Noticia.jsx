import { Card, Button, CardFooter, Col, Row } from "react-bootstrap";

const Noticia = ({ noticia }) => {
  return (
    <Card className="cardNoticia h-100">
      <Card.Img
        variant="top"
        src={noticia.image_url}
        alt="Imagen de noticia no disponible"
      />
      <Card.Body>
        <Card.Title>{noticia.title}</Card.Title>
        <Card.Text>{noticia.description}</Card.Text>
      </Card.Body>
      <CardFooter className="text-center py-3">
        <Button variant="primary" href={noticia.link}>
          Ver noticia completa
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Noticia;
