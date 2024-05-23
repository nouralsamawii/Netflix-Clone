import ModalMovie from "./ModalMovie";
import { useState } from "react";
import Movie from "./Movie";
import { Row, Col, Card, Button } from 'react-bootstrap';

function MovieList(props) {



    const [show, setShow] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});
    // const [updateFlag, setUpdateFlag] = useState(false);

    const handleShow = (item) => {
        setShow(true)
        // console.log(item)
    }


    const handleClose = () => {
        setShow(false)
    }

    const showModal = (item) => {
        setShow(true)
        // console.log(item);
        setClickedMovie(item)
    }

    return (
        <Row>
            {props.moviesData.map(item => (
                <Col key={item.id}>
                    <Movie item={item} showModal={showModal} />
                </Col>
            ))}
            <ModalMovie show={show} handleClose={handleClose} clickedMovie={clickedMovie} />
        </Row>
    );
}

export default MovieList;