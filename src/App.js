import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container className="my-4">
        <Home />
      </Container>
    </>
  );


}

export default App;
