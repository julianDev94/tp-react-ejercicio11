import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Titulo from './components/Titulo'
import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'

function App() {
  

  return (
    <>
      <Titulo />
      <Container>
        <Formulario />
      </Container>
    </>
  )
}

export default App
