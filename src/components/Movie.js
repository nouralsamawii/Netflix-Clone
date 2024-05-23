import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Movie(props) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${props.item.poster_path}`} />
                <Card.Body>
                    <Card.Title>{props.item.title}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Button variant="primary" onClick={() => { props.showModal(props.item) }}>Add to Favorite</Button>
                </Card.Body>
            </Card >
        </>
    )
}

export default Movie;