import { Card, Button, CardFooter, Col, Row } from "react-bootstrap";

const Noticia = ({ noticia }) => {
  return (
    <Row xs={1} md={2} className="g-4 my-2">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card className="cardNoticia h-100 mx-3">
            <Card.Img variant="top" src={noticia.image_url} />
            <Card.Body>
              <Card.Title>{noticia.title}</Card.Title>
              <Card.Text>{noticia.description}</Card.Text>
            </Card.Body>
            <CardFooter className="text-center">
              <Button variant="primary">Ver noticia completa</Button>
            </CardFooter>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Noticia;
