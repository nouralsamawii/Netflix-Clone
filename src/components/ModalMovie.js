import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import '../css/ModalMovie.css';

function ModalMovie(props) {

    const url = "http://localhost:3002/addMovie";

    const updateComment = (e) => {
        e.preventDefault();
        const obj = {
            title: props.clickedMovie.title,
            release_date: props.clickedMovie.release_date,
            poster_path: props.clickedMovie.poster_path,
            overview: props.clickedMovie.overview,
            comment: e.target.comment.value || ""
        }

        console.log(obj);

        axios.post(url, obj)
            .then(response => {
                console.log(response);
                console.log('success');
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <Modal show={props.show}
                onHide={props.handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Info Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={updateComment}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${props.clickedMovie.poster_path}`} width='100%' className='image-modal' />
                        <h3 style={{ textAlign: "center" }}>{props.clickedMovie.title}</h3>
                        <Form.Group className="mb-3">
                            <Form.Label>Add a comment</Form.Label>
                            <Form.Control name='comment' placeholder="Enter your comment" />
                        </Form.Group>
                        <Button variant="primary" type='submit'>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalMovie;
