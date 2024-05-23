
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Changed BrowserRouter to Router
import Navbar from './components/Navbar';
import FavList from './components/FavList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Container className="my-4">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favlist' element={<FavList />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
