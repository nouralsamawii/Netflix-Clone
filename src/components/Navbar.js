
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navba from 'react-bootstrap/Navbar';

function Navbar() {
    return (
        <>
            <Navba bg="primary" data-bs-theme="dark">
                <Container>
                    <Navba.Brand href="#home">Netflix-Clone</Navba.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="favList">Favorite</Nav.Link>
                    </Nav>
                </Container>
            </Navba>
        </>
    )
}

export default Navbar;