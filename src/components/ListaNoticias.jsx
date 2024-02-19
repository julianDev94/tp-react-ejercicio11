import { CardGroup } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({noticias}) => {
    return (
        <CardGroup className="d-flex justify-content-center my-3">
            {
                noticias.map((noticia, pos)=><Noticia noticia={noticia} key={pos} />)
            }
        </CardGroup>
    );
};

export default ListaNoticias;